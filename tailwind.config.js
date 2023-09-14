/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {

        purple: {
          600: '#820ad1',
          800: '#2F0549',
        },

        gray: {
          200: '#F5F5F5',
          400: '#6F6F6F',
          600: '#111111',
        }

      }
    },
    fontFamily: {
      sans: ['var(--font-graphik)'],
    },
  },
  plugins: [],
}

