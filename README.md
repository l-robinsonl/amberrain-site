# AmberRain marketing site

A static, single-page site that explains AmberRain's core idea: every job gets its own weighted scorecard instead of one generic checklist. It has no build step and no dependencies beyond the Geist font from Google Fonts.

The copy uses recruiters' vocabulary: "scorecard" and "scoring guide" rather than the app's "rubric" and "evidence levels". One FAQ answer tells readers that the app calls the scorecard a scoring rubric.

| File | Purpose |
| --- | --- |
| `index.html` | Page content and structure |
| `styles.css` | Styles, light and dark themes, responsive layout |
| `script.js` | Theme toggle, scroll reveal and the example-rubric explorer |
| `roles.js` | Data for the example-rubric explorer |
| `favicon.svg`, `og-image.png` | Browser icon and social preview image (1200×630) |
| `wrangler.jsonc`, `.assetsignore` | Cloudflare deployment config. `.assetsignore` keeps these files, the README and `.git` from being served |

## Preview locally

```sh
python3 -m http.server 4173
```

Then open http://localhost:4173.

## Deploy to Cloudflare

The site deploys as its own static-assets Worker, separate from the app.

1. In the Cloudflare dashboard, go to **Workers & Pages → Create → Import a repository** and choose this repository.
2. Name the project `amberrain-site`. It must match `name` in `wrangler.jsonc`.
3. Leave the **build command** empty. Set the **deploy command** to `npx wrangler deploy`.

To deploy from a terminal instead, run `npx wrangler login` once, then `npx wrangler deploy`.

## Things to update

- **Contact address and app link.** "Request access" opens `mailto:lee@amberrain.co.uk` and "Sign in" points to `https://amberrain.leerobinson1984.workers.dev/login`. Search `index.html` for both if either changes, for example after adding a custom domain.
- **Social preview.** `og:image` is a relative path, but some platforms need an absolute URL. Change it to `https://<your-domain>/og-image.png` once the site has a domain.

## About the example rubrics

The AI engineer, care assistant and account executive rubrics in `roles.js` were written by AmberRain's rubric generator from example job descriptions. The rental car cleaner rubric is the app's built-in sample role. Criterion titles are shown in sentence case, and the generator's internal input name is replaced with "CV" in each question. The candidate in the "Every score, unpacked" section is illustrative, but its arithmetic follows the app's scoring rules.
