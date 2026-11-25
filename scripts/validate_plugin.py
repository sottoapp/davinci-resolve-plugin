#!/usr/bin/env python3
"""Static checks for the plugin: manifests parse, skills are well-formed, doc links resolve.
Usage: python3 scripts/validate_plugin.py   (exit 1 on any error)"""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent   # repo root
PLUGIN = ROOT / "plugin"                          # the shipped plugin
VENDOR = ROOT / "vendor/davinci-resolve-mcp"      # upstream source, not shipped
errors, warnings = [], []

SHIPPED = ("plugin", "plugin-advanced")  # folders the marketplace installs
for f in ("plugin/.claude-plugin/plugin.json", "plugin-advanced/.claude-plugin/plugin.json", ".claude-plugin/marketplace.json",
          "plugin/.mcp.json", "plugin-advanced/.mcp.json", "plugin/hooks/hooks.json"):
    try:
        json.loads((ROOT / f).read_text())
    except Exception as e:  # noqa: BLE001
        errors.append(f"{f}: {e}")

plugin = json.loads((PLUGIN / ".claude-plugin/plugin.json").read_text())
market = json.loads((ROOT / ".claude-plugin/marketplace.json").read_text())
for p in market["plugins"]:
    if p.get("source") not in ("./plugin", "./plugin-advanced"):
        errors.append(f"marketplace source {p.get('source')} must be ./plugin or ./plugin-advanced (the lean shipped folders)")
    if "version" in p:
        errors.append("marketplace entry sets a version; keep it only in plugin.json")

hooks = json.loads((PLUGIN / "hooks/hooks.json").read_text())["hooks"]
for event, groups in hooks.items():
    for group in groups:
        for h in group["hooks"]:
            cmd = h.get("command", "")
            if re.match(r"^\w+=", cmd) or "python" in cmd:
                errors.append(f"hooks.json {event}: command must be plain `node ...` (no inline env, no python): {cmd}")
            for rel in re.findall(r"\$\{CLAUDE_PLUGIN_ROOT\}/([^\"\s]+)", cmd):
                if not (PLUGIN / rel).is_file():
                    errors.append(f"hooks.json {event}: missing script {rel}")
            if event == "PreToolUse" and h.get("onFailure") != "block":
                errors.append(f"hooks.json PreToolUse guard must set onFailure=block: {cmd}")

import subprocess
tracked = subprocess.run(["git", "ls-files"], cwd=ROOT, capture_output=True, text=True).stdout.split()
IMG = (".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg")
shipped_by = {d: [f for f in tracked if f.startswith(d + "/")] for d in SHIPPED}
for f in tracked:
    if f.endswith((".pyc", ".pyo", ".so", ".dll", ".exe")) and not f.startswith("vendor/"):
        errors.append(f"tracked binary: {f}")
# public-directory limits for the shipped folder: <=512 files, each non-image file <=256 KiB, no non-text binaries
pkg = json.loads((VENDOR / "package.json").read_text())["version"]
for d, files in shipped_by.items():
    if len(files) > 512:
        errors.append(f"{d}/ has {len(files)} files (directory limit 512)")
    for f in files:
        fp = ROOT / f
        if not f.endswith(IMG) and fp.stat().st_size > 256 * 1024:
            errors.append(f"{f}: {fp.stat().st_size} bytes (directory limit 256 KiB per non-image file)")
    print(f"{d}/ ships {len(files)} files")
    if (ROOT / d / "bin").exists():
        errors.append(f"{d}/bin must not exist (claude.ai/Cowork installs refuse it)")
    for name, srv in json.loads((ROOT / d / ".mcp.json").read_text())["mcpServers"].items():
        if srv.get("command") != "node" or "@latest" in json.dumps(srv):
            errors.append(f"{d}/.mcp.json {name}: use plain node with the pinned launcher")
    lt = (ROOT / d / "scripts/launch-mcp.mjs").read_text()
    if not re.search(r'const VERSION = "\d+\.\d+\.\d+"', lt):
        errors.append(f"{d}/scripts/launch-mcp.mjs must pin an exact VERSION")
    if f'const VERSION = "{pkg}"' not in lt:
        errors.append(f"{d} launcher pin differs from vendored upstream version {pkg}")
if (PLUGIN / "scripts/launch-mcp.mjs").read_text() != (ROOT / "plugin-advanced/scripts/launch-mcp.mjs").read_text():
    errors.append("plugin-advanced/scripts/launch-mcp.mjs must be an identical copy of plugin/scripts/launch-mcp.mjs")

link = re.compile(r"`((?:upstream|docs)/[A-Za-z0-9_./-]+)`|\(((?:upstream|docs)/[A-Za-z0-9_./-]+)\)")
def resolve_link(t):  # upstream/... lives in vendor/, docs/... ships in plugin/
    return VENDOR if t == "upstream" else (VENDOR / t[len("upstream/"):]) if t.startswith("upstream/") else (PLUGIN / t)
skill_names = {p.name for p in (PLUGIN / "skills").iterdir()}
budget_rows = {"desc": {}, "body": {}}
BODY_ALLOW = set()  # skills allowed above the body fail line; add one with an issue link if needed
xref = re.compile(r"`((?:resolve|editing)-[a-z-]+|house-style|authoring-resolve-skills)`")
for skill in sorted((PLUGIN / "skills").iterdir()):
    md = skill / "SKILL.md"
    if not md.is_file():
        errors.append(f"{skill.name}: missing SKILL.md"); continue
    text = md.read_text()
    m = re.match(r"---\n(.*?)\n---\n", text, re.S)
    if not m:
        errors.append(f"{skill.name}: no frontmatter"); continue
    fm = dict(re.findall(r"^(\w[\w-]*):\s*(.*)$", m.group(1), re.M))
    if fm.get("name") != skill.name:
        errors.append(f"{skill.name}: name '{fm.get('name')}' != directory")
    desc = fm.get("description", "")
    if not desc:
        errors.append(f"{skill.name}: empty description")
    else:
        if not desc.startswith("Use when"):
            errors.append(f"{skill.name}: description must start with 'Use when' (triggers only, no workflow summary)")
        if len(desc) > 1024:
            errors.append(f"{skill.name}: description {len(desc)} chars (>1024)")
        elif len(desc) > 500:
            warnings.append(f"{skill.name}: description {len(desc)} chars (aim <=500)")
    budget_rows["desc"][skill.name] = desc
    budget_rows["body"][skill.name] = len(text.split("---", 2)[2]) // 4
    words = len(text.split("---", 2)[2].split())
    if words > 700:
        warnings.append(f"{skill.name}: {words} words (aim <500; move heavy reference to references/)")
    if text.count("\n") > 500:
        warnings.append(f"{skill.name}: {text.count(chr(10))} lines (>500)")
    for ref in xref.findall(text):
        if ref not in skill_names and not ref.startswith("resolve-advanced"):
            warnings.append(f"{skill.name}: references unknown skill `{ref}`")
    for a, b in link.findall(text):
        t = (a or b).rstrip("/.")
        if "*" not in t and not resolve_link(t).exists():
            errors.append(f"{skill.name}: broken path {t}")

for agent in sorted((PLUGIN / "agents").glob("*.md")):
    for bare in re.findall(r"mcp__davinci-resolve[\w-]*__\w+", agent.read_text()):
        errors.append(f"{agent.name}: unscoped tool name {bare}")

LISTING_MAX, BODY_WARN, BODY_FAIL = 4500, 1000, 1500   # estimated tokens (chars/4); see plugin/docs/ARCHITECTURE.md
listing = sum(len(d) + len(n) + 12 for n, d in budget_rows["desc"].items()) // 4
print(f"budget: listing ~{listing} tokens ({len(budget_rows['desc'])} skills, ceiling {LISTING_MAX}); heaviest bodies:")
for n, t in sorted(budget_rows["body"].items(), key=lambda x: -x[1])[:5]:
    print(f"  {n:34s} ~{t} tokens")
if listing > LISTING_MAX:
    errors.append(f"skill listing ~{listing} tokens exceeds {LISTING_MAX}; shorten descriptions")
for n, t in budget_rows["body"].items():
    if t > BODY_FAIL and n not in BODY_ALLOW:
        errors.append(f"{n}: body ~{t} tokens exceeds {BODY_FAIL}; move detail to references/ (or add to BODY_ALLOW with an issue link)")
    elif t > BODY_WARN:
        warnings.append(f"{n}: body ~{t} tokens (warn above {BODY_WARN})")
print(f"{len(list((PLUGIN/'skills').iterdir()))} skills checked")
for w in warnings: print("WARN ", w)
for e in errors: print("ERROR", e)
sys.exit(1 if errors else 0)
