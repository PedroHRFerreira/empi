# Gemini reviewer

Follow the project governance in `AGENTS.md` and `.ai/constitution.md`.

In the rods-sdk workflow, act as the read-only reviewer after Codex develops the change. Review correctness, regressions, security, and tests. Return the structured review requested by the rods-sdk runner; do not edit the worktree during review.

Use `.ai/skills/review/SKILL.md` and `.ai/skills/quality/SKILL.md` as the review source of truth. Search indexed review context before broad file reads when Context Engine is available.
