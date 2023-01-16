const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './ui/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-opentype'),
  ],
  theme: {
    extend: {
      colors: {
        secondary: {
          50: '#d2e4ff',
          100: '#a8caff',
          200: '#458dff',
          300: '#0b65f3',
          400: '#0053d6',
          500: '#0045b1',
          600: '#123693',
          700: '#082d8b',
          800: '#062371',
          900: '#123693',
        },
      },

      fontSize: {
        '2xl': [
          '28px',
          {
            lineHeight: '130%',
            fontSize: '28px',
          },
        ],
        '2xs': [
          '12px',
          {
            lineHeight: '130%',
          },
        ],
      },

      typography: ({ theme }) => ({
        secondary: {
          css: {
            '--tw-prose-body': theme('colors.secondary[900]'),
            '--tw-prose-headings': theme('colors.secondary[900]'),
            '--tw-prose-lead': theme('colors.secondary[700]'),
            '--tw-prose-links': theme('colors.secondary[900]'),
            '--tw-prose-bold': theme('colors.secondary[900]'),
            '--tw-prose-counters': theme('colors.secondary[600]'),
            '--tw-prose-bullets': theme('colors.secondary[400]'),
            '--tw-prose-hr': theme('colors.secondary[300]'),
            '--tw-prose-quotes': theme('colors.secondary[900]'),
            '--tw-prose-quote-borders': theme('colors.secondary[300]'),
            '--tw-prose-captions': theme('colors.secondary[700]'),
            '--tw-prose-code': theme('colors.secondary[900]'),
            '--tw-prose-pre-code': theme('colors.secondary[100]'),
            '--tw-prose-pre-bg': '#f1f5f5',
            '--tw-prose-th-borders': theme('colors.secondary[300]'),
            '--tw-prose-td-borders': theme('colors.secondary[200]'),
            '--tw-prose-invert-headings': colors.white,
            '--tw-prose-invert-lead': colors.slate[400],
            '--tw-prose-invert-links': colors.white,
            '--tw-prose-invert-bold': colors.white,
            '--tw-prose-invert-counters': colors.slate[400],
            '--tw-prose-invert-bullets': colors.slate[600],
            '--tw-prose-invert-hr': colors.slate[700],
            '--tw-prose-invert-quotes': colors.slate[100],
            '--tw-prose-invert-quote-borders': colors.slate[700],
            '--tw-prose-invert-captions': colors.slate[400],
            '--tw-prose-invert-code': colors.white,
            '--tw-prose-invert-pre-code': colors.slate[300],
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': colors.slate[600],
            '--tw-prose-invert-td-borders': colors.slate[700],
          },
        },
      }),
    },
  },
};
