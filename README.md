# Heronstone

Bespoke water features for Melbourne's finest properties.

## View the Site

**Live:** [https://folioready-zorg.github.io/heronstone/](https://folioready-zorg.github.io/heronstone/)

### Enable GitHub Pages

1. Go to your repo: **Settings > Pages**
2. Under **Source**, select **Deploy from a branch**
3. Set branch to **main** and folder to **/ (root)**
4. Click **Save**
5. The site will be live within a minute at the URL above

### View Locally

No build step required — just open any `.html` file directly in your browser:

```
open index.html
```

Or use a local server for a more accurate experience:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, intro, features, featured project, CTA |
| About | `about.html` | Company story, philosophy, team, credentials |
| Services | `services.html` | 5 service offerings with descriptions |
| Gallery | `gallery.html` | Project grid with filters and lightbox |
| Contact | `contact.html` | Contact form, business info, map placeholder |

## Tech

- Plain HTML, CSS, vanilla JS — no build tools or dependencies
- Google Fonts (Playfair Display + Inter)
- Mobile-responsive (breakpoints at 768px and 1024px)
- Gallery lightbox with keyboard navigation
- Contact form validation (front-end only — connect Formspree or similar for submissions)
