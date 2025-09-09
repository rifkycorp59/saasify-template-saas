# 🚀 SaaSify - Premium SaaS Landing Page Template

A modern, responsive, and conversion-optimized landing page template built with Next.js 15 and TypeScript. Perfect for SaaS startups, tech companies, and digital products looking to make a powerful first impression.

## ✨ Features

- **🎨 Modern Design** - Clean, professional, and conversion-focused design
- **📱 Fully Responsive** - Optimized for all devices and screen sizes
- **⚡ Lightning Fast** - Built with Next.js 15 and optimized for performance
- **🔍 SEO Optimized** - Pre-configured meta data
- **🎯 Conversion Ready** - Strategic CTA placement and user flow optimization
- **🌙 Dark Mode Support** - Toggle between light and dark themes
- **🛠 Easy to Customize** - Well-structured code and comprehensive documentation

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** Sans Serif
- **Icons:** Lucide React
- **Animations:** Tailwind CSS

## 📦 What's Included

- Hero section with compelling headlines
- Features showcase with icons and descriptions
- Pricing tables with multiple tiers
- Customer testimonials carousel
- FAQ section with expandable items
- Footer with social links and navigation
- 404 error page

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone or download the template**

   ```bash
   # If you have access to the repository
   git clone [repository-url]
   cd saasify
   ```

2. **Install dependencies**

```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
```

3. **Start the development server**

```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your landing page.

## ⚙️ Customization

### 1. Update Metadata Configuration

Edit `app/layout.tsx` to update your site information:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  applicationName: "SaaSify",
  referrer: "origin-when-cross-origin",
  title: {
    default: "SaaSify",
    template: `%s | ${"SaaSify"}`,
  },
  // Other Thing
};
```

### 2. Customize Colors and Branding

Modify `app/global.css` to match your brand colors:

```javascript
:root {
  /* Core background and text colors */
  --background: hsl(0, 0%, 100%);
  --foreground: hsl(222, 13%, 11%);

  /* Card backgrounds */
  --card: hsl(0, 0%, 100%);
  --card-foreground: hsl(222, 13%, 11%);

  --berhasil: hsl(142, 76%, 36%);

  /* Popover backgrounds */
  --popover: hsl(0, 0%, 100%);
  --popover-foreground: hsl(222, 13%, 11%);

  /* Primary brand colors - Deep blue/purple gradient */
  --primary: hsl(235, 69%, 61%);
  --primary-foreground: hsl(0, 0%, 100%);
  --primary-glow: hsl(248, 73%, 69%);
  // Other Thing
}
```

### 3. Update Content

- Edit components in `/components` folder
- Modify page content in `/app` directory
- Update images in `/public` folder

## 📁 Project Structure

```
saasify/
├── public/              # Static assets (images, icons, etc.)
├── src/
    ├── app/                 # Next.js 15 App Router pages
    ├── components/          # Reusable React components
    ├── lib/                 # Utility functions and configurations
    ├── hooks/               # Hooks Function
    └── ...config files
```

## 🎨 Customization Guide

### Changing Colors

All colors are defined in `app/global.css`. Update the primary, secondary, and accent colors to match your brand.

### Adding New Sections

1. Create a new component in `/components`
2. Import and add it to your desired page
3. Update the navigation if needed

### Modifying Content

- **Hero Section:** `/components/section-main/Hero.tsx`
- **Features:** `/components/section-main/Features.tsx`
- **Pricing:** `/components/section-main/Pricing.tsx`
- **Testimonials:** `/components/section-main/Testimonials.tsx`
- **CTA:** `/components/section-main/CTA.tsx`
- **FAQ:** `/components/section-main/FAQ.tsx`
- **Header:** `/components/Header.tsx`
- **Footer:** `/components/Footer.tsx`

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px
- **Large Desktop:** > 1280px

## 🐛 Troubleshooting

### Common Issues

**Port already in use?**

```bash
npm run dev -- --port 3001
# Or
yarn dev -- --port 3001
# Or 
pnpm dev -- --port 3001
# Or
bun dev -- --port 3001
```

**Build errors?**

```bash
npm run lint
# Or
yarn lint
# Or
pnpm lint
# Or
bun lint

npm run type-check
# Or
yarn type-check
# Or
pnpm type-check
# Or
bun type-check
```

**Styling issues?**
Make sure Tailwind CSS is properly configured and all classes are available.

## 📄 License

This template is licensed for commercial use. Each purchase includes:
- ✅ Use in unlimited personal projects
- ✅ Use in unlimited commercial projects
- ✅ Modify and customize as needed
- ❌ Resell or redistribute the template

## 🤝 Support

- 📧 **Email Support:** rifkycorp@gmail.com
- 🛒 **Purchase:** [https://rifky59.gumroad.com](https://rifky59.gumroad.com)
- 📖 **Next.js Documentation:** [https://nextjs.org/docs](https://nextjs.org/docs)
- 🎨 **Tailwind CSS Guide:** [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

---

**Made with ❤️ for the SaaS community**

_Whether you're launching your next SaaS product or learning modern web development, this template is the first step to creating professional, high-converting landing pages in minutes, not weeks. Perfect for entrepreneurs, developers, and students looking to build something extraordinary._
