# Gopal Dahale — Portfolio

A high-quality developer portfolio built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **TypeScript**.
https://gopaldahale.vercel.app/

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Custom CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Animations**: CSS Keyframes + Framer Motion (optional)
- **Fonts**: Bricolage Grotesque (display) + Outfit (body) + JetBrains Mono (code)

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css         # Global styles, CSS variables, animations
│   ├── layout.tsx          # Root layout with metadata & fonts
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # 404 page
│   ├── projects/
│   │   ├── page.tsx        # All projects grid
│   │   └── [slug]/
│   │       └── page.tsx    # Project detail page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── Navbar.tsx          # Fixed navigation with scroll detection
│   ├── Hero.tsx            # Hero with animated blobs & badges
│   ├── About.tsx           # About with code snippet card
│   ├── Skills.tsx          # Tabbed skill categories with progress bars
│   ├── FeaturedProjects.tsx# Project cards grid
│   ├── ProjectCard.tsx     # Reusable project card component
│   ├── Timeline.tsx        # Experience & education timeline
│   ├── ContactCTA.tsx      # Call-to-action section
│   ├── ContactForm.tsx     # Validated contact form
│   └── Footer.tsx          # Footer with links
├── lib/
│   ├── data.ts             # All portfolio content (projects, skills, etc.)
│   └── utils.ts            # Utility functions (cn)
└── public/                 # Static assets (add screenshots here)
```

## 🎨 Customization

### Update Personal Info
Edit `lib/data.ts` to update:
- Projects (add/edit/remove)
- Skills and proficiency levels
- Work experience
- Education
- Certifications

### Update Social Links
Search for `href="https://github.com"` and `href="https://linkedin.com"` in the components and replace with your actual profiles.

### Add Real Project Screenshots
Place images in `public/` folder and reference them in `lib/data.ts`:
```ts
image: "/your-screenshot.png"
```

### Colors & Theme
Edit `tailwind.config.ts` to change the color scheme. The main colors are:
- Primary: `#7c3aed` (purple)
- Accent Cyan: `#22d3ee`
- Background: `#06080f`

### Connect a Real Form Backend
In `components/ContactForm.tsx`, replace the `setTimeout` simulation with a real API call (e.g., EmailJS, Resend, Formspree, or your own endpoint).

## 📦 Adding Swiper.js

To add a Swiper carousel to the projects section:

```bash
npm install swiper
```

Then in any client component:
```tsx
"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Manual Build
```bash
npm run build
npm run start
```

## 📧 Contact

- Email: gopaldahale77@gmail.com
- LinkedIn: [linkedin.com/in/gopaldahale](https://linkedin.com)
- Location: Pune, Maharashtra, India
