# docs-euthyne

Documentation for [Euthyne](https://euthyne.com), built with [Fumadocs](https://fumadocs.dev) on Next.js as a static export.

The CLI is new and the API is not released yet. Pages mark what is still planned.

```bash
npm install
npm run dev
npm run build
```

`npm run build` writes the static site to `out/`. `npm start` serves it.

Pages live in `content/docs` as MDX. Each folder's `meta.json` sets the sidebar order.
