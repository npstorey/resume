# Contributing / Development Guide

This resume is built using the [JSON Resume](https://jsonresume.org/) schema with a custom Handlebars theme.

## Quick Start

```bash
# Clone & install
git clone git@github.com:npstorey/resume.git
cd resume
npm install

# Preview locally (auto-refresh)
npm run dev

# Build HTML + PDF into docs/
npm run build
```

## Output Files

- **HTML**: `docs/index.html` (deployed to GitHub Pages)
- **PDF**: `docs/Nathan_Storey_Resume.pdf`

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Preview in a local server with auto-refresh |
| `npm run build:html` | Export HTML to `docs/index.html` |
| `npm run build:pdf` | Export PDF to `docs/Nathan_Storey_Resume.pdf` |
| `npm run build` | Build both HTML + PDF |
| `npm run build:private` | Build PDF with contact info (email/phone) |

## Private Build (with contact info)

To generate a version with your email and phone number:

1. Create `src/contact.private.json`:
   ```json
   {
     "email": "your.email@example.com",
     "phone": "(555) 555-5555"
   }
   ```

2. Run `npm run build:private`

3. Output: `docs/Nathan_Storey_Resume_Private.pdf`

The private files are gitignored and won't be committed.

## Theme

Using a custom theme in `themes/jsonresume-theme-custom/`. The theme includes:

- `index.js` - Theme entry point
- `resume.hbs` - Handlebars template
- `style.css` - Styling (with print-optimized CSS)

## Editing the Resume

1. Edit `src/resume.json` with your changes
2. Run `npm run dev` to preview
3. Run `npm run build` to generate outputs
4. Commit and push - GitHub Actions will create a new release with the PDF

## GitHub Pages

The HTML version is deployed automatically from the `docs/` folder on the `main` branch.

Live at: https://npstorey.github.io/resume/

## Releases

GitHub Actions automatically creates a release with the PDF attached whenever changes are pushed to `main`. Download the latest PDF from:

https://github.com/npstorey/resume/releases/latest
