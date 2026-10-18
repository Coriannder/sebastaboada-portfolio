# Sebastián Taboada — Portfolio

> Personal portfolio of **Sebastián Taboada** — Biomedical Engineer & Full Stack Developer.
> HealthTech, robust 3-tier backend APIs (TypeScript, Node.js, Express, MySQL) and autonomous AI agent architectures (Model Context Protocol).

---

## ⚡ Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack, React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 & class-based dark mode (inline init script, no theme lib)
- **Icons:** Lucide React & Custom SVG Brand Icons
- **Animation & UX:** Lightweight IntersectionObserver + CSS transitions (no animation library)
- **Internationalization (i18n):** Locale routes `/es` & `/en` (SSG) with cookie-based redirect via `src/proxy.ts`

---

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3005](http://localhost:3005) to view the portfolio.

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Lint and code quality check:**
   ```bash
   npm run lint
   ```

---

## 📂 Project Architecture

```text
src/
├── proxy.ts                 # Locale redirect (/ -> /es|/en via portfolio_lang cookie)
├── app/
│   ├── globals.css          # Theme variables & Tailwind v4 styling
│   └── [lang]/
│       ├── layout.tsx       # Root layout (<html>/<body>), theme init script, metadata
│       └── page.tsx         # One-page layout assembler
├── components/
│   ├── layout/              # Navbar (client), Footer (server)
│   ├── sections/            # Hero, Skills, Projects, Experience, Contact (server)
│   └── ui/                  # Reveal, ProjectCard, TerminalTabs, Typewriter, icons…
├── data/
│   └── dictionary.ts        # Source-of-truth bilingual dictionary (ES / EN)
├── lib/
│   └── utils.ts             # Class merging utility (clsx + twMerge)
└── types/
    └── content.ts           # Strict TypeScript contracts for content
```

---

## 👤 Author

**Sebastián Taboada**
- **Website:** [sebastaboada.com.ar](https://sebastaboada.com.ar)
- **LinkedIn:** [linkedin.com/in/sebastaboada](https://linkedin.com/in/sebastaboada)
- **GitHub:** [github.com/Coriannder](https://github.com/Coriannder)
- **Email:** [contacto@sebastaboada.com.ar](mailto:contacto@sebastaboada.com.ar)
