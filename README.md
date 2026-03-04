# ⚡ Shruti Singh Baghel — Portfolio

> Senior Full Stack & GenAI Engineer · Vue 3 · Python · React · Node.js · AWS · RAG · LLMs

[![Live Demo](https://img.shields.io/badge/Live%20Demo-shruti--portfolio.vercel.app-00f5d4?style=for-the-badge&logo=vercel&logoColor=black)](https://shruti-portfolio-5b8ul6ox4-shruti-singh-baghels-projects.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-baghel25-7b2fff?style=for-the-badge&logo=github)](https://github.com/baghel25)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Shruti%20Singh%20Baghel-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/shruti-singh-baghel-2b67a416a/)

---

## 🖥️ Preview

A futuristic, neon-themed developer portfolio built with **Vue 3 + Vite** — featuring animated particle networks, orbiting tech badges, scroll-triggered reveals, and animated skill bars.

---

## ✨ Features

- **Custom animated cursor** — glowing neon dot with lagging ring
- **Particle network canvas** — 80 floating particles with connecting lines
- **Hero orbital animation** — tech badges orbit a glowing center orb via `requestAnimationFrame` (always upright, never tilted)
- **Scroll-triggered reveals** — sections fade up as you scroll using `IntersectionObserver`
- **Animated skill bars** — cascade-fill animation with stagger delay on scroll
- **Floating stat cards** — `~90% Script Usability`, `5.5+ Years`, `70% Effort Reduced`
- **SSB hex logo** — animated hexagon logo mark with hover spin + glow
- **Blinking terminal cursor** — `SSB_` wordmark in nav
- **Responsive** — works on mobile, tablet, and desktop
- **Full SEO + OG meta tags** — LinkedIn/WhatsApp share previews
- **PWA-ready** — `site.webmanifest` + full favicon suite

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Vue 3 (Composition API, `<script setup>`) |
| Build Tool | Vite 6 |
| State | Pinia-ready (composables used) |
| Styling | Scoped CSS + CSS custom properties |
| Fonts | Barlow Condensed + JetBrains Mono |
| Animation | CSS keyframes + `requestAnimationFrame` |
| Deployment | Vercel |

---

## 📁 Project Structure

```
shruti-portfolio/
├── public/
│   ├── favicon.svg              # SVG favicon (hex logo mark)
│   ├── favicon-32.png
│   ├── favicon-16.png
│   ├── apple-touch-icon.png
│   └── site.webmanifest
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── global.css       # CSS variables, resets, keyframes
│   ├── components/
│   │   ├── NavLogo.vue          # Animated SSB hex logo
│   │   ├── AppNav.vue           # Fixed navigation
│   │   ├── AppCursor.vue        # Custom cursor
│   │   ├── ParticleCanvas.vue   # Canvas particle network
│   │   ├── HeroSection.vue      # Hero + orbital badge animation
│   │   ├── AboutSection.vue     # About + stat cards
│   │   ├── ProjectsSection.vue  # Projects grid
│   │   ├── SkillsSection.vue    # Skills with animated bars
│   │   ├── ContactSection.vue   # Contact + socials
│   │   └── AppFooter.vue        # Footer
│   ├── composables/
│   │   ├── useCursor.js         # Cursor RAF animation
│   │   └── useScrollReveal.js   # IntersectionObserver reveal
│   ├── data/
│   │   ├── projects.js          # All project data + links
│   │   └── skills.js            # Skill groups + percentages
│   ├── App.vue
│   └── main.js
├── index.html                   # SEO + favicon + font links
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `>=18`
- npm `>=9`

### Install & Run

```bash
# Clone the repo
git clone https://github.com/baghel25/shruti-portfolio.git
cd shruti-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output goes to `/dist` — ready to deploy.

### Preview Production Build

```bash
npm run preview
```

---

## 🌐 Deployment

### Vercel (Recommended)

This project is deployed on **Vercel** with zero config.

1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Vite — hit **Deploy**

Every `git push` to `main` triggers an automatic redeploy.

| Setting | Value |
|---------|-------|
| Framework | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |

---

## 🎨 Design System

```css
--bg:      #060610   /* Deep space background */
--surface: #0d0d1f   /* Card / section surface */
--neon:    #00f5d4   /* Primary neon teal */
--neon2:   #7b2fff   /* Purple accent */
--neon3:   #ff2d78   /* Pink accent */
--text:    #e8eaf6   /* Primary text */
--muted:   #6b7280   /* Muted / secondary text */
```

**Fonts:**
- Display / Body → `Barlow Condensed` (400, 700, 800)
- Mono / Labels → `JetBrains Mono` (400, 700)

---

## 📌 Projects Showcased

| Project | Tag | Live |
|---------|-----|------|
| API Reliability Dashboard | Analytics | [vercel.app](https://api-reliability-dashboard-acp77g73d.vercel.app/) |
| Trade Journal | Fintech | [vercel.app](https://trade-journal-lac.vercel.app) |
| Chatbot Flow Builder | SaaS Tool | [github.io](https://baghel25.github.io/Chatbot-flow-builder/) |
| Real Estate App | Full Stack | [github.io](https://baghel25.github.io/React-asssignment/) |
| Indian Cuisine App | UI / React | [github.com](https://github.com/baghel25/indian-cuisine-app) |
| Loan Amortization Calculator | Fintech | [github.com](https://github.com/baghel25/loan-amortization-calculator) |

---

## 📬 Contact

**Shruti Singh Baghel**
- 📧 [shrutibaghelsingh@gmail.com](mailto:shrutibaghelsingh@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/shruti-singh-baghel-2b67a416a/)
- 🐙 [GitHub](https://github.com/baghel25)
- 🌐 [Portfolio](https://shruti-portfolio.vercel.app)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Designed & Built with ⚡ by <strong>Shruti Singh Baghel</strong> · Bangalore, India
</p>
