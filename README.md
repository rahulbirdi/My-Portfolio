# 📱 Rahul Birdi — Portfolio Website

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-3DDC84?style=for-the-badge)

**Building native mobile experiences, screen by screen.**

[Live Demo](#) · [Report Bug](https://github.com/rahulbirdi/My-Portfolio/issues) · [Request Feature](https://github.com/rahulbirdi/My-Portfolio/issues)

</div>

---

## 🌟 Overview

A modern, high-performance portfolio website built for **Rahul Birdi**, React Native & Android App Developer based in Mohali, Punjab.

Designed with a sleek dark glassmorphism aesthetic inspired by **Android Studio's brand green (`#3DDC84`)**, featuring interactive full-screen section presentations, live device mockups, dynamic side indicator navigation, and a direct email messaging suite.

---

## 🚀 Key Features

- 🖥️ **Full-Screen Section Viewport Layout (`100vh`)**: Each major section snaps seamlessly into full view for slide-deck presentation scrolling.
- 📱 **Interactive Device Mockup**: Animated Android phone frame showcasing real-time build logs and developer stats.
- 🔍 **Full-Screen Project Inspector**: Dedicated interactive modal overlay providing deep-dive breakdowns of featured projects (**ManifestAI**, **CopePod**).
- 📍 **Floating Dot Indicator Navigation**: Right-side interactive nav bar tracking section scroll position with live tooltips.
- 📬 **Direct "Get In Touch" Contact Suite**: Built-in interactive contact box dispatching messages straight to `rahulbirdi75@gmail.com`.
- ⚙️ **Centralized Data Engine**: All bio, skills, work experience, education, and project content managed in `src/data/content.js`.
- 🎨 **Android Studio Aesthetic**: Customized tokens, monospaced terminal headers, and npm-package style skill chips.

---

## 🛠️ Tech Stack

- **Core**: React 18, Vite 5, JavaScript (ES6+)
- **Icons**: Lucide React
- **Styling**: Vanilla CSS3, Glassmorphism, HSL tailwinds & variables
- **State & Hooks**: React Custom Hooks (`useScrollSpy`), HTML5 Fullscreen API

---

## 💻 Quick Start

### Prerequisites
- Node.js (`v16.0.0` or higher)
- npm (`v8.0.0` or higher)

### Installation

```bash
# Clone the repository
git clone https://github.com/rahulbirdi/My-Portfolio.git

# Navigate into project directory
cd My-Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` in your browser to view the portfolio.

---

## 🏗️ Production Build & Deployment

To compile a production-ready static bundle:

```bash
npm run build
```

The optimized static assets will be output to the `dist/` directory, ready to deploy to **Vercel**, **Netlify**, or **GitHub Pages**.

---

## 📂 Project Structure

```text
My-Portfolio/
├── index.html                 # Vite HTML entry point
├── package.json               # Dependencies & scripts
├── vite.config.js             # Vite compilation config
├── .gitignore                 # Excluded node_modules, build & cache paths
└── src/
    ├── main.jsx               # React DOM root render
    ├── App.jsx                # Main layout, scroll spy & modal manager
    ├── data/
    │   └── content.js         # Single source of truth for portfolio content
    ├── hooks/
    │   └── useScrollSpy.js    # Active section scroll observer
    ├── styles/
    │   ├── tokens.js          # Design tokens (colors, typography, glass filters)
    │   └── global.css         # Responsive grid & 100vh scroll snap styling
    └── components/
        ├── StatusBar.jsx      # Decorative device status bar strip
        ├── Header.jsx         # Sticky header with Full Screen toggle button
        ├── FullScreenDotsNav.jsx # Floating right-side section dot indicators
        ├── FullScreenProjectModal.jsx # Full-screen project details overlay
        ├── Hero.jsx           # Hero banner with terminal headline & CTAs
        ├── PhoneMockup.jsx    # Floating animated Android mockup
        ├── Summary.jsx        # Professional summary section
        ├── Skills.jsx         # Skill category grids
        ├── SkillGroupCard.jsx # Skill group pill container
        ├── Experience.jsx     # Work experience timeline card
        ├── Projects.jsx       # Featured mobile project collection
        ├── ProjectCard.jsx    # Project card with repository & expand controls
        ├── Education.jsx      # B.Tech degree card
        ├── Certifications.jsx # Certifications & leadership list
        ├── Contact.jsx        # Direct Get in Touch email form box
        ├── Footer.jsx         # Footer copyright & credits
        ├── BottomTabs.jsx     # Mobile tab bar navigation
        └── ui/                # Atomic UI components (Tag, Chip, SectionTag)
```

---

## ✏️ Customizing Content

Updating portfolio content is fast and straightforward:

Edit [src/data/content.js](file:///d:/project/rahul-birdi-portfolio/src/data/content.js) to modify:
- Contact information (`email`, `location`, `github`, `linkedin`)
- Profile summary text
- Technical skill groups & packages
- Experience timeline & project bullets

All components reactively re-render updated data automatically without editing UI components.

---

## 📬 Contact & Connect

**Rahul Birdi** — *React Native & Mobile App Developer*

- 📧 **Email**: [rahulbirdi75@gmail.com](mailto:rahulbirdi75@gmail.com)
- 🐙 **GitHub**: [github.com/rahulbirdi](https://github.com/rahulbirdi)
- 💼 **LinkedIn**: [linkedin.com/in/rahul-birdi-196b70317](https://www.linkedin.com/in/rahul-birdi-196b70317)
- 📍 **Location**: Mohali, Punjab

---

<div align="center">
  <sub>Designed & Developed with ❤️ for Rahul Birdi's Mobile Engineering Portfolio.</sub>
</div>
