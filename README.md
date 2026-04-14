# Portfolio Website — Md Munna

A modern, responsive portfolio website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**.

🌐 Live: [mdmunna.xyz](https://mdmunna.xyz/)

## Features

- **Hero Section** — Animated typewriter effect cycling through professional roles
- **About Section** — Bio with core technology showcase
- **Projects Gallery** — Card grid with project screenshots, descriptions, tech tags, and live/source links
- **Skills Section** — Categorized skill cards with icons and sub-details
- **Education & Experience** — Animated timeline layout with Framer Motion
- **Contact Form** — Full-stack form with client-side validation, serverless API route, and email delivery via Resend
- **Resume Viewer** — Interactive PDF viewer with zoom, rotation, thumbnails, keyboard shortcuts, and fullscreen mode
- **SEO Optimized** — JSON-LD structured data, Open Graph/Twitter meta tags, dynamic sitemap and robots.txt
- **Responsive Design** — Mobile-first with a slide-in drawer navigation menu
- **Smooth Animations** — Scroll-triggered entrance animations via Framer Motion

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Fonts | Geist Sans + Geist Mono (Google Fonts) |
| PDF Rendering | react-pdf |
| Icons | react-icons, lucide-react |
| Email Delivery | Resend |
| Notifications | react-toastify |
| Typewriter Effect | react-simple-typewriter |
| Utilities | clsx, tailwind-merge |

## Project Structure

```
src/
├── app/                    # Next.js App Router (pages, layout, API routes)
│   ├── layout.tsx          # Root layout with Navbar, Footer, toast container
│   ├── page.tsx            # Home page (composed of feature sections)
│   ├── resume/             # Resume page with PDF viewer
│   ├── api/contact/        # Contact form API route (sends emails via Resend)
│   ├── robots.ts           # Dynamic robots.txt
│   └── sitemap.ts          # Dynamic sitemap.xml
├── assets/                 # Static images (profile photo, project screenshots)
├── components/             # Shared UI and layout components
│   ├── layout/             # Navbar, Footer, Section
│   └── ui/                 # Container, Heading, AnimatedViewportSection
├── data/                   # Central site metadata (SEO, structured data)
├── features/               # Feature-sliced domain modules
│   ├── hero/               # Hero section with typewriter and social links
│   ├── about/              # About section with bio and tech grid
│   ├── projects/           # Projects card grid
│   ├── skills/             # Skills categorized by category
│   ├── education/          # Education & experience timelines
│   ├── contact/            # Contact form and info display
│   └── resume/             # PDF viewer (toolbar, thumbnails, canvas)
├── types/                  # Centralized TypeScript interfaces
└── utils/                  # Helpers (cn, validation, email template, nav links)
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone or navigate to the project directory
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm run start
```

### Linting

```bash
npm run lint
```

## Environment Variables

Create a `.env.local` file in the project root for the contact form to work:

```env
RESEND_API_KEY=your_resend_api_key
```

Get your API key from [Resend](https://resend.com/).

## Deployment

The easiest way to deploy is via the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import the repo on Vercel
3. Add the `RESEND_API_KEY` environment variable in Vercel settings
4. Deploy

## Customization

- **Content:** Edit the `*Data.ts` files inside each feature folder to update text, links, and project info
- **Styling:** Modify Tailwind classes throughout or update the Tailwind config for theme changes
- **Assets:** Replace images in `src/assets/` and the PDF in `public/Md_Munna_Resume.pdf`
- **Metadata:** Update `src/data/metadata.ts` for SEO, social cards, and structured data

## License

This project is private and not open-source.
