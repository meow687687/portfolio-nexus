# Project instructions

## Context maintenance

After every user prompt that results in project work, update `CONTEXT.md` with what was done in that turn. Record changed files, decisions, checks run and their results, and unresolved issues. Keep the current project summary accurate; append a dated entry to the work log rather than replacing previous entries. If no project files changed, record that no changes were made and note any decision or research result that should persist. Do not claim checks passed unless they were run and passed.

Before making changes, read `CONTEXT.md` and follow its current project decisions. Update it before finishing the task.

## Project scope and content

- This is Sumeet Basfore's personal portfolio.
- Do not add claims about projects, experience, skills, credentials, performance, production readiness, or live demos unless they are supported by approved profile data or repository evidence.
- Distinguish repository documentation claims from code inspected or behavior actually run. Label unavailable details as unavailable rather than inventing them.
- Keep the site to these five routes only: `/`, `/projects`, `/about`, `/stack`, `/contact`.
- Do not add 3D, elaborate animation, AI chatbots, dashboards, or extra pages unless explicitly requested.
- Preserve keyboard accessibility, semantic HTML, responsive layouts, and reduced-motion support.

## Next.js guidance

This project uses Next.js 16. Its APIs and conventions may differ from prior versions. Before changing Next.js behavior, read the relevant guide in `node_modules/next/dist/docs/` (resolved from this project directory), and follow its current API guidance.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
