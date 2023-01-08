# Astro & Tailwind CSS Heros
Welcome to Superheroes, a collection of 20 well design hero sections.

The heros are styled using Tailwind CSS and the navigation is using Alpine.js

## Project Integrations
- @astrojs/tailwind - https://docs.astro.build/en/guides/integrations-guide/tailwind/
- @astrojs/image - https://docs.astro.build/en/guides/integrations-guide/image/
- @astrojs/sitemap - https://docs.astro.build/en/guides/integrations-guide/sitemap/
- Astrolib SEO - https://github.com/onwidget/astrolib/tree/main/packages/seo
- Astro compress - https://github.com/NikolaRHristov/astro-compress#readme
## File Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── file.png x (20)
├── src/
│   └── components/
│       └── Heros/
│           └── file.astro x (20)
│   └── pages/
│       └── index.astro
│       └── files.astro x (20)
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## Want to learn more?

Feel free to check Astroäs [documentation](https://docs.astro.build)
