<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!-- project-notes -->

## Project notes

- Dev server: `npm run dev` → port **3005**. Watch for orphaned `next dev` node processes holding the port.
- i18n: locale routes `/es` and `/en` via `src/app/[lang]/`; root layout lives in `[lang]/layout.tsx` (owns `<html>`/`body`). `src/proxy.ts` (not `middleware.ts` — deprecated in Next 16) redirects `/` and unknown paths to the preferred locale via `portfolio_lang` cookie.
- Content lives in `src/data/dictionary.ts` (bilingual, typed via `src/types/content.ts`). All UI strings must come from the dictionary — no inline `lang ===` ternaries or hardcoded copy.
- Theme: no next-themes. Inline init script in `[lang]/layout.tsx` via `InlineScript` (`src/components/inline-script.tsx` — server renders `text/javascript`, client renders `text/plain` to avoid React's script warning). `useLayoutEffect` in Navbar re-applies `.dark` after locale re-renders reset `<html>` attrs. Toggle: `document.documentElement.classList.toggle('dark')` + `localStorage.theme`.
- Lint: `npm run lint`; `scripts/**` (personal CJS utils) is eslint-ignored.
- Single accent color lives in `globals.css` (`--accent`, light = emerald-700 for AA contrast, dark = emerald-400/500).
