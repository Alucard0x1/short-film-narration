# Short Film Narration — Agent Skill

A portable, **agent-agnostic** skill for writing complete 10-minute short film narration (voice-over + visual + SFX + dialogue) with per-scene timestamps and a 3-act structure.

- Skill file written in **English**; the narration is written in the **user's request language** (multilingual pace calibration included — Indonesian, English, Spanish, French, German, Arabic, Japanese, Mandarin)
- Zero dependencies: no scripts, no APIs, no network — pure text instructions any agent can follow
- Uses the standard agent-skill format: YAML frontmatter + markdown body (`SKILL.md`)

## Files

| File | Purpose |
|---|---|
| `SKILL.md` | The skill itself (canonical, single source of truth) |
| `references/example-wayang-ujung-senja.md` | Full worked 10-minute example in Indonesian (demonstrates non-English output) |
| `LICENSE` | MIT |

## Install

The folder follows the layout agents expect for skills — a directory whose name matches the skill, containing `SKILL.md` at the root.

- **Claude Code**: copy the folder to `~/.claude/skills/short-film-narration/` (or add to a repo under `.claude/skills/`).
- **Cursor**: copy to `.cursor/skills/short-film-narration/` or add via Cursor Settings → Skills.
- **OpenAI Codex / AGENTS.md-based agents**: add to `AGENTS.md`:
  ```
  Read SKILL.md from the short-film-narration skill folder when the user asks for short film narration or a 10-minute script.
  ```
- **Hermes Agent**: place under `skills/creative/short-film-narration/`.
- **Any other LLM / chat**: paste the contents of `SKILL.md` into the conversation and ask for a 10-minute short film narration.

## Usage

Ask in any supported language, e.g.:

- "Write a 10-minute short film narration about a lighthouse keeper who loses his sight."
- "Buatkan narasi film pendek 10 menit tentang penjaga mercusuar."
- "10分の短編映画のナレーションを書いて。"

The agent detects the language, builds a 10-beat 3-act sheet, writes timed scenes (`[MM:SS] SCENE` blocks with VISUAL / VO / DIALOG / SFX), and calibrates the word count to the target language's narration pace.

## License

MIT — use, modify, and redistribute freely.
