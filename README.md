# John Ho's Resume

A responsive resume built with React, Material UI, and Vite. Includes light/dark themes, standard and ATS-friendly layouts, and dedicated print styles.

## Development

Requires Node.js and Bun.

Install dependencies and start the development server:

```sh
bun ci
bun run start
```

Lint, build, or preview the production build:

```sh
bun run lint
bun run build
bun run preview
```

Resume content lives in `src/App.jsx`, themes in `src/index.jsx`, and styles in `src/index.css`.

## Printing and deployment

Print either layout or save it as a PDF. Use Letter or A4 at 100% scale, with browser headers and footers disabled.

Production builds output to `build/` and use `/resume/` as the base path for GitHub Pages. When previewing locally, open `/resume/`.