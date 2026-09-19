# UKSAI Platform

The public mother portal for the UK School of Artificial Intelligence Ltd, connecting its education, media, investigation, and open-source initiatives.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/uksai-platform` — the public React + Vite web app
- `artifacts/api-server` — shared Express API service, currently health-only
- `lib/api-spec/openapi.yaml` — source of truth for API contracts
- `lib/db/src/schema` — Drizzle schema exports
- `artifacts/uksai-platform/src/index.css` — web theme tokens and visual system

## Architecture decisions

- The public portal is a React + Vite artifact inside the pnpm monorepo; it is not a nested Next.js app.
- The first release is presentation-first and keeps contact feedback local until a real submission API is defined.
- Ecosystem names are presented as directory entries without inventing metrics, partnerships, or claims.
- API and database packages remain available for later authenticated or data-backed capabilities.

## Product

The current portal provides a public introduction to UKSAI, an interactive point-of-view section, a filterable ecosystem directory, a shared-direction section, responsive navigation, and a local-only contact interaction. Authentication, admissions persistence, AI features, and director access are not yet implemented.

## User preferences

- Preserve recovered work when available; do not replace a complete implementation with a scaffold.
- Do not call the project production-ready until the major user flows have been tested.

## Gotchas

- Web artifacts require workflow-provided `PORT` and `BASE_PATH`; use the managed artifact workflow rather than a root dev command.
- Run `pnpm run typecheck` before declaring workspace changes complete.
- After changing `lib/api-spec/openapi.yaml`, run API codegen before importing updated hooks.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
