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
    if p["name"] == plugin["name"] and p.get("version") != plugin.get("version"):
        errors.append("marketplace version != plugin.json version")

link = re.compile(r"`(mcp-server/[A-Za-z0-9_./-]+)`|\((mcp-server/[A-Za-z0-9_./-]+)\)")
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
    elif len(desc) > 1536:
        warnings.append(f"{skill.name}: description {len(desc)} chars (>1536 truncates)")
    if text.count("\n") > 500:
        warnings.append(f"{skill.name}: {text.count(chr(10))} lines (>500)")
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
