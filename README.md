# Rahul Birdi — Portfolio

A React (Vite) portfolio built from Rahul Birdi's resume: professional summary,
technical skills, work experience, projects (ManifestAI, CopePod), education,
certifications, and contact links (email, phone, GitHub, LinkedIn).

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production / deployment (Vercel, Netlify, GitHub Pages, etc.):

```bash
npm run build
```

The compiled site is written to `dist/`.

## Project structure

```
rahul-birdi-portfolio/
├── index.html                 Vite entry HTML
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx                React root
│   ├── App.jsx                 Composes all sections
│   ├── data/
│   │   └── content.js          All resume content lives here — edit this
│   │                           file to update any text without touching UI code
│   ├── hooks/
│   │   └── useScrollSpy.js     Tracks which section is in view
│   ├── styles/
│   │   ├── tokens.js           Colors + fonts (design tokens)
│   │   └── global.css          Font imports, keyframes, responsive grid rules
│   └── components/
│       ├── StatusBar.jsx       Decorative device status bar strip
│       ├── Header.jsx          Sticky top nav (desktop)
│       ├── Hero.jsx            Hero section with headline + CTAs
│       ├── PhoneMockup.jsx     Animated phone mockup used in the hero
│       ├── Summary.jsx         Professional summary section
│       ├── Skills.jsx / SkillGroupCard.jsx
│       ├── Experience.jsx      Work experience section
│       ├── Projects.jsx / ProjectCard.jsx
│       ├── Education.jsx
│       ├── Certifications.jsx
│       ├── Contact.jsx         Contact CTAs (email, phone, GitHub, LinkedIn)
│       ├── Footer.jsx
│       ├── BottomTabs.jsx      Mobile bottom tab bar (React Navigation-style)
│       └── ui/
│           ├── Tag.jsx         Small inline mono label
│           ├── Chip.jsx        Package-style pill for skills/tech
│           └── SectionTag.jsx  JSX-tag-styled section headers
```

## Editing content

Everything text-based (name, contact info, summary, skills, experience,
projects, education, certifications) lives in `src/data/content.js`. Update
that file and every component that uses it updates automatically — no need
to touch component files for content changes.

## Design notes

- Accent color `#3DDC84` is Android Studio's own brand green — a deliberate
  callback to "Android applications" throughout the resume.
- Section headers render as JSX opening/closing tags
  (`<ProfessionalSummary>` … `</ProfessionalSummary>`).
- Skill chips are styled like npm package names.
- Navigation is a top bar on desktop and a bottom tab bar on mobile — a nod
  to React Navigation's tab navigator.
- Respects `prefers-reduced-motion` and includes visible keyboard focus
  states throughout.

## Notes on data sourcing

Content is sourced from the uploaded resume and the two GitHub repository
links included in it (ManifestAI, CopePod). Live GitHub/LinkedIn profile
data was not available to fetch automatically — update `content.js` directly
if you'd like to add more from those profiles.
