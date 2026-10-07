# Katreddy Lakshmi Kameswari — Portfolio

> A futuristic, elegant personal portfolio built with React, Vite, and modern CSS architecture. Tailored for an Aspiring AI & ML Engineer and Web Developer with a dark cosmic aesthetic, rose-lavender glow, and glassmorphism.

---

## 🌟 Overview

- **Name:** Katreddy Lakshmi Kameswari
- **Role:** Aspiring AI & ML Engineer · Web Developer
- **Degree:** B.Tech CSE (AI & ML), Batch 2023–2027 (CGPA: 9.0)
- **Location:** Guntur, Andhra Pradesh, India
- **Core Stacks:** Python, Machine Learning, HTML5, CSS3, JavaScript, React

---

## 🚀 Technology Stack

- **Framework:** React 19 + Vite
- **Styling Architecture:** Modular CSS System (`theme.css`, `ui.css`, `animations.css`, `responsive.css`)
- **Cosmic Animation:** HTML5 Canvas particle system + CSS keyframe orbits
- **Icons:** Lucide React
- **Typography:** Playfair Display (editorial headings), Plus Jakarta Sans (body), JetBrains Mono (metrics & code)

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   └── assets/
│       ├── profile.jpg          <-- Place your profile picture here
│       ├── resume.pdf           <-- Place your resume PDF here
│       └── project-images/      <-- Optional project screenshots
│
├── src/
│   ├── components/
│   │   ├── Navbar/              <-- Isolated navigation bar & mobile drawer
│   │   ├── Hero/                <-- Orbital portrait frame & floating badges
│   │   ├── About/               <-- Bento Grid with quote, metrics & pillars
│   │   ├── Skills/              <-- Animated progress indicators & skill cards
│   │   ├── Experience/          <-- Vertical timeline with editable cards
│   │   ├── Projects/            <-- Interactive touch/keyboard project slider
│   │   ├── Education/           <-- Academic achievements & degree cards
│   │   ├── Contact/             <-- Direct email copy, links & resume download
│   │   ├── Background/          <-- Canvas stars & ambient glowing nebulas
│   │   └── Footer/              <-- Minimalist footer with back-to-top
│   │
│   ├── styles/
│   │   ├── theme.css            <-- Master design variables (colors, glow, fonts)
│   │   ├── ui.css               <-- Glass cards, buttons, badges, typography
│   │   ├── animations.css       <-- Keyframes, floats, orbits, reduced-motion
│   │   ├── responsive.css       <-- Centralized responsive media queries
│   │   └── globals.css          <-- Base reset and cursor glow spotlight
│   │
│   ├── data/
│   │   └── portfolioData.js     <-- ALL EDITABLE CONTENT IN ONE FILE
│   │
│   ├── App.tsx                  <-- Clean component composition
│   ├── main.tsx                 <-- React DOM entry point
│   └── index.css                <-- Global import root
│
├── index.html                   <-- Meta tags & font links
├── package.json
└── vite.config.ts
```

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or `http://localhost:5173`).

### 3. Production Build
```bash
npm run build
```

---

## 🚢 Deploying to GitHub Pages

1. In `vite.config.ts`, set the base path if your repository is not at root:
   ```ts
   export default defineConfig({
     base: '/your-repo-name/', // or './' for relative paths
     // ...
   });
   ```
2. Build the static site:
   ```bash
   npm run build
   ```
3. Deploy the `dist` folder to GitHub Pages using the `gh-pages` branch or the official GitHub Pages Action in your repository settings (**Settings > Pages > Build and deployment > GitHub Actions**).

---

## ✏️ How to Customize

### 1. Edit Personal Information, Projects & Links
Open `src/data/portfolioData.js`. All portfolio data is centralized in this one file:
- **Full Name, Bio & Degree:** Edit `personal` object.
- **Social Links & Email:** Edit `contact` object.
- **Hero Floating Cards:** Edit `heroFloatingCards` array.
- **Technical Skills:** Edit `skills` array.
- **Add a Project:** Simply add a new object to the `projects` array:
  ```js
  {
    id: "proj-07",
    number: "07",
    category: "AI & Deep Learning",
    title: "New Project Title",
    description: "Detailed description of the problem and solution.",
    features: ["Key feature 1", "Key feature 2"],
    technologies: ["Python", "PyTorch", "FastAPI"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://..."
  }
  ```
- **Add or Edit an Experience:** Edit the `experience` array. The second card is already prepared as an editable entry ready for your next internship or technical role!

### 2. Replace Your Profile Picture
1. Save your photo as `profile.jpg`.
2. Place it into `/public/assets/profile.jpg`.
3. *Bonus:* In the live website, click the **"Add / Change Photo"** button on the portrait frame to upload and preview any photo directly in real time!

### 3. Replace Your Resume
1. Save your formal resume as `resume.pdf`.
2. Place it into `/public/assets/resume.pdf`.
3. The "Download Resume" buttons across the Navbar and Contact section will automatically link directly to it.

### 4. Change Colors and Visual Theme
Open `src/styles/theme.css`:
```css
:root {
  --bg: #09070e;             /* Primary background */
  --pink: #ff78b4;           /* Primary accent glow */
  --rose: #d95c9a;           /* Secondary rose accent */
  --lavender: #c09aff;       /* Tertiary accent */
  --text: #fcf8fa;           /* Body text color */
}
```
Modifying these variables updates the entire website instantly without touching any component JSX.

---

## ♿ Accessibility & Performance

- Respects `prefers-reduced-motion` settings.
- Keyboard accessible navigation and slider controls.
- Optimized Canvas animation with automatic pause when the tab is hidden.
- Clean unboxed metadata with WCAG AA compliant contrast.
