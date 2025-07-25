# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the documentation website for PromptPal, built with Docusaurus 3.4.0. The site is deployed to GitHub Pages at https://PromptPal.github.io.

## Development Commands

```bash
# Install dependencies (using pnpm)
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Serve production build locally
pnpm serve

# Type check TypeScript files
pnpm typecheck

# Deploy to GitHub Pages
pnpm deploy

# Clear Docusaurus cache
pnpm clear
```

## Architecture

### Directory Structure

- `blog/` - Blog posts in MDX format with release announcements
- `docs/` - Main documentation content organized by:
  - `basic/` - Basic tutorials (installation, projects, prompts, integration, CI)
  - `developer-tools/` - SDK and API documentation
- `src/` - Custom React components and pages
  - `components/` - Reusable components (HomepageFeatures, ReleaseHero)
  - `pages/` - Custom pages (primarily index.tsx for homepage)
- `static/` - Static assets served directly
- `docusaurus.config.ts` - Main configuration file
- `sidebars.ts` - Documentation sidebar structure

### Key Configuration

The site configuration in `docusaurus.config.ts` includes:
- Base URL: `/`
- URL: `https://PromptPal.github.io`
- Supported locales: English and Chinese
- Theme: Classic theme with code highlighting
- Plugins: Mermaid for diagrams

### Content Guidelines

1. Documentation files use MDX format supporting React components
2. Images for docs go in `docs/assets/`
3. Blog images go in `blog/assets/`
4. Mermaid diagrams are supported via code blocks with `mermaid` language

### Deployment

The site automatically deploys to GitHub Pages on push to master branch. Manual deployment can be triggered with `pnpm deploy`.

## Development Notes

- No testing framework is configured
- TypeScript is used for type safety - run `pnpm typecheck` before committing
- The project uses pnpm as the package manager
- Follow conventional commits format: `type(scope): description`