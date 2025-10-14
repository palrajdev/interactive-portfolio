# My Full Stack Developer Portfolio

Personal portfolio built with [Next.js](https://nextjs.org) and [Once UI](https://once-ui.com), based on the Magic Portfolio template. This repo contains my work, blog, and an about/CV page, all driven by MDX content.

## Getting started

**1. Install dependencies**
```
npm install
```

**2. Run the dev server**
```
npm run dev
```

**3. Configure Once UI**
```
src/resources/once-ui.config.ts
```

**4. Edit site content**
```
src/resources/content.tsx
```

**5. Add blog posts / projects**
```
Add a new .mdx file to src/app/blog/posts or src/app/work/projects
```

Requires Node.js v18.17+.

## Scripts

- dev: Start Next.js in development
- build: Build the production app
- start: Start the production server
- export: Export a static site (optional)
- lint: Run Next.js lint
- biome-write: Format files with Biome

## Features

- **Clean design**: Responsive, fast, and accessible
- **Content-driven**: MDX for posts and projects
- **SEO-ready**: Automatic metadata and social images
- **Configurable**: Tweak tokens and themes via Once UI
- **Optional pages**: Enable/disable blog, work, gallery, about/CV
- **Password protection**: Restrict specific routes when needed

## Content structure

- Config: `src/resources/once-ui.config.ts`
- Global content and toggles: `src/resources/content.tsx`
- Blog posts: `src/app/blog/posts/*.mdx`
- Projects: `src/app/work/projects/*.mdx`

## Deploy

You can deploy to any Next.js-compatible platform. For Vercel:

1. Push this repository to your Git provider
2. Create a new Vercel project and import the repo
3. Set the framework preset to Next.js and deploy

## Link

Portfolio Link: [https://interactive-portfolio-zeta.vercel.app/]Open Portfolio)

