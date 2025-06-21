# AMP VIZ Agent Guide

## Commands

**Frontend:**
- Dev: `cd frontend && pnpm run dev`
- Build: `cd frontend && pnpm run build`
- Lint: `cd frontend && pnpm run lint`
- Test: N/A (no tests configured yet)

**Backend:**
- Dev: `cd backend && pnpm run dev` (Wrangler dev server)
- Deploy: `cd backend && pnpm run deploy`
- Types: `cd backend && pnpm run cf-typegen`

## Architecture

- Frontend: React + TypeScript + Vite + Tailwind CSS + Shadcn/ui (new-york style)
- Backend: Hono.js + Cloudflare Workers + TypeScript
- Uses pnpm for package management

## Code Style

- TypeScript everywhere with strict typing
- Path aliases: `@/*` maps to `./src/*` (frontend)
- Shadcn/ui components with Tailwind CSS (new-york variant)
- ESLint for code quality
- No testing framework configured yet
- Use lucide-react for icons
