# CS-Blog Development Guide

## Commands
- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run export` - Export as static site
- `npm run lint` - Run ESLint

## Project Architecture and File Organization

### Directory Structure
- `/src/pages/`: Next.js pages for routing
  - `index.tsx`: Homepage with post listing
  - `posts/[slug].tsx`: Dynamic route for individual blog posts
  - `tags/[tag].tsx`: Dynamic route for tag-filtered posts
  - `about.tsx`: Static about page
  - `_app.tsx`: Root app component with layout
- `/src/components/`: Reusable UI components
  - `Header.tsx`: Site navigation
  - `Footer.tsx`: Site footer
  - `PostCard.tsx`: Blog post preview card
- `/src/content/posts/`: Markdown blog post files
- `/src/lib/`: Utility functions
  - `posts.ts`: Content fetching and processing
- `/src/styles/`: Global styles
  - `globals.css`: Tailwind imports and custom styles

### Key Components
- **Layout**: Consistent site structure via `_app.tsx` with Header and Footer
- **PostCard**: Displays post previews with title, date, excerpt, and tags
- **Dynamic Routes**: Uses Next.js file-based routing with dynamic segments for posts and tags

## Content Management Approach

### Markdown-Based Content
- Blog posts stored as Markdown files in `/src/content/posts/`
- Frontmatter metadata using `gray-matter` for post properties
- Posts include structured metadata:
  - `title`: Post title
  - `date`: Publication date
  - `excerpt`: Brief summary
  - `tags`: Array of categorization tags

### Content Processing Pipeline
1. Read Markdown files from filesystem using Node.js `fs` module
2. Parse frontmatter with `gray-matter` to extract metadata
3. Process Markdown content with `unified` ecosystem:
   - Parse Markdown with `remark-parse`
   - Convert to HTML AST with `remark-rehype`
   - Apply syntax highlighting with `rehype-prism-plus`
   - Stringify to HTML with `rehype-stringify`
4. Return combined metadata and processed HTML content

## Routing System

### File-Based Routing
- Leverages Next.js file-based routing
- Dynamic routes with square brackets (e.g., `[slug].tsx`)
- Clean URLs matching content structure

### Static Site Generation
- All routes pre-rendered at build time
- Uses `getStaticProps` to fetch data during build
- Uses `getStaticPaths` to define dynamic routes
- Zero client-side data fetching for content

## Markdown Processing Pipeline

### Processing Stack
1. **Reading**: Node.js `fs` module reads Markdown files
2. **Parsing**: `gray-matter` extracts frontmatter metadata
3. **Transformation**: Unified processor pipeline:
   ```typescript
   unified()
     .use(remarkParse)           // Parse Markdown to AST
     .use(remarkRehype)          // Convert to HTML AST
     .use(rehypePrism)           // Apply syntax highlighting
     .use(rehypeStringify)       // Convert to HTML string
   ```

### Metadata Structure
- TypeScript interfaces for strong typing:
  - `PostMetadata`: Basic post info (title, date, excerpt, etc.)
  - `PostData`: Extends metadata with processed content

## Syntax Highlighting Implementation

### Technology Stack
- `rehype-prism-plus`: Syntax highlighting plugin for rehype
- Prism.js: Core syntax highlighting library
- Theme: Uses 'prism-tomorrow' CSS theme

## Code Style Guidelines
- **TypeScript**: Use strict mode with explicit return types
- **Components**: Functional components with explicit prop interfaces
- **Naming**: PascalCase for components/types, camelCase for functions/variables
- **Imports**: External libraries first, then internal (using @/* paths)
- **File Structure**: One component per file, named same as component
- **Styling**: Tailwind CSS with @tailwindcss/typography for blog content
- **Markdown**: Use gray-matter for frontmatter, remark for rendering
- **Code Blocks**: Use language-specific syntax highlighting with PrismJS
- **Error Handling**: Propagate errors, avoid try/catch when possible
- **Static Generation**: Leverage Next.js getStaticProps/getStaticPaths
- **Exports**: Use named exports (not default) for components

## Content Guidelines
- **Blog Posts**: Use markdown files in `src/content/posts/` with frontmatter
- **Code Blocks**: Use proper language identifier in fenced code blocks (```rust, ```bash)
- **Syntax**: Comments use # in bash code blocks, // in other languages