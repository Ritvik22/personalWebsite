# Ritvik Shah - Personal Website

A modern, visually stunning personal website for Ritvik Shah showcasing his expertise in software engineering and robotics.

## Features

- Modern and professional design with beautiful animations
- Responsive layout that works on all devices
- Interactive 3D background using Three.js
- Dynamic sections for showcasing skills, projects, and experience
- Contact form for easy communication
- Optimized performance with Next.js

## Technologies Used

- **Next.js** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Three.js** - 3D graphics library

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ritvik-shah-website.git
   cd ritvik-shah-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
/src
  /app - Next.js app directory
    /layout.tsx - Root layout component
    /page.tsx - Main page component
    /globals.css - Global styles
  /components - React components
    /Navbar.tsx - Navigation bar
    /Hero.tsx - Hero section with 3D background
    /About.tsx - About section
    /Skills.tsx - Skills showcase
    /Projects.tsx - Projects portfolio
    /Contact.tsx - Contact form
    /Footer.tsx - Footer section
  /lib - Utility functions and hooks
  /styles - Additional styling
  /public - Static assets
```

## Customization

You can customize the content and styling of the website by modifying the component files in the `/src/components` directory. All sections are modular and can be easily updated or replaced.

## Deployment

The website can be deployed to various platforms:

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Netlify
```bash
npm run build
netlify deploy
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from modern portfolio websites
- Three.js community for 3D graphics examples
- The React and Next.js ecosystem for providing powerful tools for web development 