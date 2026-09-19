# UKSAI architecture

## Runtime

Vercel runs the Next.js App Router application from the repository root. `app/layout.tsx` provides the HTML shell and metadata. `app/page.tsx` is a client component because the homepage has local UI state for menu visibility, principle selection, directory filtering and the presentation-only contact interaction.

## Boundaries

The current public homepage has no database, authentication, API route, Firebase initialization or external integration. This keeps the current deployment honest: the contact form explicitly does not submit data, and directory entries are presentation content rather than a legal ownership registry.

## Future extension points

Future services may be added through route groups, server-only modules and Route Handlers when their actual contracts are available. Secrets must remain server-side and environment values must never be fabricated or exposed through client variables.

## Historical sources

The public product direction was recovered from `replit-reconciled/artifacts/uksai-platform`. Its Vite entrypoint, Wouter router, Replit artifact files, mockup sandbox and generic unused UI library were not retained in the production runtime.
