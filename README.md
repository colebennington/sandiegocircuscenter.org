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

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Google Tag Manager ID (format: GTM-XXXXXXX) - Optional if using GA directly
NEXT_PUBLIC_GTM_ID=your_gtm_id_here

# Google Analytics ID (format: G-XXXXXXXXXX) - Use this for direct GA implementation
NEXT_PUBLIC_GA_ID=G-DYHGK3JECC

# Meta Pixel ID (format: numeric ID)
NEXT_PUBLIC_META_PIXEL_ID=your_meta_pixel_id_here
```

### How to get your tracking IDs:

**Google Analytics (Direct):**
1. Go to [Google Analytics](https://analytics.google.com)
2. Create a new property or use an existing one
3. Your Measurement ID will be in the format `G-XXXXXXXXXX`
4. Use this in `NEXT_PUBLIC_GA_ID`

**Google Tag Manager (Alternative):**
1. Go to [Google Tag Manager](https://tagmanager.google.com)
2. Create a new container or use an existing one
3. Your GTM ID will be in the format `GTM-XXXXXXX`
4. Use this in `NEXT_PUBLIC_GTM_ID` (then configure GA inside GTM)

**Meta Pixel:**
1. Go to [Facebook Business Manager](https://business.facebook.com)
2. Navigate to Events Manager
3. Create a new pixel or use an existing one
4. Your Pixel ID will be a numeric value (e.g., `1234567890123456`)

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
- Add your Google Tag Manager and Meta Pixel tracking IDs to `.env.local`
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