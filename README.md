# UKSAI Platform

The UKSAI Platform is the public mother portal for the UK School of Artificial Intelligence Ltd. It gives visitors a clear starting point for the organisation's education, public-interest media, investigation, and open-source initiatives.

## Current scope

The current release is a presentation-first public portal with:

- Responsive navigation and a structured homepage
- An interactive point-of-view section
- A filterable ecosystem directory
- A shared-direction section
- A local-only contact interaction that does not claim to send data

The API server, database package, authentication, admissions persistence, AI functionality, and director access are reserved for later implementation once their real contracts and credentials are defined.

## Workspace commands

```bash
pnpm install
pnpm run typecheck
pnpm run build
pnpm --filter @workspace/uksai-platform run typecheck
```

For the preview, use the managed `artifacts/uksai-platform: web` workflow. It supplies the `PORT` and `BASE_PATH` values required by the Vite configuration.

## Repository map

- `artifacts/uksai-platform` — public web application
- `artifacts/api-server` — shared Express API service
- `lib/api-spec` — OpenAPI contract and code generation
- `lib/db` — Drizzle database package
- `scripts` — workspace utility package