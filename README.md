# Youth Circus Landing Page

A modern, mobile-responsive landing page for San Diego Circus Center's youth circus classes ad campaign.

## Features

- **Mobile-First Design**: Fully responsive with TailwindCSS
- **Conversion Optimized**: Lead capture forms and clear CTAs
- **Social Proof**: Customer testimonials and 5-star ratings
- **Fast Loading**: Static Next.js optimization
- **SEO Optimized**: Meta tags and semantic HTML

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to view the landing page.

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Deploy automatically with custom domain setup
3. Configure your subdomain (e.g., youth.sandiegocircuscenter.org)

### Alternative Deployment Options

- **Netlify**: Drag and drop `.next` folder after `npm run build`
- **GitHub Pages**: Use `npm run export` for static files

## Customization

- Replace placeholder images in the code with actual photos
- Update contact form to connect to your preferred form handler
- Add Google Analytics tracking code
- Customize colors and branding in Tailwind classes

## File Structure

- `src/app/page.tsx` - Main landing page component
- `src/app/layout.tsx` - HTML layout and metadata
- `tailwind.config.ts` - Tailwind CSS configuration

## Performance

- Optimized for Core Web Vitals
- Uses Next.js Image optimization
- Minimal JavaScript bundle
- Fast loading times on mobile networks