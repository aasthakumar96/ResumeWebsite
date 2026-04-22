# Aastha Kumar Portfolio

A premium single-page portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion using content mapped from the attached resume.

## Features

- Dark-first, responsive portfolio experience
- Motion-rich hero with live typewriter headline and cursor-reactive visual card
- Scroll-driven experience timeline with year-based "flip calendar" transitions
- Resume-derived about, skills, projects, education, and contact sections
- Accessible semantic structure and keyboard-friendly navigation
- Lazy-loaded below-the-fold sections for better initial performance

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
src/
  components/   Shared UI building blocks
  data/         Resume-mapped content model
  hooks/        Reusable interaction hooks
  sections/     Page sections
  App.tsx       Page composition
  main.tsx      App entry
  styles.css    Global styles and Tailwind layers
```

## Content Notes

- Resume data was mapped from `/Users/aasthakumar/Downloads/Aastha_Kumar_Resume.docx`.
- Public social profile URLs were not present in the resume, so the footer uses verified contact actions instead of placeholder profile links.
