---
name: short-film-narration
description: "Write 10-minute short film narration: 3-act, per-minute beats."
version: 1.0.0
author: Alucard0x1, Hermes Agent
license: MIT
platforms: [linux, macos, windows]
---

# Short Film Narration (10 Minutes)

Writes complete narration (voice-over + visual + SFX + dialogue) for a ~10-minute short film, with a per-scene timeline. Structured around a 3-act arc and word-count calibration. Works for any language — see Language Handling. Full worked example: `references/example-wayang-ujung-senja.md` (Indonesian sample).

## Language Handling
- This skill file is written in English so any agent can parse it. The **narration is written in the user's request language** — Indonesian, English, Spanish, Japanese, etc.
- Detect the request language from the user's prompt. If unclear, ask, or default to the user's chat language.
- Keep timestamps, beat sheet and scene structure language-neutral; only VO and dialogue are localized.
- Calibrate the word count with the table below for the target language.

## When to Use
- User asks for "short film narration", "10-minute screenplay/script", "short video script", "voice-over story", "narasi film pendek", "短編映画の脚本", etc.
- Complete timed story structure for a short film / mini documentary / short animation
- Don't use for: features (>30 min — use 5-act structure); content under 2 minutes (hook + payoff only)

## Duration Calibration
Voice-over pace (approximate, read-aloud narration):

| Language | pace |
|---|---|
| Indonesian | 130–150 words/min |
| English | 130–160 words/min |
| Spanish, Italian, Portuguese | 140–160 words/min |
| French | 140–165 words/min |
| German, Russian | 120–150 words/min |
| Arabic | 130–160 words/min |
| Japanese | 300–400 chars/min |
| Mandarin | 240–300 chars/min |

- 10 minutes ≈ 1,300–1,500 words of full text, BUT narration fills only ~60–70% of runtime (the rest is dialogue, music, silence)
- Target: **800–1,000 VO words** for a 10-minute film with dialogue (use the char-equivalent for CJK)
- Rule of thumb: one scene = 30–90 seconds; one minute = one clear story beat

## 10-Minute Structure (3 Acts)
- **ACT 1 (0:00–2:30):** Hook (first 0–30 s) + setup: character, want, obstacle
- **ACT 2 (2:30–7:30):** Rising action; midpoint turn at ±4:30–5:00
- **ACT 3 (7:30–10:00):** Climax + short resolution that echoes the opening (payoff)

## Script Format
Each scene as a block:

```
[MM:SS–MM:SS] SCENE N — SHORT TITLE
VISUAL: brief visual description (subject, action, mood)
VO: "narration text"
DIALOG: "..." (optional, character name)
SFX/MUSIC: sound/music cue
```

## Procedure
1. Lock the premise: main character, want, obstacle, setting, tone
2. Build a 10-slot beat sheet (one beat per minute) split into 3 acts
3. Write scenes one by one with timestamps matching the beat sheet
4. Write VO in short sentences (≤15 words), spoken rhythm — not written prose
5. Read-aloud test: adjust the word count so it fits the duration for the target language
6. Make the final VO line echo the opening line (payoff)

## Pitfalls
- Too much dialogue → short films are visual; VO is strongest when restrained
- A scene without an emotional shift lasting >90 s → cut it or add a micro-conflict
- Late hook → the first 15–30 seconds must grab attention
- Descriptive VO ("he walks to the door") → replace with image + emotion
- Open ending without payoff → the resolution must close the loop
- VO over 1,000 words → runtime balloons; trim, don't force

## Verification
- VO word count in the 800–1,000 range (or char-equivalent for CJK)
- Every scene has sequential timestamps with no gaps
- Hook ≤30 s, midpoint at ±5:00, resolution ≤2:30
- Read-aloud of all VO ≈ 10 minutes
