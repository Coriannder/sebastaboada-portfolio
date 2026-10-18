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
- Performance: no animation library on purpose (framer-motion was removed — Lighthouse 52→95). `Reveal` is IntersectionObserver + CSS transitions. Sections are server components; keep client islands tiny (TerminalTabs, Typewriter, CopyEmailButton, BackToTop, Navbar, ProjectCard) and pass only the dictionary slices a component needs.
- Contrast: never use `zinc-500` (or `dark:text-zinc-500`) on dark surfaces — use `zinc-400` for AA on `zinc-950`/`zinc-900` backgrounds.
- Infra: `www.sebastaboada.com.ar` is served by Vercel behind Cloudflare. Zone settings: `email_obfuscation` OFF and `rum` OFF (they injected render-blocking scripts). A Cache Rule edge-caches `/es` and `/en` for 5 min (`http_request_cache_settings` ruleset `5dd45c1a21bc4c3fa5f25bc316cdaf7a`) — expect stale HTML for up to 5 min after a deploy; purge via `POST /zones/{id}/purge_cache` if needed. A `cloudflare` MCP server (https://mcp.cloudflare.com/mcp, OAuth) is configured at user scope in Devin CLI for managing all this.
