---
name: short-film-narration
description: "10-min short film scripts: narration or screenplay format."
version: 1.1.0
author: Alucard0x1, Hermes Agent
license: MIT
platforms: [linux, macos, windows]
---

# Short Film Narration (10 Minutes)

Writes complete short film scripts for ~10 minutes in **two modes**: **Narration Mode** (voice-over / audio-first scripts) and **Screenplay Mode** (industry-standard naskah — a production-ready blueprint). Both modes follow a 3-act arc with per-minute beats. Works in any language — see Language Handling. Worked examples: `references/example-wayang-ujung-senja.md` (Narration Mode), `references/example-tidak-pelit-membuatku-kaya.md` (Screenplay Mode).

## Language Handling
- This skill file is written in English so any agent can parse it. The **script is written in the user's request language** — Indonesian, English, Spanish, Japanese, etc.
- Detect the request language from the user's prompt. If unclear, ask, or default to the user's chat language.
- Keep sluglines, beat sheet and structure language-neutral; only dialogue/action/VO are localized.
- Calibrate with the pace table below for the target language.

## When to Use
- User asks for "short film narration", "10-minute screenplay/script/naskah", "short video script", "voice-over story", "narasi film pendek", "短編映画の脚本", etc.
- Complete timed story for a short film / mini documentary / short animation
- **Screenplay Mode** when the user says "naskah", "screenplay", "script to produce/read professionally"
- **Narration Mode** when the user wants VO/audio-style narration (YouTube, documentary, podcast)
- Don't use for: features (>30 min — 5-act structure); content under 2 minutes (hook + payoff only)

## Screenplay Mode — Industry Format
- **1 page ≈ 1 minute** of screen time → a 10-minute short ≈ 9–11 pages, Courier 12pt, 1.5" left margin
- **Title page**: title, "written by", contact
- **Logline**: one sentence — protagonist + want + obstacle + stakes
- **Character list**: name (age), one-line description, want
- **FADE IN:**
- **Scene heading (slugline)**: `INT./EXT. LOCATION — TIME` — e.g. `INT. WARUNG SAMSUL — PAGI`
- **Action lines**: present tense, visual only, NO camera directions
- **Character cue**: NAME IN CAPS, centered; extensions `(V.O.)`, `(O.S.)`, `(CONT'D)`
- **Parentheticals**: sparingly, how the line is said — `(tersenyum)`
- **Dialogue**: centered block under the cue
- **Transitions**: `CUT TO:`, `FADE OUT:` — only when necessary

## Narration Mode — Scene-Block Format
```
[MM:SS–MM:SS] SCENE N — SHORT TITLE
VISUAL: brief visual description (subject, action, mood)
VO: "narration text"
DIALOG: "..." (optional, character name)
SFX/MUSIC: sound/music cue
```

## Craft Rules (both modes)
- **Active protagonist**: the main character must make choices that cost something. If removing them changes the story, rewrite.
- **Stakes**: name what is lost on failure (money, home, love, life). Show it early.
- **Cause and effect**: every turn follows from a previous choice. No deus ex machina, no convenient millionaires, no coincidence resolutions. The ending must be EARNED by the protagonist's actions.
- **Show, don't tell**: action demonstrates emotion/theme. Cut any line where a character states the theme.
- **Antagonist**: a real opposing force (person, system, deadline) that actively blocks the protagonist.
- **Arc costs**: the character's flaw must cost them something before they change.
- **One minute = one beat**: each minute/page carries one clear story beat.

## 10-Minute Structure (3 Acts)
- **ACT 1 (0:00–2:30):** Hook (first 15–30 s) + setup: character, want, obstacle; end act 1 with the inciting incident
- **ACT 2 (2:30–7:30):** Rising action; midpoint turn at ±4:30–5:00; a costly failure around 6:30–7:00
- **ACT 3 (7:30–10:00):** Climax + short resolution that echoes the opening (payoff); resolution caused by the protagonist's choices

## Duration Calibration
Voice-over pace (approximate, read-aloud):

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

- Narration Mode: VO fills ~60–70% of runtime → **800–1,000 VO words** for 10 min (char-equivalent for CJK)
- Screenplay Mode: page count rules (9–11 pages), not word count

## Procedure
1. Lock the premise: main character, want, obstacle, stakes, setting, tone
2. Screenplay Mode: write logline → character list → beat sheet (10 beats / 3 acts)
   Narration Mode: beat sheet (10 slots, one per minute)
3. Write scenes in order with sluglines/timestamps matching the beat sheet
4. Write action lines short, visual, present tense (≤2 lines where possible); dialogue spoken, ≤15 words per line
5. Read-aloud test: adjust so it fits the duration / page count
6. Make the final beat echo the opening (payoff)

## Pitfalls
- Too much dialogue → short films are visual; restraint is strength
- Scene without an emotional shift >90 s → cut it or add a micro-conflict
- Late hook → the first 15–30 seconds must grab attention
- Descriptive action ("he walks to the door") → replace with image + emotion
- Character stating the theme → cut; let the action say it
- Coincidence ending / deus ex machina → rewrite so the protagonist's choices cause the resolution
- Camera directions in a spec script → remove (director's job)
- VO over 1,000 words or script over 11 pages → runtime balloons; trim
- Open ending without payoff → resolution must close the loop

## Verification
- **Format**: title page + logline + character list present; sluglines `INT./EXT. — TIME`; cues in CAPS; transitions only when needed; page count 9–11 (screenplay mode) or timestamps contiguous (narration mode)
- **Story**: protagonist makes a costly choice; stakes stated early; resolution caused by protagonist's actions; no character states the theme; antagonist actively opposes; final beat echoes opening
- Read-aloud of dialogue+VO ≈ 10 minutes
