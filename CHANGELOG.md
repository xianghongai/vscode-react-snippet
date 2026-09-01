# Changelog

All notable changes to the **React Snippets** extension are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [19.2.5] - 2026-09-01

The `react-i18next` snippets move to [React Ecosystem Snippets](https://github.com/xianghongai/vscode-react-ecosystem-snippets), which covers i18next initialization, plurals, `Trans`, language switching and the TypeScript resource augmentations as well. Keeping one set in each extension would have offered the same keys twice.

### Removed

- `react-i18next` snippets: `import-useTranslation`, `useTranslation` / `ut`, `t`, `tn`, `Translation`.

## [19.2.4] - 2026-08-26

- Fixed the Marketplace badges

## [19.2.3] - 2026-08-25

Development and packaging only; the published snippets are unchanged.

- `main.js` rewritten: duplicate snippet names now fail the build instead of being silently overwritten
- `.vscodeignore` switched to an allow-list
- Added a `vscode:prepublish` hook so `snippets/` is always regenerated before packaging
- Dropped the redundant `prepublish` script and the CI `Build` step
- `engines.vscode` corrected from `^0.12.x` to `^1.0.0`

## [19.2.2] - 2026-08-24

Targets React 19.2. This release fills in the React 19 APIs that were still missing from the snippet set.

### Added

- **Resource Preloading APIs** (`react-dom`) — the React 19 capability that had no coverage at all: `preload`, `preinit`, `preinit-style` (the stylesheet form, which requires `precedence`), `preloadModule`, `preinitModule`, `preconnect`, `prefetchDNS`. The `as` and `precedence` options expand as pick-lists.
- **`fc-ref`** / `fcr` — functional component receiving `ref` as a regular prop. Since React 19 this replaces `forwardRef`, which is now deprecated. TypeScript and JavaScript variants included.
- **`ref-cleanup`** / `refc` — cleanup function returned from a `ref` callback (new in React 19). Listed ahead of the legacy `forwardRef` snippet.
- **`useId`** / `uid` — for accessibility attributes that must stay stable across server and client rendering.
- **`StrictMode`** / `sm`.
- **`hydrateRoot`** / `hr` — the SSR counterpart to the existing `createRoot`.
- **`flushSync`** / `fs`.

### Changed

- Documented the new snippets in both `README.md` and `README-CN.md`.

### Internal

Development-only; no effect on the published snippets.

- Node.js 24 (Active LTS) and pnpm 11, both pinned through [mise](https://mise.jdx.dev/) via a new `mise.toml`; pnpm's version is sourced solely from the `packageManager` field in `package.json`.
- CI reworked: `actions/checkout@v7`, `jdx/mise-action@v4` in place of `pnpm/action-setup`, `pnpm install --frozen-lockfile`, and a least-privilege `permissions: contents: read`.
- Added `pnpm-workspace.yaml` declaring `allowBuilds`, required because pnpm 11 now fails an install that encounters unapproved dependency build scripts.
- Dev dependencies updated: `@types/node` 24, `@vscode/vsce` 3.9.2, `glob` 13.0.6 (via 11.1.0, [dependabot](https://github.com/xianghongai/vscode-react-snippet/commit/9f969a7)), `nodemon` 3.1.14, `prettier` 3.9.6.

## [19.2.1] - 2025-10-27

### Added

- Restored the short aliases for high-frequency snippets that were dropped in 19.1.0 — `us`, `ue`, `uec`, `uee`, `uie`, `ule`, `um`, `uc`, `udv`, `ur`, `uih`, `fr`, `cp`, `cr`, `ut` ([#2](https://github.com/xianghongai/vscode-react-snippet/issues/2)).
- `react-i18next` snippets: `useTranslation` / `ut`, `t`, `tn`, `Translation`.

## [19.2.0] - 2025-10-04

### Added

- `createContext`, `<Activity>`, `<Suspense>`, `useInsertionEffect`, `useLayoutEffect`, `useEffectEvent`.

## [19.1.0] - 2025-09-30

### Changed

- Rewritten for React 19.1. Hooks split into one file per category for maintainability, and the component templates consolidated from `rfc` / `rfce` / `rfced` / `rfcpt` down to `fc` (export default) and `rfc` (bare function).

### Added

- `createPortal`, `createRoot`, `useFormStatus`, `memo`, `lazy`.

### Removed

- React 18-era import templates and the per-hook JSON files they came with.

## [18.0.1] - 2022-12-31

### Fixed

- `.tsx` file support.

## [18.0.0] - 2022-04-30

### Added

- React 18 hooks.

### Changed

- Major version now corresponds to the React release the snippets target.

Releases before v18.0.0 predate this changelog.
