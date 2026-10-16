# Adara Creative Edge

## Project overview

This is a responsive static website for Adara Creative Edge, a digital and creative consultancy that designs and builds websites, digital tools, and creative solutions for organisations in agriculture, education, and enterprise.

The site was built step by step by me, with AI tools used to speed up specific parts of the process — code writing, debugging, image generation, and SEO tags. Every structural and design decision was made by me.

---

## Pages

- `index.html` — landing page with hero, sector cards, trust section, and contact form
- `about.html` — background on Adara Creative Edge and what drives the studio
- `services.html` — full services list, technology carousel, and consultation form

---

## How I built this with AI

I planned and built the site structure myself, section by section. I used AI tools to help write code faster, generate images, and handle technical tasks like SEO markup — rather than writing every line by hand or looking everything up from scratch.

### My prompting approach

- **Iterative and specific** — I gave focused instructions and reviewed every output before accepting it. For example: *"the Azure icon is showing the WooCommerce image, please fix the icon mismatches in the tools section."*
- **Copy decisions were mine** — When the hero description read like a vague tagline, I identified the problem and directed the fix: *"make it clear that we build websites for agriculture, education and enterprise."*
- **Design choices were mine** — I chose the black card style for services, asked for Bootstrap on the form, picked the minimal form note copy, and directed the about page image treatment.
- **Fixing mistakes** — When Bootstrap's global styles broke the site's link and arrow colours, I spotted it, flagged it, and prompted the fix.

---

## AI use — assessment reflection

### Which AI tools I used

I used four AI tools across this project, each for a distinct purpose:

- **Kiro** — AI-powered development environment built on VS Code. Used for code generation, debugging, responsive CSS, Bootstrap integration, and SEO tags.
- **GitHub Copilot** — Used for in-editor code assistance. Helped scaffold the navbar and other UI elements with inline suggestions that I reviewed and adjusted.
- **ChatGPT** — Used for image generation. I wrote and refined the prompts to get the right style, subject, and mood for each image.
- **Google Gemini** — Also used for image generation, with prompts I directed.

The reason I used AI throughout was to work faster — building components without writing every line from scratch, while staying in full control of every decision.

---

### What I used AI for

| Area | Detail |
|---|---|
| **Code generation** | Writing and refactoring HTML, CSS, and JavaScript on request |
| **Navbar** | GitHub Copilot suggested completions while I built the navigation, which I reviewed and adjusted |
| **Copy suggestions** | Drafting and refining section headings, card descriptions, and the hero description |
| **Debugging** | Diagnosing why Bootstrap's styles were overriding the site's link colours and fixing the stylesheet load order |
| **Icon sourcing** | Finding and downloading accurate SVG brand icons for AWS, Docker, and Shopify |
| **SEO tags** | Writing meta description, Open Graph tags, Twitter card tags, canonical link, and JSON-LD structured data on `about.html` |
| **Bootstrap integration** | Rebuilding the consultation form with Bootstrap 5 grid and form components |
| **Responsive design** | Writing and adjusting CSS breakpoints for mobile and small screens |
| **Image generation** | ChatGPT and Gemini generated site images from prompts I wrote |

The page structure, layout, and site architecture were planned and built by me step by step — I did not ask AI to design or structure the site.

---

### Which parts I personally edited, checked, and understood

- All content and copy — I reviewed every suggested line and changed what didn't fit
- The three-page structure and all section decisions were mine
- I spotted the icon mismatches and directed the fix
- I identified the Bootstrap colour bleed issue by checking the rendered page
- I chose the service card style, form approach, sector focus, and brand positioning
- I reviewed every HTML and CSS change before it was applied

---

### Code or copy I do not fully understand

None. I reviewed all code as it was written and understand the full codebase — HTML structure, CSS layout and responsive logic (including `clamp()`, `min()`, custom properties, and grid), the JavaScript for the nav and carousel, Bootstrap's grid and validation pattern, and the JSON-LD structured data on the about page.

---

## Technologies

- HTML5
- CSS3 (custom, with Bootstrap 5.3 for the consultation form)
- Vanilla JavaScript
- Static files — no build step or package installation required

To view the site locally, open `index.html` in any web browser.

---

## Deployment

Live site: [https://adaracreative.netlify.app/](https://adaracreative.netlify.app/)
