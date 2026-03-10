# Project Instructions for Claude Code

## Package Manager: bun (MANDATORY)

**NEVER use `npm`, `npx`, `yarn`, or `pnpm`.** Always use `bun` for everything:

- `bun install` — install dependencies
- `bun add <pkg>` / `bun add -d <pkg>` — add packages
- `bun remove <pkg>` — remove packages
- `bun run dev` — start dev server
- `bun run build` — production build
- `bun run typecheck` — type checking (NOT `npx tsc`)
- `bun run lint` — linting
- `bun run test` — testing
- `bunx <tool>` — run CLI tools (instead of `npx`)

## Framework

- Remix 2.15.2 + React 18.3.1 + Vite 5.4
- Tailwind CSS 3.4
- TypeScript 5.8
- Drizzle ORM (PostgreSQL)

## Conventions

- Use `cn()` from `~/lib/utils` for className merging
- Server-only imports: `*.server.ts`
- Environment variables: `app/lib/env.server.ts`
- Database schema: `db/schema/index.ts`
