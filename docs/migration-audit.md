# UKSAI migration audit

## Confirmed

- `main` is the canonical branch and contains the Next.js application foundation.
- `replit-reconciled` contains the previous UKSAI public portal implementation under `artifacts/uksai-platform`.
- The historical public portal used Vite, Wouter and Replit-specific `PORT`/`BASE_PATH` configuration.
- The historical contact interaction was explicitly local-only.
- The historical API and database packages contain scaffolding and a health contract, not a complete business backend.

## Migrated

The public portal identity, hero, approach/principles interaction, ecosystem directory filtering, responsive navigation and local-only contact state were migrated into `app/page.tsx` and `app/globals.css`.

## Replaced or excluded

The production runtime does not use Vite, Wouter, Replit configuration, the mockup sandbox, or the historical Express server. These were excluded because they are incompatible with the canonical Next.js/Vercel runtime or are not required by the current homepage.

## Unknown / deferred

The repository does not establish production requirements for authentication, Firebase initialization, database persistence, contact delivery, CMS content, subsidiary ownership, or external integrations. None are invented here.

## Verification limitation

Repository file operations were available in this environment, but a local shell/package-install/build runner was not exposed. The source and configuration were prepared for the required commands, but `npm install`, `npm run typecheck`, `npm run build`, `npm run start`, and a Vercel deployment could not be executed from this tool session.
