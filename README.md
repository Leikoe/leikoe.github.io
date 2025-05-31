# Léo's blog

My simple, static blog for writing posts in markdown easily. Built with Next.js and deployed to GitHub Pages.

## Features

- Static site generation with Next.js
- Markdown support for blog posts
- Syntax highlighting for code blocks
- Tag-based categorization
- Responsive design with Tailwind CSS
- Dark mode support

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Leikoe/blog.git
   cd cs-blog
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

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Creating Blog Posts

1. Create a new Markdown file in the `src/content/posts` directory.
2. Add frontmatter at the top of the file:
   ```md
   ---
   title: 'Your Post Title'
   date: 'YYYY-MM-DD'
   excerpt: 'A brief description of your post'
   tags: ['tag1', 'tag2']
   ---
   ```
3. Write your blog post content in Markdown below the frontmatter.

### Markdown Features

- Standard Markdown syntax is supported
- Code blocks with syntax highlighting
- Links and images
- Lists and tables
- Blockquotes

## Deployment

The blog is configured to deploy to GitHub Pages automatically using GitHub Actions.

1. Push your changes to the `main` branch
2. GitHub Actions will build and deploy your site
3. Your site will be available at `https://leikoe.github.io/blog/`

## Customization

### Styling

This blog uses Tailwind CSS for styling. You can customize the design by:

1. Modifying the `tailwind.config.js` file
2. Editing the component files in `src/components`
3. Updating the global styles in `src/styles/globals.css`

### Configuration

- Update site metadata in the `next.config.js` file
- Modify the components and layouts in the `src/components` directory
- Customize pages in the `src/pages` directory

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [remark](https://github.com/remarkjs/remark)
- [gray-matter](https://github.com/jonschlinkert/gray-matter)
