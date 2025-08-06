# AI Landlord Website

## Project Overview

AI Landlord is an intelligent property management platform that automates tenant screening, lead qualification, and leasing processes using AI-powered chatbots and smart decision-making systems.

## Features

- **24/7 AI Chatbot**: Intelligent lead response across Zillow, Craigslist, Facebook, SMS, and email
- **Automated Lead Qualification**: Customizable scoring rules for tenant screening
- **FCRA-Compliant Background Screening**: Secure screening via TransUnion SmartMove
- **Smart Scheduling**: Automated property showing scheduling with calendar integration
- **Lead Analytics**: Comprehensive reporting and analytics to track performance
- **Multi-Platform Integration**: Works across all major rental platforms

## Technology Stack

This website is built with modern web technologies:

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: React Router DOM for client-side navigation
- **Animations**: Framer Motion for smooth interactions
- **SEO**: React Helmet Async for meta tag management

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ai-landlord-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/            # shadcn/ui components
│   ├── Hero.tsx       # Landing page hero section
│   ├── Features.tsx   # Product features showcase
│   ├── Projects.tsx   # Success stories
│   └── ...
├── pages/             # Page components
│   ├── Index.tsx      # Homepage
│   ├── About.tsx      # About page
│   └── ...
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
└── data/              # Static data and content
```

## Key Components

### Hero Section
The main landing page hero showcases AI Landlord's value proposition with compelling copy and clear call-to-action buttons.

### Features Section
Interactive showcase of AI Landlord's core features including AI chatbot, background screening, scheduling, and analytics.

### Success Stories
Carousel of real landlord success stories demonstrating the platform's effectiveness across different property types and sizes.

### Navigation
Responsive navigation with dropdown menus for Success Stories and Resources sections.

## Deployment

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
npm run preview
```

### Deployment Platforms

- **Netlify**: Connect your repository for automatic deployments
- **Vercel**: Optimized for React applications
- **GitHub Pages**: Free hosting for public repositories

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Website: [ailandlord.com](https://ailandlord.com)
- Email: info@ailandlord.com
- LinkedIn: [AI Landlord](https://www.linkedin.com/company/ai-landlord)

## Support

For support and questions about AI Landlord's tenant screening platform, please contact our team at support@ailandlord.com.
