# Short Film Narration — Agent Skill

A portable, **agent-agnostic** skill for writing complete 10-minute short film scripts in **two modes**:

- **Screenplay Mode** — industry-standard naskah (title page, logline, character list, sluglines, action lines, character cues, dialogue, transitions; ~1 page = 1 minute)
- **Narration Mode** — voice-over/audio-first scripts with per-scene timestamps (VISUAL / VO / DIALOG / SFX)

Both modes follow a 3-act arc with per-minute beats, and enforce screenwriting craft rules: active protagonist, real stakes, cause-and-effect (no deus ex machina), show-don't-tell, and an antagonist that actively opposes.

- Skill file written in **English**; the script is written in the **user's request language** (multilingual pace calibration included — Indonesian, English, Spanish, French, German, Arabic, Japanese, Mandarin)
- Zero dependencies: no scripts, no APIs, no network — pure text instructions any agent can follow
- Uses the standard agent-skill format: YAML frontmatter + markdown body (`SKILL.md`)

## Files

| File | Purpose |
|---|---|
| `SKILL.md` | The skill itself (canonical, single source of truth) |
| `references/example-wayang-ujung-senja.md` | Full worked 10-minute example — Narration Mode (Indonesian) |
| `references/example-tidak-pelit-membuatku-kaya.md` | Full worked 10-minute example — Screenplay Mode (Indonesian) |
| `LICENSE` | MIT |

## Install

The folder follows the layout agents expect for skills — a directory whose name matches the skill, containing `SKILL.md` at the root.

### Via npx (zero clone)

```bash
# print the skill to stdout
npx -y github:Alucard0x1/short-film-narration

# install into .claude/skills or .cursor/skills (auto-detected)
npx -y github:Alucard0x1/short-film-narration install

# install into a specific directory
npx -y github:Alucard0x1/short-film-narration install ./my-agents/skills
```

### Manually

- **Claude Code**: copy the folder to `~/.claude/skills/short-film-narration/` (or add to a repo under `.claude/skills/`).
- **Cursor**: copy to `.cursor/skills/short-film-narration/` or add via Cursor Settings → Skills.
- **OpenAI Codex / AGENTS.md-based agents**: add to `AGENTS.md`:
  ```
  Read SKILL.md from the short-film-narration skill folder when the user asks for short film narration or a 10-minute script/naskah.
  ```
- **Hermes Agent**: place under `skills/creative/short-film-narration/`.
- **Any other LLM / chat**: paste the contents of `SKILL.md` into the conversation and ask for a 10-minute short film script.

## Usage

Ask in any supported language, e.g.:

- "Write a 10-minute short film narration about a lighthouse keeper who loses his sight."
- "Buatkan naskah film pendek 10 menit tentang penjaga mercusuar." (→ Screenplay Mode)
- "10分の短編映画のナレーションを書いて。"

The agent detects the language and mode, builds a 10-beat 3-act sheet, writes the script with proper formatting, and calibrates duration (page count for screenplay mode, word count for narration mode).

## License

MIT — use, modify, and redistribute freely.
