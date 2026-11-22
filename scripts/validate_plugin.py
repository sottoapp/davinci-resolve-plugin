#!/usr/bin/env python3
"""Static checks for the plugin: manifests parse, skills are well-formed, doc links resolve.
Usage: python3 scripts/validate_plugin.py   (exit 1 on any error)"""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
errors, warnings = [], []

for f in (".claude-plugin/plugin.json", ".claude-plugin/marketplace.json", ".mcp.json", "hooks/hooks.json"):
    try:
        json.loads((ROOT / f).read_text())
    except Exception as e:  # noqa: BLE001
        errors.append(f"{f}: {e}")

plugin = json.loads((ROOT / ".claude-plugin/plugin.json").read_text())
market = json.loads((ROOT / ".claude-plugin/marketplace.json").read_text())
for p in market["plugins"]:
    if "version" in p:
        errors.append("marketplace entry sets a version; keep it only in plugin.json")

hooks = json.loads((ROOT / "hooks/hooks.json").read_text())["hooks"]
for event, groups in hooks.items():
    for group in groups:
        for h in group["hooks"]:
            cmd = h.get("command", "")
            if re.match(r"^\w+=", cmd) or "python" in cmd:
                errors.append(f"hooks.json {event}: command must be plain `node ...` (no inline env, no python): {cmd}")
            for rel in re.findall(r"\$\{CLAUDE_PLUGIN_ROOT\}/([^\"\s]+)", cmd):
                if not (ROOT / rel).is_file():
                    errors.append(f"hooks.json {event}: missing script {rel}")
            if event == "PreToolUse" and h.get("onFailure") != "block":
                errors.append(f"hooks.json PreToolUse guard must set onFailure=block: {cmd}")

import subprocess
tracked = subprocess.run(["git", "ls-files"], cwd=ROOT, capture_output=True, text=True).stdout.split()
for f in tracked:
    if f.endswith((".pyc", ".pyo", ".so", ".dll", ".exe")) and not f.startswith("mcp-server/"):
        errors.append(f"tracked binary: {f}")

link = re.compile(r"`((?:mcp-server|docs)/[A-Za-z0-9_./-]+)`|\(((?:mcp-server|docs)/[A-Za-z0-9_./-]+)\)")
skill_names = {p.name for p in (ROOT / "skills").iterdir()}
xref = re.compile(r"`((?:resolve|editing)-[a-z-]+|house-style|authoring-resolve-skills)`")
for skill in sorted((ROOT / "skills").iterdir()):
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
        if "*" not in t and not (ROOT / t).exists():
            errors.append(f"{skill.name}: broken path {t}")

for agent in sorted((ROOT / "agents").glob("*.md")):
    for bare in re.findall(r"mcp__davinci-resolve[\w-]*__\w+", agent.read_text()):
        errors.append(f"{agent.name}: unscoped tool name {bare}")

print(f"{len(list((ROOT/'skills').iterdir()))} skills checked")
for w in warnings: print("WARN ", w)
for e in errors: print("ERROR", e)
sys.exit(1 if errors else 0)
