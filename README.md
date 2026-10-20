# Ayomiposi Aborisade — Portfolio

Personal site for Ayomiposi Aborisade, software engineer. A single page with selected work, experience, about and contact sections.

**Stack:** React 18 · Vite 6 · Tailwind CSS v4, self-hosted fonts, no animation library. Deployed on Netlify.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs to ./build
npm run preview   # serve the production build
```

## Editing content

All copy lives in [`src/data/content.js`](src/data/content.js):

| Export       | What it controls                                          |
| ------------ | --------------------------------------------------------- |
| `profile`    | Name, role, email, résumé path, photo, availability badge |
| `featured`   | The numbered "Selected work" case studies                 |
| `archive`    | The compact "Earlier projects" list                       |
| `experience` | The experience timeline                                   |
| `toolbox`    | The grouped skills under About                            |
| `socials`    | Links in the contact footer                               |

- **Change the photo:** replace `src/assets/portrait.webp` (about 800×1000). A JPG works too if you update the import in `content.js`.
- **Add a project:** drop a 1400×700 WebP screenshot in `src/assets/projects/`, import it at the top of `content.js`, and add an entry.
- **Use a video instead:** add a muted WebM loop as `video` and keep `image` as its poster. Videos only download when scrolled near, and visitors with reduced motion see the poster.
- **Résumé:** `profile.resume` points to a file in `public/`.

## Structure

```
src/
  components/   Nav, Hero, Work, Archive, Experience, About, Contact, ui (shared bits)
  data/         content.js — all site copy
  assets/       portrait + project screenshots
  index.css     Tailwind v4 theme tokens (colours, fonts) and small utilities
```

Design tokens (paper, ink, accent, fonts) are defined in the `@theme` block in `src/index.css`.

## Performance

- First load is about 330 KB and fetches no video. Project videos (about 1.7 MB in total) load only when scrolled near.
- Images are right-sized WebP. Archive thumbnails are 240×150.
- Fonts are self-hosted Latin subsets, so there are no third-party requests before first paint.
- Animations use CSS and one shared IntersectionObserver.
