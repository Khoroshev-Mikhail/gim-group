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
      colors: {
        '_gray': '#F2F3F7',
        '_gray-for-text': '#9FA3AD',
        '_blue_for-text': '#3597E4',
        '_blue-for-bg': '#5BC2F5',
        '_gray-light': '#CCCCCC',
        '_gray-dark': '#B3B3B3',
        '_blue-button': '#00CCFF',
        '_red-button': '#FF0000',
        '_orange-button': 'F87700',
      }
    },
  },
  plugins: [],
}
