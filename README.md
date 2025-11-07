# Nathan Storey — Resume (JSON Resume)

This repo stores my resume in the **[JSON Resume](https://jsonresume.org/) schema** as a single source of truth.
It builds **HTML** and **PDF** outputs automatically and publishes HTML via **GitHub Pages** from the `docs/` folder.

## Quick Start

```bash
# Clone & install
git clone git@github.com:npstorey/resume.git
cd resume
npm install

# Validate & preview locally (auto-refresh)
npm run dev

# Build HTML + PDF into docs/
npm run build
```

Outputs:
- HTML: `docs/index.html`
- PDF: `docs/Nathan_Storey_Resume.pdf`

## Theme

Using the **paper** JSON Resume theme. Swap by installing another theme and editing the scripts:
```bash
npm i jsonresume-theme-elegant --save
# then change --theme paper -> --theme elegant in package.json scripts
```

## Variants (e.g., one‑pager)

Create a variant JSON (e.g., `src/resume.onepage.json`) with shortened work history and projects.

Build it by temporarily pointing the scripts to that file or run directly:
```bash
npx resume export docs/Nathan_Storey_Resume_OnePage.pdf --theme paper --resume src/resume.onepage.json
```

## Privacy tip

If you want a public web version without your phone number, create `src/resume.public.json` (without `basics.phone`)
and export that to `docs/index.html`. Keep the full version for PDFs you send privately.

## GitHub Pages

1. In repo Settings → Pages → **Build and deployment**: Source = **Deploy from a branch**, Branch = **main** / **docs** folder.
2. The workflow below builds on every push and commits updated `docs/` assets back into `main`.

---

**Commands**

- `npm run dev` – preview in a local server
- `npm run build:html` – export HTML to `docs/index.html`
- `npm run build:pdf` – export PDF to `docs/Nathan_Storey_Resume.pdf`
- `npm run build` – HTML + PDF
