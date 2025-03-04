/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        theme: {
          background: '#f5f1e8',       // Lighter, less yellow background
          card: '#fbf8f3',            // Even lighter card background
          border: '#d5cbbe',          // Grayish beige for borders
          muted: '#a49789',           // Muted grayish brown for secondary text
          body: '#5b5045',            // Medium brown for body text
          heading: '#3c3027',         // Dark brown for headings
          link: '#6b5c8e',            // Purplish shade for links
          linkHover: '#574a72',       // Darker purple for link hover
          tag: '#e3dfd7',             // Light grayish for tags
          tagHover: '#d6d0c7',        // Slightly darker tag hover
          codeBackground: '#e5e1d8',  // Grayish code background
        }
      },
      fontFamily: {
        mono: 'var(--font-mono)',
        sans: 'var(--font-mono)',
        serif: 'var(--font-mono)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#5b5045',
            fontFamily: 'var(--font-mono)',
            a: {
              color: '#6b5c8e',
              '&:hover': {
                color: '#574a72',
              },
            },
            code: {
              background: '#e5e1d8',
              padding: '2px 4px',
              borderRadius: '3px',
              fontSize: '0.9em',
            },
            'pre code': {
              background: 'none',
              padding: '0',
            },
            h1: {
              fontFamily: 'var(--font-mono)',
              color: '#3c3027',
            },
            h2: {
              fontFamily: 'var(--font-mono)',
              color: '#3c3027',
            },
            h3: {
              fontFamily: 'var(--font-mono)',
              color: '#3c3027',
            },
            h4: {
              fontFamily: 'var(--font-mono)',
              color: '#3c3027',
            },
            h5: {
              fontFamily: 'var(--font-mono)',
              color: '#3c3027',
            },
            h6: {
              fontFamily: 'var(--font-mono)',
              color: '#3c3027',
            },
            p: {
              fontFamily: 'var(--font-mono)',
              color: '#5b5045',
            },
            li: {
              fontFamily: 'var(--font-mono)',
              color: '#5b5045',
            },
            strong: {
              color: '#3c3027',
            },
          },
        },
        invert: {
          css: {
            color: '#d1d5db',
            a: {
              color: '#9285bb',
              '&:hover': {
                color: '#7a6fa0',
              },
            },
            h1: {
              color: '#f9fafb',
              fontFamily: 'var(--font-mono)',
            },
            h2: {
              color: '#f9fafb',
              fontFamily: 'var(--font-mono)',
            },
            h3: {
              color: '#f9fafb',
              fontFamily: 'var(--font-mono)',
            },
            h4: {
              color: '#f9fafb',
              fontFamily: 'var(--font-mono)',
            },
            h5: {
              color: '#f9fafb',
              fontFamily: 'var(--font-mono)',
            },
            h6: {
              color: '#f9fafb',
              fontFamily: 'var(--font-mono)',
            },
            strong: {
              color: '#f9fafb',
            },
            code: {
              background: '#1f2937',
              color: '#e5e7eb',
            },
            figcaption: {
              color: '#9ca3af',
            },
            blockquote: {
              color: '#d1d5db',
            },
            p: {
              fontFamily: 'var(--font-mono)',
            },
            li: {
              fontFamily: 'var(--font-mono)',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}