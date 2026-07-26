# Aziz Mzoughi — Portfolio (Angular)

Standalone Angular 18 rebuild of the portfolio/CV site. No routing needed (single page), organized as
standalone components with signal-based state.

## Structure

```
src/app/
  components/
    navbar/             sticky nav + dark mode toggle
    hero/                "about" section
    projects/            project grid (data-driven)
    experience/          experience timeline (data-driven)
    contact/             reactive form + confirmation modal
    footer/               footer
    floating-actions/    WhatsApp + back-to-top floating buttons
  data/
    projects.data.ts     edit this to add/remove/update project cards
    experience.data.ts   edit this to update the experience timeline
  models/                 TypeScript interfaces for the data above
  directives/
    reveal-on-scroll.directive.ts   scroll-reveal animation (IntersectionObserver)
  services/
    theme.service.ts     dark mode (localStorage + OS preference)

src/styles/               global vendor + theme CSS (bootstrap, icons, tooplate-style, custom-theme)
public/                   images, fonts, resume PDF — copied as-is into the build output
```

## Running locally

```bash
npm install
npm start          # ng serve, http://localhost:4200
```

## Building for production

```bash
npm run build       # outputs to dist/azizmzoughi-angular/browser
```

Font inlining is disabled in `angular.json` (`optimization.fonts: false`) so the build doesn't depend on
network access to Google Fonts at build time — fonts are still loaded normally in the browser via the
`<link>` tags in `src/index.html`.

## Editing content

- **Projects** — edit `src/app/data/projects.data.ts`. Each entry needs a `tagline`, `title`, `description`,
  `image` path, `tags` array, and optionally `link` + `linkLabel` (omit `link` for client work with no public
  URL — the card will show "Client project — no public link" instead).
- **Experience** — edit `src/app/data/experience.data.ts`.
- **Resume PDF** — replace `public/resume/aziz-mzoughi.pdf` (keep the same filename, or update the reference
  in `hero.component.html`).
- **Contact form endpoint** — set in `contact.component.ts` (`FORM_ENDPOINT`, currently formsubmit.co).

## Notes / recommendations

- The hero illustration (`public/images/undraw/male-developer.svg`) is a custom hand-built SVG, not a stock
  asset — free to restyle or replace.
- Consider adding a dedicated 1200×630 Open Graph image instead of reusing a project screenshot.
- `public/images/undraw/dev-banner.gif` and `undraw_software_engineer_lvl5.svg` are no longer referenced and
  can be deleted.
