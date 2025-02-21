/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.md', './.vitepress/theme/**/*.{vue,ts}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'ul > li': {
              '--tw-prose-bullets': 'var(--color-yellow)',
            },
            'hr': {
              'border-top': '2px solid var(--color-yellow)',
            },
            code: {
              'backgroundColor': '#fdf6e3',
              'padding': '0 0.25rem',
              'borderRadius': '0',
              '&::before': {
                content: '""!important',
              },
              '&::after': {
                content: '""!important',
              },
            },
            pre: {
              'background-color': '#fdf6e3',
              'border-radius': '0',
              'border': '2px solid black',
              'margin': '0',
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

