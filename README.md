<div align="center">

# Nova — Product Analytics for Modern Teams

A production-grade **SaaS marketing site + live analytics dashboard** built as a portfolio showpiece.

**Next.js 16 · TypeScript · Tailwind CSS v4 · shadcn/ui (Base UI) · Recharts · Framer Motion**

[![CI](https://img.shields.io/badge/CI-GitHub%20Actions-2088FF?logo=githubactions&logoColor=white)](.github/workflows/ci.yml)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](#deployment)
[![Node](https://img.shields.io/badge/Node.js-24.20.0-339933?logo=nodedotjs)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs)](https://nextjs.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-CSS%20v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)

</div>

---

## What this project demonstrates

Nova is the frontend anchor of a 5-project client showcase. It answers the
questions clients ask first: **"Can you build something that looks and feels
professional?"** and **"Do you ship with engineering discipline?"**

- **Marketing site** a client would believe is a real SaaS — sticky nav, animated hero, feature grid, metrics band, CTA, footer, full dark/light theming.
- **Live analytics dashboard** — KPI cards, revenue area chart, acquisition donut, traffic bar chart, top-products table, activity feed. Fully responsive from mobile to desktop.
- **Engineering hygiene** — typed end-to-end, linted, production-built, CI-tested, deployment-ready.

## Tech stack

| Layer      | Choice                                                          |
| ---------- | --------------------------------------------------------------- |
| Framework  | Next.js 16 (App Router, RSC + client islands, Turbopack)       |
| Language   | TypeScript                                                      |
| Styling    | Tailwind CSS v4 + CSS-variable theming (light / dark / system) |
| UI kit     | shadcn/ui (Base UI primitives)                                  |
| Charts     | Recharts 3                                                      |
| Animation  | Framer Motion (`motion/react`)                                  |
| Fonts      | Geist (UI) + Space Grotesk (display)                            |
| CI/CD      | GitHub Actions → Vercel                                         |

## Features

**Landing page** — animated hero with a rendered product mockup, trusted-by
logo cloud, four feature pillars, outcomes/metrics band, gradient CTA, footer.

**Dashboard** *(static demo with realistic mock data)* — sticky sidebar nav,
searchable header, export action, four KPI cards, monthly recurring revenue
trend, acquisition channel split, weekly traffic, top products by revenue,
and a teammate activity feed.

**Theming** — `light` / `dark` / `system` toggle persisted with `next-themes`,
hydrated without a flash, chart colors driven by the same CSS variables.

## Getting started

Prerequisites: Node.js 24 (see `.nvmrc`).

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run lint       # ESLint
npm run build      # production build + type check
npm start          # serve production build
```

## Project structure

```
app/
  layout.tsx            # fonts, metadata, theme + tooltip providers
  page.tsx              # landing page composition
  dashboard/
    layout.tsx          # dashboard metadata
    page.tsx            # analytics overview
components/
  dashboard/            # sidebar, header, KPI cards, charts, tables
  landing/              # navbar, hero, features, metrics, CTA, footer
  motion/               # scroll-reveal wrapper (Framer Motion)
  ui/                   # shadcn/ui primitives
  brand/                # logo
lib/
  data.ts               # typed mock dataset powering every chart
  utils.ts
```

## Deployment

Zero-config on **Vercel** (free tier): import the repo and Vercel detects
Next.js automatically. `main` is deployed on every push after CI passes.

Local production run:

```bash
npm run build && npm start
```

This project is #4 of a five-project portfolio. RAG, ML, DevOps/GitOps and a
full-stack SaaS MVP are built separately and linked from the same hub.

---

Built by [Krishnendu Pramanik](https://github.com/krish10021995). Demo data is
fictional and generated for illustration only.