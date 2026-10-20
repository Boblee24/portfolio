# Ayomiposi Aborisade — Portfolio

Personal site for Ayomiposi Aborisade, software engineer. A single page with selected work, experience, about and contact sections.

**Stack:** React 18 · Vite 6 · Tailwind CSS v4 · Framer Motion. Deployed on Netlify.

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

- **Change the photo:** replace `src/assets/portrait.jpg`. Any size or ratio works, because it is cropped to 4:5.
- **Add a project:** drop a screenshot in `src/assets/projects/`, import it at the top of `content.js`, and add an entry. Set `crop: true` if the screenshot includes the browser tab bar.
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
