# Pacific Solar Shiners Website

A modern, responsive website for Pacific Solar Shiners - a professional solar panel cleaning company.

## Features

- **Home Page**: Hero section with "Get Pricing" button
- **About Page**: Company information and mission
- **Projects Page**: Showcase of residential and commercial projects with before/after comparisons
- **Case Studies Page**: Real utility bill comparisons showing savings
- **Partnerships Page**: Information about RST CleanTech automated cleaning system
- **Pricing Modal**: Form to collect customer information for quotes

## Technology Stack

- Vue.js 3
- Vue Router 4
- Vite
- Modern CSS with CSS Variables

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The website will be available at `http://localhost:3000`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
pacific-solar-shiners/
├── src/
│   ├── components/
│   │   └── PricingModal.vue
│   ├── views/
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   ├── Projects.vue
│   │   ├── CaseStudies.vue
│   │   └── Partnerships.vue
│   ├── router/
│   │   └── index.js
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
└── vite.config.js
```

## Pages

- `/` - Home page with hero section and services overview
- `/about` - Company information and mission
- `/projects` - Gallery of completed projects with before/after images
- `/case-studies` - Real customer results with utility bill comparisons
- `/partnerships` - Information about RST CleanTech partnership

## Notes

- The pricing modal collects: number of panels, number of stories, property address, and phone number
- Currently, form submissions are logged to console. In production, this should connect to a backend API
- Placeholder images are used for project galleries - replace with actual before/after photos
- All styling is responsive and mobile-friendly

