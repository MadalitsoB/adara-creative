# Adara Creative Edge

## Project overview

This is a responsive static website for Adara Creative Edge, a digital and creative consultancy that designs and builds websites, digital tools, and creative solutions for organisations in agriculture, education, and enterprise.

The site was built collaboratively with an AI coding assistant (Kiro), using a prompting-led workflow where I directed every decision — from layout and copy to colour, icons, and responsive behaviour.

---

## Pages

- `index.html` — landing page with hero, sector cards, trust section, and contact form
- `about.html` — background on Adara Creative Edge and what drives the studio
- `services.html` — full services list, technology carousel, and consultation form

---

## How I built this with AI

Rather than writing code from scratch, I used Kiro (an AI-powered development environment) as a collaborative coding partner. I directed the build through natural language prompts, made every design and content decision myself, and reviewed all changes before they were applied.

### My prompting approach

I broke the project into clear, focused requests rather than asking for everything at once. Some examples of how I prompted:

- **Structure first** — I asked for the page layout and sections before worrying about styling, so I could see the skeleton and give feedback early.
- **Iterative refinement** — After each change I reviewed the result and followed up with specific corrections. For example: *"the Azure icon is showing the WooCommerce image, please fix the icon mismatches in the tools section."*
- **Tone and clarity** — I pushed back on vague copy. When the hero description read like a generic tagline, I prompted: *"make it clear that we build websites for agriculture, education and enterprise"* — and reviewed the suggested text before it was applied.
- **Design decisions were mine** — I chose the black card style for services, asked for Bootstrap on the form, selected the minimal copy for the form note, and directed the about page image treatment. AI executed; I decided.
- **Fixing mistakes** — When Bootstrap's global styles broke the site's link colours, I flagged it and prompted a fix. The AI diagnosed the load order issue and resolved it.

### What AI handled

- Writing and refactoring HTML, CSS, and JavaScript
- Sourcing and downloading real brand SVG icons (Docker, Shopify, AWS) from simple-icons
- Diagnosing responsive layout issues and writing breakpoint rules
- Bootstrap integration and scoping overrides so they didn't affect the rest of the site
- SEO metadata, Open Graph tags, JSON-LD structured data, and canonical links

### What I handled

- All content, copy, and messaging decisions
- Visual direction — colours, card styles, layout choices
- Sector focus and brand positioning
- Reviewing every change and deciding what stayed or got revised
- The overall structure and goals of the project

---

## AI use — assessment reflection

### Which AI tool I used

I used four AI tools across this project, each for a distinct purpose:

- **Kiro** — AI-powered development environment built on VS Code. Used throughout the build for code generation, debugging, responsive design, Bootstrap integration, and SEO tags.
- **GitHub Copilot** — Used for in-editor code assistance while writing HTML and CSS. Helped scaffold the navbar and other UI elements by suggesting completions as I typed, which I reviewed and accepted or adjusted.
- **ChatGPT** — Used for image generation. I directed the prompts, describing the style, subject, and mood I wanted for each image used on the site.
- **Google Gemini** — Also used for image generation, again with prompts I wrote and refined to get the right visual output.

The core reason I used AI across this project was to work faster and more efficiently — building components, structures, and layouts without writing every line from scratch, while staying in control of every decision. All tools were directed by me; I reviewed every output and decided what made it into the final site.

---

### What I used AI for

| Area | Detail |
|---|---|
| **Code generation** | Writing HTML structure, CSS layout and responsive breakpoints, and JavaScript for the mobile nav and technology carousel |
| **Copy suggestions** | Drafting and refining section headings, card descriptions, and the hero description |
| **Debugging** | Diagnosing why Bootstrap's global styles were overriding the site's link and arrow colours, and fixing the load order |
| **Icon sourcing** | Finding and downloading accurate SVG brand icons for AWS, Docker, and Shopify from the simple-icons library |
| **SEO tags** | Writing the meta description, Open Graph tags, Twitter card tags, canonical link, and JSON-LD structured data on `about.html` |
| **Layout ideas** | Suggesting the two-column hero layout, the sector card grid, and the technology carousel structure |
| **Bootstrap integration** | Rebuilding the consultation form using Bootstrap 5 grid and form components, and scoping the overrides so they didn't affect the rest of the site |
| **Responsive design** | Writing and adjusting CSS breakpoints for mobile and small screens across all three pages |

---

### Which parts I personally edited, checked, and understood

- All content and copy decisions — I reviewed every suggested line and changed what didn't fit the brand or tone
- The hero description was rewritten on my direction after I identified it was too vague
- I spotted the icon mismatches in the tools section (Azure showing the WooCommerce logo, etc.) and directed the fix
- I chose the black card style for the services section, the Bootstrap form approach, and the minimal copy for the form note
- I reviewed every CSS and HTML change before it was applied and can explain any part of the codebase
- I identified the Bootstrap colour bleed issue after checking the rendered page and prompted the debugging process
- The three-page structure, sector focus, and overall brand positioning were my decisions throughout

---

### Code or copy I do not fully understand

None. I reviewed all code as it was written and asked follow-up questions where needed. I understand the HTML structure, the CSS layout and responsive logic (including `clamp()`, `min()`, CSS custom properties, and grid), the JavaScript for the nav toggle and carousel, the Bootstrap grid and validation pattern, and the JSON-LD structured data on the about page.

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
