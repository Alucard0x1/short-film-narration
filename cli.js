#!/usr/bin/env node
/**
 * short-film-narration — agent skill as an npx-runnable CLI.
 *
 *   npx github:Alucard0x1/short-film-narration            # print SKILL.md
 *   npx github:Alucard0x1/short-film-narration install    # install into .claude/skills or .cursor/skills
 *   npx github:Alucard0x1/short-film-narration install <dir>
 *
 * Pure Node, zero dependencies.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const FILES = ['SKILL.md', 'README.md', 'LICENSE'];

function printSkill() {
  process.stdout.write(fs.readFileSync(path.join(ROOT, 'SKILL.md'), 'utf8'));
}

function install(target) {
  const dest = path.join(target, 'short-film-narration');
  const refsDest = path.join(dest, 'references');
  fs.mkdirSync(refsDest, { recursive: true });
  for (const f of FILES) {
    const src = path.join(ROOT, f);
    if (fs.existsSync(src)) fs.copyFileSync(src, path.join(dest, f));
  }
  const refs = fs.readdirSync(path.join(ROOT, 'references'));
  for (const r of refs) {
    fs.copyFileSync(path.join(ROOT, 'references', r), path.join(refsDest, r));
  }
  console.log(`✓ short-film-narration installed → ${dest}`);
  console.log('  Point your agent at SKILL.md (Claude Code/Cursor pick it up automatically).');
}

const args = process.argv.slice(2);
if (args[0] === 'install') {
  let target = args[1];
  if (!target) {
    target = fs.existsSync('.claude') ? '.claude/skills'
           : fs.existsSync('.cursor') ? '.cursor/skills'
           : '.';
  }
  install(target);
} else if (args[0] === '--help' || args[0] === '-h' || args[0] === 'help') {
  console.log('short-film-narration — 10-min short film script skill (SKILL.md)');
  console.log('');
  console.log('Usage:');
  console.log('  npx github:Alucard0x1/short-film-narration            print the skill');
  console.log('  npx github:Alucard0x1/short-film-narration install    install to .claude/skills or .cursor/skills');
  console.log('  npx github:Alucard0x1/short-film-narration install <dir>');
} else {
  printSkill();
}
