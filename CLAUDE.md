# Heronstone — Project Notes

## Overview
Static website for Heronstone, a high-end pond and water features design/build company in Melbourne, Australia. No build step — plain HTML, CSS, and vanilla JS. Designed for GitHub Pages hosting.

## File Structure
```
/
├── index.html          # Home page
├── about.html          # About page
├── services.html       # Services page
├── gallery.html        # Gallery with lightbox
├── contact.html        # Contact form
├── css/styles.css      # All styles (single file, organized by section)
├── js/main.js          # All JS (nav toggle, lightbox, form validation, scroll animations)
├── images/             # Directory for project photos (currently empty/placeholder)
└── CLAUDE.md
```

## Tech Stack
- Plain HTML5, CSS3, vanilla JavaScript
- Google Fonts: Playfair Display (headings) + Inter (body)
- No frameworks, no build tools, no dependencies

## Brand Colors
- Greens: `#2D5016` (dark), `#3A7D44` (primary), `#5A9E64` (light)
- Blues: `#4A90A4` (primary), `#6BB5C9` (light), `#E8F4F8` (pale)
- Neutrals: `#FAF8F5` (cream/bg), `#F0EDE8` (stone), `#8C8578` (warm grey)
- Text: `#2C2C2C`

## CSS Architecture
Single file organized into numbered sections: reset, custom properties, typography, layout utilities, header/nav, hero, buttons, content sections, gallery/lightbox, forms, footer, responsive breakpoints. Mobile-first with breakpoints at 768px and 1024px.

## JS Features
- Mobile hamburger nav (open/close with overlay)
- Header scroll shadow
- Smooth scroll for anchor links
- Intersection Observer fade-in animations
- Gallery lightbox with prev/next/keyboard navigation
- Gallery category filtering
- Contact form validation (name, email, message required)

## Conventions
- All images are placeholders (colored boxes with text labels) — ready for real photos
- Shared header/footer markup is duplicated across pages (no templating)
- Active nav link gets `.active` class per page
- CSS custom properties for all design tokens
- Form is front-end only — hook up Formspree or similar for submissions

## Responsive Breakpoints
- Mobile: < 768px (single column, hamburger nav)
- Tablet: 768px–1024px (2-column grids)
- Desktop: > 1024px (full layout, 3-column grids)
