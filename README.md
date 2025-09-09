# 🚀 SaaSify + Strapi CMS - Premium SaaS Landing Page Template

A modern, responsive, and conversion-optimized landing page template built with Next.js 15, TypeScript, and **Strapi CMS integration**. Perfect for SaaS startups, tech companies, and digital products looking to make a powerful first impression with **dynamic content management**.

## ✨ Features

- **🎨 Modern Design** - Clean, professional, and conversion-focused design
- **📱 Fully Responsive** - Optimized for all devices and screen sizes
- **⚡ Lightning Fast** - Built with Next.js 15 and optimized for performance
- **🔍 SEO Optimized** - Pre-configured meta data with dynamic content from Strapi
- **🎯 Conversion Ready** - Strategic CTA placement and user flow optimization
- **🌙 Dark Mode Support** - Toggle between light and dark themes
- **🛠 Easy to Customize** - Well-structured code and comprehensive documentation
- **🔗 Strapi CMS Integration** - Manage all content dynamically through admin panel
- **📊 Dynamic Content** - Blog posts, testimonials, features, and more from CMS
- **🖼️ Media Management** - Upload and manage images through Strapi
- **👤 Multi-user Support** - Team collaboration through Strapi admin

## 🛠 Tech Stack

### Frontend

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** Sans Serif
- **Icons:** Lucide React
- **Animations:** Tailwind CSS

### Backend & CMS

- **CMS:** Strapi v5
- **Database:** SQLite
- **API:** RESTful API with Strapi
- **Media Storage:** Local storage
- **Authentication:** Strapi built-in auth system

## 📦 What's Included

### Frontend Components

- Hero section with compelling headlines (CMS managed)
- Features showcase with icons and descriptions (CMS managed)
- Pricing tables with multiple tiers (CMS managed)
- Customer testimonials carousel (CMS managed)
- FAQ section with expandable items (CMS managed)
- Blog section with pagination (CMS managed)
- Call-to-action sections (CMS managed)
- Footer with social links and navigation (CMS managed)
- 404 error page
- Responsive navigation with mobile menu

### Strapi CMS Features

- **Content Types:** Hero, Features, Testimonials, Pricing Plans, FAQ, Blog Posts
- **Media Library:** Image and file management
- **Admin Panel:** User-friendly content management interface
- **Role-based Access:** Multiple user roles with different permissions
- **API Endpoints:** Ready-to-use REST API for all content types

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager
- Database (PostgreSQL for production, SQLite for development)

### Installation

#### 1. Clone or download the template

```bash
cd saasify-strapi
```

#### 2. Setup Backend (Strapi)

```bash
# Navigate to backend folder
cd backend

# Install dependencies
yarn install
# or npm run install / pnpm install / bun install

# Setup environment variables
cp .env.example .env
# Edit .env with your database credentials and other settings

# Run database migrations and seed data
yarn develop
# This will create admin user and sample content
```

#### 3. Setup Frontend (Next.js)

```bash
# Open new terminal and navigate to frontend folder
cd ../frontend

# Install dependencies
yarn install
# or npm run install / pnpm install / bun install

# Setup environment variables
cp .env.local.example .env.local
# Edit .env.local with your Strapi API URL

# Start development server
npm run dev
```

#### 4. Access the Applications

- **Frontend:** [http://localhost:3000](http://localhost:3000)
- **Strapi Admin:** [http://localhost:1337/admin](http://localhost:1337/admin)

### First Time Setup

If you want create your own account strapi :

1. **Create Strapi Admin User**

   - Visit [http://localhost:1337/admin](http://localhost:1337/admin)
   - Create your admin account
   - Import sample content (optional)

2. **Configure API Permissions**
   - Go to Settings > Roles > Public
   - Enable `find` and `findOne` for all content types
   - Save the changes

## ⚙️ Configuration

### Environment Variables

#### Frontend (.env.local)

```bash
# Strapi API Configuration
API_URL=http://localhost:1337/api

# Look at the env.example of the frontend and backend projects to see what env variables must be present.
```

#### Backend (.env)

```bash
# Server Configuration
HOST=0.0.0.0
PORT=1337
APP_KEYS="your-app-keys"
API_TOKEN_SALT="your-api-token-salt"
ADMIN_JWT_SECRET="your-admin-jwt-secret"
TRANSFER_TOKEN_SALT="your-transfer-token-salt"
JWT_SECRET="your-jwt-secret"

# Database Configuration (Development)
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db

# Database Configuration (Production - PostgreSQL)
# DATABASE_CLIENT=postgres
# DATABASE_HOST=localhost
# DATABASE_PORT=5432
# DATABASE_NAME=saasify
# DATABASE_USERNAME=your-username
# DATABASE_PASSWORD=your-password
```

### Customization

#### 1. Update Frontend Metadata

Edit `frontend/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  applicationName: "Your SaaS Name",
  // ... other metadata
};
```

#### 2. Customize Colors and Branding

Modify `frontend/app/globals.css`:

```css
:root {
  --primary: hsl(235, 69%, 61%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* ... other custom colors */
}
```

#### 3. Configure Strapi Content Types

- Access Strapi admin panel
- Modify content types as needed
- Update API calls in frontend components

## 📁 Project Structure

```
saasify-strapi/
├── frontend/            # Next.js Frontend Application
│   ├── public/          # Static assets
│   └── src/
│       ├── app/         # Next.js 15 App Router pages
│       ├── components/  # React components
│       │   ├── section-main/  # Landing page sections
│       │   └── ui/      # UI components
│       ├── lib/         # Utility functions and API calls
│       ├── hooks/       # Custom React hooks
│       └── types/       # TypeScript definitions
└── backend/             # Strapi CMS Backend
    ├── config/          # Strapi configuration
    ├── src/
    │   ├── api/         # API routes and controllers
    │   │   ├── hero/    # Hero content type
    │   │   ├── feature/ # Features content type
    │   │   ├── testimonial/ # Testimonials
    │   │   ├── pricing/ # Pricing plans
    │   │   ├── faq/     # FAQ content type
    │   │   └── blog-post/ # Blog posts
    │   └── admin/       # Admin panel customizations
    └── public/          # Uploaded media files
```

## 🎨 Content Management

### Adding New Content

#### Through Strapi Admin Panel:

1. **Hero Section:** Content Manager > Hero > Edit
2. **Features:** Content Manager > Features > Add New Entry
3. **Testimonials:** Content Manager > Testimonials > Add New Entry
4. **Pricing:** Content Manager > Pricing Plans > Add New Entry
5. **FAQ:** Content Manager > FAQ > Add New Entry
6. **Blog Posts:** Content Manager > Blog Posts > Add New Entry

#### API Integration:

All content is automatically fetched from Strapi API using:

```typescript
// Example API call in lib/strapi.ts
export async function getHeroContent() {
  const res = await fetch(
    `${apiUrl}/hero?populate=*`
  );
  return res.json();
}
```

## 🔧 Available Scripts

### Frontend

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript compiler check
```

### Backend (Strapi)

```bash
npm run develop      # Start development server with auto-reload
npm run start        # Start production server
npm run build        # Build admin panel
npm run deploy       # Deploy (if configured)
```

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px
- **Large Desktop:** > 1280px

## 🐛 Troubleshooting

### Common Issues

**CORS errors?**
Edit `backend/config/middlewares.ts`:

```typescript
export default [
  "strapi::errors",
  {
    name: "strapi::cors",
    config: {
      origin: ["http://localhost:3000", "https://your-domain.com"],
    },
  },
  // ... other middlewares
];
```

**Build errors?**

```bash
# Frontend
cd frontend
npm run lint
npm run type-check

# Backend
cd backend
npm run build
```

## 🔒 Security & Best Practices

- **API Security:** Configure proper CORS and rate limiting
- **Database:** Use environment variables for sensitive data
- **Media Storage:** Consider using cloud storage (AWS S3, Cloudinary) for production
- **Backups:** Regular database backups for production
- **SSL:** Always use HTTPS in production

## 📄 License

This template is licensed for commercial use. Each purchase includes:
- ✅ Use in unlimited personal projects
- ✅ Use in unlimited commercial projects
- ✅ Modify and customize as needed
- ❌ Resell or redistribute the template

## 🤝 Support & Resources

- 📧 **Email Support:** rifkycorp@gmail.com
- 🛒 **Purchase:** [https://rifky59.gumroad.com](https://rifky59.gumroad.com)
- 📖 **Next.js Documentation:** [https://nextjs.org/docs](https://nextjs.org/docs)
- 📚 **Strapi Documentation:** [https://docs.strapi.io](https://docs.strapi.io)
- 🎨 **Tailwind CSS Guide:** [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

---

**Made with ❤️ for the SaaS community & aspiring developers**

_Whether you're launching your next SaaS product or learning modern web development, this full-stack template with CMS integration is the perfect starting point for creating professional, dynamic landing pages that you can manage without touching code. Ideal for entrepreneurs, developers, and students looking to build something extraordinary._
