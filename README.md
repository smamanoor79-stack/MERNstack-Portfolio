# Smama Noor — Portfolio Website

A modern, animated personal portfolio built with vanilla HTML, CSS, and JavaScript — showcasing my work as a Full Stack MERN Developer.

## Live Demo


## Sections

- **Home (Hero)** — intro, typing animation role text, floating photo frame, decorative constellation graphic, and a scroll-down indicator
- **About** — bio, background, and quick info (name, email, location, availability)
- **Skills** — categorized skill cards: Frontend, Backend, Frameworks & Tools, WordPress, Soft Skills
- **Services** — 5 offered services with descriptions and CTAs
- **Marquee Strip** — animated scrolling tech-stack ticker
- **Featured Projects** — masonry-style showcase of real, live projects with links
- **Mini Projects** — grid of practice projects (Stopwatch, Calculator, Counter, To-Do App, Form Validator, Weather App)
- **Contact** — contact details, socials, and a working contact form
- **Footer** — credits

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties (CSS variables), Flexbox & Grid, keyframe animations, scroll-reveal effects
- **JavaScript (Vanilla)** — typing effect, mobile nav toggle, scroll-reveal on intersection, form handling
- **Google Fonts** — Raleway, Poppins, JetBrains Mono
- **Netlify Forms** — contact form submission handling

## Features

- Fully responsive design (desktop, tablet, mobile)
- Smooth scroll navigation with active-link highlighting
- Scroll-triggered reveal animations
- Animated typing effect for role titles
- Mobile hamburger menu
- Decorative SVG constellation graphic in the hero section
- Infinite scrolling marquee for tech stack highlights
- Project cards with graceful image fallbacks (emoji placeholder if image fails to load)

## Project Structure

```
Portfolio-main/
  index.html
  style.css
  script.js
  profile.jpeg
  Smama_Noor_CV.pdf
  project1.jpeg
  project2.jpeg
  project3.jpeg
  project4.png
  project5.jpeg
  landing2.png
```

## Getting Started

This is a static site — no build step required.

1. Clone or download the project
2. Open `index.html` directly in your browser, **or** run a local server for best results (recommended, especially for the contact form and smooth asset loading):

```bash
npx serve .
```

3. Visit `http://localhost:3000` (or whichever port your server uses)

## Customization

- **Colors & theme**: edit the CSS custom properties in `:root` at the top of `style.css`
- **Content**: update text directly in `index.html`
- **Projects**: add/remove `.showcase-item` blocks inside `#projectsGrid`
- **Mini projects**: populated dynamically via `script.js`

## Contact

- **Email**: smamanoor79@gmail.com
- **GitHub**: https://github.com/smamanoor79-stack

## License

This project is private and not licensed for public reuse.
