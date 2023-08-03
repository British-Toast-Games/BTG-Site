/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'midnight': {
          100: '#ebf1ff',
          300: '#8fb2ff',
          800: '#0f1937',
          900: '#090f21',
          950: '#050812',
        },
        'hotpink': {
          600: '#d41d6d'
        }
      },
      fontFamily: {
        IBM: ['IBM\ Plex\ Sans', "sans"]
      }
    },
  },
  plugins: [],
}
