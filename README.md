# Anurag Kumar - Portfolio

A cinematic personal portfolio showcasing my work across product
engineering, developer tools, and creative technology. The experience
combines an editorial visual style with interactive motion and a
lightweight 3D hero.

**Live website:**
[anurag-kumar.vercel.app](https://anurag-kumar.vercel.app/)\
**Repository:**
[github.com/anurag2417/personal-portfolio](https://github.com/anurag2417/personal-portfolio)

------------------------------------------------------------------------

## Overview

This portfolio is designed to present more than a list of technologies.
It highlights selected projects, explains the thinking and architecture
behind them, and brings together software development and visual
storytelling.

The visual direction uses a near-black canvas, warm off-white
typography, and a vermilion accent. Scroll-based transitions, restrained
motion, and a procedural 3D scene create a distinctive experience
without relying on a conventional portfolio template.

## Highlights

-   **Cinematic hero:** Animated typography, a procedural 3D object, and
    contextual HUD elements.
-   **Selected work:** Editorial project cards with dedicated case-study
    pages.
-   **Project case studies:** Problem statements, approach,
    architecture, technical details, and project media.
-   **Motion and scrolling:** Scroll-linked storytelling, page
    transitions, and smooth scrolling.
-   **Responsive layout:** Desktop and mobile layouts with a dedicated
    mobile navigation experience.
-   **Accessibility foundations:** Semantic structure, visible keyboard
    focus, and reduced-motion support.
-   **Search and sharing metadata:** Page metadata, generated Open Graph
    imagery, robots rules, and sitemap.
-   **Custom details:** Preloader, custom cursor on supported devices,
    and a branded not-found page.

## Featured Projects

### RepoGuide

An AI-assisted open-source contribution experience focused on helping
developers explore repositories and find contribution opportunities.

### KodxCamp

A browser-first, learn-by-doing programming platform concept for
interactive lessons, coding practice, and project-based learning.

> Project descriptions and implementation details should reflect the
> current state of each project. Any metrics or outcomes should only be
> added when they can be verified.

## Technology Stack

  Area               Technologies
  ------------------ ---------------------------------------------------
  Framework          Next.js App Router, React, TypeScript
  Styling            Tailwind CSS 4, CSS custom properties
  Motion             GSAP, ScrollTrigger, Motion
  Smooth scrolling   Lenis
  3D and WebGL       Three.js, React Three Fiber, Drei, postprocessing
  Images and fonts   `next/image`, `next/font`
  Deployment         Vercel
  Version control    Git, GitHub

## Getting Started

### Prerequisites

-   Node.js compatible with the version required by the project
-   npm
-   Git

Check the Node.js requirement in `package.json` before installing
dependencies.

### 1. Clone the repository

``` bash
git clone https://github.com/anurag2417/personal-portfolio.git
cd personal-portfolio
```

### 2. Install dependencies

``` bash
npm install
```

### 3. Configure environment variables

Review the project for required environment variables and check whether
an `.env.example` file is provided. If one exists, copy it to
`.env.local` and fill in the required values.

This portfolio should not require secrets for its static presentation
unless additional integrations have been added. Never commit
`.env.local`, access tokens, or private API keys.

### 4. Start the development server

``` bash
npm run dev
```

Open <http://localhost:3000>.

### 5. Run quality checks

``` bash
npm run lint
npm run build
```

To test the production build locally:

``` bash
npm run start
```

Run `npm run build` before starting the production server.

## Project Structure

The following is a high-level guide to the main application areas. Exact
filenames may evolve as the project develops.

``` text
src/
├── app/
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── template.tsx
│   ├── not-found.tsx
│   ├── opengraph-image.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── case-study/
│   ├── layout/
│   ├── sections/
│   └── three/
└── data/
    ├── caseStudies.ts
    └── projects.ts
```

-   `app/` contains route definitions, shared layout, metadata, and
    SEO-related route files.
-   `components/` contains reusable layout, section, case-study, and 3D
    components.
-   `data/` stores the content used to render the selected projects and
    their case studies.

## Design System

The portfolio uses a small set of design tokens to keep the experience
consistent.

  Token          Value       Purpose
  -------------- ----------- ------------------------------------
  Background     `#0E0D0C`   Main canvas
  Surface        `#171614`   Raised surfaces
  Border         `#2B2926`   Dividers and outlines
  Muted text     `#8C877D`   Secondary information
  Primary text   `#EDE8DF`   Main typography
  Accent         `#FF4D1C`   Highlights and interactive accents

Typography uses Instrument Sans for display and interface text, with IBM
Plex Mono for technical labels and metadata.

## Performance and Accessibility

The interface includes several performance and accessibility
considerations:

-   Next.js image and font optimization.
-   A client-loaded 3D hero to keep the server-rendered route
    independent of WebGL.
-   Responsive 3D rendering settings and reduced-motion handling.
-   Keyboard focus styles and semantic links.
-   Generated metadata, Open Graph imagery, `robots.txt`, and
    `sitemap.xml`.

Performance scores depend on the device, network, browser, and
Lighthouse run. In one set of Lighthouse tests during development, the
reported scores were:

  Category           Mobile   Desktop
  ---------------- -------- ---------
  Performance            60        63
  Accessibility          96        96
  Best Practices        100       100
  SEO                   100       100

These values are a snapshot from development testing, not a performance
guarantee. The main optimization priority is reducing JavaScript
execution and main-thread blocking, especially around the 3D scene and
animation libraries. Re-run Lighthouse against the live site after
performance changes.

## Deployment

The site is deployed on Vercel.

For a production deployment:

1.  Push the verified changes to the intended Git branch.
2.  Confirm the Vercel project uses the correct repository, root
    directory, and build settings.
3.  Configure any required environment variables in Vercel.
4.  Set the canonical production URL in metadata, robots, and sitemap
    configuration.
5.  Run a production build and check the deployed homepage and project
    routes.
6.  Test the generated Open Graph image and preview the website on
    mobile and desktop.
7.  Re-run Lighthouse after deployment.

## Roadmap

Potential improvements include:

-   Reduce main-thread work and JavaScript shipped to the initial page.
-   Further defer non-critical 3D and animation work.
-   Replace temporary project imagery with original product screenshots
    and custom visuals.
-   Validate social previews across sharing platforms.
-   Continue testing keyboard navigation, reduced-motion behavior, and
    mobile performance.

## Contact

Visit the [live portfolio](https://anurag-kumar.vercel.app/) to explore
the work and find the current contact links.

------------------------------------------------------------------------

Built by **Anurag Kumar**.
