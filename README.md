# univer-doc-start-kit

A starter kit for trying Univer document presets with both ESM and UMD examples.

## Getting Started

```bash
pnpm install
pnpm dev
```

Open the local Vite URL in your browser. The home page lists all available examples.

## Examples

### ESM Examples

- `preset-docs-core/`: basic document editor with core docs, drawing, hyperlink, and thread comment presets.
- `preset-docs-advanced/`: extends the core example with `@univerjs/preset-docs-advanced`.
- `preset-docs-collaboration/`: enables collaboration presets and creates or opens a document unit through the collaboration API.

### UMD Examples

- `umd/preset-docs-core/`: same core document setup using UMD bundles from `node_modules`.
- `umd/preset-docs-advanced/`: advanced document setup using UMD bundles.
- `umd/preset-docs-collaboration/`: collaboration document setup using UMD bundles.

## Scripts

- `pnpm dev`: start the Vite dev server.
- `pnpm build`: run TypeScript checks and build the app.
- `pnpm lint`: check code style.
- `pnpm lint:fix`: auto-fix lint issues where possible.
