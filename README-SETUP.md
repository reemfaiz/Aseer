# Project Setup & Quick Troubleshooting

This file contains the minimal steps to get the project running locally and what to provide back if anything fails.

Prerequisites
- Node.js (>=18 recommended)
- pnpm (recommended) or npm

Install dependencies
1. Open a terminal (cmd.exe) in the project root: `c:\Users\MFSL0\Downloads\swoosh-home (1)`.
2. Install with pnpm (preferred):
```cmd
pnpm install
```
If pnpm is not installed, use npm:
```cmd
npm install
```

Type-check and run dev server
```cmd
pnpm run typecheck
pnpm run dev
```
Or with npm:
```cmd
npm run typecheck
npm run dev
```

If installation fails
- Copy & paste the full terminal output of `pnpm install` (or `npm install`).
- If you see permission or lock errors, try deleting `node_modules` and lockfiles:
```cmd
rmdir /s /q node_modules
del pnpm-lock.yaml
del package-lock.json
pnpm install
```

If typecheck or dev fails
- Copy & paste the full output of `pnpm run typecheck` and `pnpm run dev`.
- Common fixes I can apply remotely:
  - Fix imports or path aliases in `tsconfig.json`/`vite.config.ts`.
  - Add or update small type declarations if types are missing.

What I already changed
- Added a temporary `client/types/shims.d.ts` to reduce transient editor TypeScript errors while `node_modules` is missing.

What I'll do after you paste outputs
- Analyze errors and modify source files or config to fix remaining TypeScript/build/runtime errors.

— End
