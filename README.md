# compliance-pages

GitHub Pages copy of `compliance-test`: a static Next.js 16 test fixture for Vice Compliance scans.
It reproduces the **text** of https://kayablissnyc.com/location/brooklyn-ny/ (captured 2026-10-15)
inside an independent UI. The page content is identical to `compliance-test`.

- All copy lives in `src/content/brooklyn.ts`, kept verbatim so scanners see the original wording
  (health claims, reviews, disclaimer, license numbers, age gate).
- `output: "export"`: `npm run build` writes plain HTML to `out/`.
- Marked as a test fixture in the header and footer, with `noindex` set. The notify form never submits anything.

```bash
npm run dev                                   # http://localhost:3000
npm run build                                 # static export to out/
PAGES_BASE_PATH=/compliance-pages npm run build   # same build GitHub Actions runs for a repo named compliance-pages
```

## Deploy to GitHub Pages

1. Create an empty GitHub repo (any name) and push this folder to its `main` branch.
2. In the repo, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Each push to `main` runs `.github/workflows/deploy.yml`, which builds and publishes the site to
   `https://<user>.github.io/<repo>/`. You can also start it by hand from the **Actions** tab.

The workflow reads the repo's Pages path from `actions/configure-pages` and passes it to the build as
`PAGES_BASE_PATH`, so renaming the repo or adding a custom domain needs no code change.

GitHub Pages only reads `robots.txt` at the domain root, so on a project site (`/<repo>/`) the
`noindex` meta tag in each page is what keeps it out of search results.
