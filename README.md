# Samuel Onuche-Ojo Egwu — Academic Portfolio

Personal academic portfolio website showcasing my research in Medical Imaging, Computer Vision, Machine Learning, and One Health AI.

## Live Site

**[egwusamuel.github.io/portfolio](https://egwusamuel.github.io/portfolio)**

## Pages

| Page | Description |
|---|---|
| **Portfolio** (`index.html`) | Full academic CV — education, research experience, publications, awards, skills |
| **Blog** (`blog.html`) | Research updates, achievements, and reflections |
| **Admin** (`admin.html`) | PIN-protected dashboard to create/edit/publish blog posts |

## Features

- **Academic Design**: Dark indigo and gold theme with Playfair Display serif headings — scholarly and inspiring
- **CV Portfolio**: Timeline-based education and research experience, publication cards, awards list, skills grid
- **Blog**: Posts sourced from `posts.js` (seed content) and localStorage (admin-added posts), merged at runtime
- **Admin Dashboard**: PIN-gated (default: `2026`), create/edit/delete/publish posts, export backup as JSON, change PIN
- **No Backend Required**: Everything runs client-side — works perfectly on GitHub Pages
- **Responsive**: Fully responsive across desktop, tablet, and mobile
- **Print-Friendly**: Publications and CV sections print cleanly

## Admin Access

1. Visit `admin.html` on your site
2. Enter the default PIN: **`2026`**
3. Use "Change PIN" in the admin nav to set your own PIN
4. Create posts — set status to "Published" for them to appear on the blog

## Tech Stack

- HTML5 / CSS3
- Vanilla JavaScript
- Google Fonts (Inter + Playfair Display)
- localStorage for persistence
- Zero dependencies, zero build step

## Local Development

```bash
git clone https://github.com/EgwuSamuel/portfolio.git
cd portfolio
open index.html
```

Or serve with any static file server:

```bash
npx serve .
```

## File Structure

```
portfolio/
├── index.html          # Academic portfolio homepage
├── blog.html           # Blog listing with modal detail
├── admin.html          # Admin dashboard (PIN-protected)
├── style.css           # Unified design system
├── posts.js            # Seed blog post data
├── Sam_Egwu-Profile.png # Profile photo
└── README.md
```

## Deployment

Push to `main` branch — GitHub Pages serves from the root automatically.