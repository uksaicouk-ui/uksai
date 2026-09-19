# UKSAI Platform

UKSAI is the public technology and media platform of UK School of Artificial Intelligence Ltd. The current application is a presentation-first public portal for education, responsible technology, publishing/media, investigation and open-source work.

## Canonical architecture

The canonical production direction is **Next.js App Router + React + TypeScript + Vercel**. The public homepage lives in `app/page.tsx`; global styling lives in `app/globals.css`; the root metadata and document shell live in `app/layout.tsx`.

The public portal functionality was migrated from the historical `replit-reconciled` workspace rather than merging that Vite/Replit runtime. Replit configuration, Wouter routing, mockup tooling and unused workspace infrastructure are not part of the production runtime.

## Current scope

The homepage includes responsive navigation, the UKSAI public-platform introduction, interactive principles, a filterable ecosystem directory, and a local-only contact interaction. The contact form does not send or persist data.

Names displayed in the directory are presentation entries and are not, by themselves, claims about subsidiaries, ownership or legal status.

## Development

```bash
npm install
npm run dev
npm run typecheck
npm run build
npm run start
```

No environment variables are currently required by the migrated public homepage. Do not add credentials to client code. Firebase and Firebase Admin remain in the historical manifest but are not initialized by the current application.

## History and migration notes

The repository has a minimal Next.js scaffold on `main` and a larger Vite/React/Replit-origin application on `replit-reconciled`. The latter remains valuable source material, but its runtime was not copied blindly because the canonical deployment target is Vercel with Next.js App Router.

API, authentication, database persistence, Firebase services and external integrations remain deferred until their real contracts and credentials are available.
