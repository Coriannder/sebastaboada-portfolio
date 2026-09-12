# Sebastián Taboada — Portfolio

> Personal portfolio of **Sebastián Taboada** — Biomedical Engineer & Full Stack Developer.
> HealthTech, robust 3-tier backend APIs (TypeScript, Node.js, Express, MySQL) and autonomous AI agent architectures (Model Context Protocol).

---

## ⚡ Tech Stack

- **Framework:** Next.js 15 (App Router, Turbopack, React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 & Next Themes (Dark/Light mode)
- **Icons:** Lucide React & Custom SVG Brand Icons
- **Animation & UX:** Framer Motion & Responsive Touch Handling
- **Internationalization (i18n):** Native zero-latency bilingual engine (Spanish / English) powered by `useSyncExternalStore`

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
├── app/
│   ├── globals.css          # Theme variables & Tailwind v4 styling
│   ├── layout.tsx           # Root layout with ThemeProvider & LanguageProvider
│   └── page.tsx             # One-page layout assembler
├── components/
│   ├── layout/              # Fixed navbar, mobile drawer, footer
│   ├── providers/           # ThemeProvider (next-themes)
│   ├── sections/            # Hero, Skills, Projects, Experience, Contact
│   └── ui/                  # ProjectCard, Icons, UI primitives
├── context/
│   └── LanguageContext.tsx  # React 19 storage sync bilingual context
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
