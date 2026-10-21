#!/usr/bin/env bash
# Sync the homepage diary (src/pages/index.astro) with diary.org using Claude Code.
# Usage: ./diary.sh [extra instructions]
set -euo pipefail

cd "$(dirname "$0")"

PROMPT="Update the diary section of src/pages/index.astro so it reflects diary.org.

Follow the UPDATE WORKFLOW comment at the top of src/pages/index.astro exactly:
- Each '* <period>' heading in diary.org is a diary entry; newest first.
- The period label goes in the COLS.title cell on the same row as the entry's first paragraph; subsequent paragraphs get their own body-only rows.
- Every [bracketed phrase] becomes an <a class=\"link\">. Resolve its href via the '** projects' legend under that entry (format 'label: name, url'). Match each phrase to the most fitting legend item; internal paths like /attention are site pages under src/pages.
- Don't render the '** projects' legend itself.
- Use HTML entities for typographic apostrophes (&rsquo;) like the existing markup.

Rules:
- Only touch the DIARY section between the 'what i've been up to' header and the 'apps & sites' comment. Leave everything else alone.
- Treat diary.org as the source of truth for content, but preserve existing small wording tweaks in index.astro for entries whose diary.org text hasn't meaningfully changed.
- Match the existing formatting and indentation of the diary rows.
- When done, print a short summary of what changed.

${*:-}"

claude -p "$PROMPT" \
  --model sonnet \
  --allowedTools "Read" "Edit" "Glob" "Grep"
