/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'xs': '480px',
        'maxw': '1200px',
      },
      colors: {
        '_gray': '#F2F3F7',
        '_gray-for-text': '#BDBFC6',
        '_blue_for-text': '#3484BB',
        '_blue-for-bg': '#61A5D6',
        '_gray-light': '#CCCCCC',
        '_gray-dark': '#B3B3B3',
        '_blue-button': '#008DD2',
        '_red-button': '#E31F25',
        '_orange-button': '#EF7A1D',
        '_gray-button': '#E9EAF2',
      }
    },
  },
  plugins: [],
}
