/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF6EE',
        forest: '#1B4332',
        sage: '#52B788',
        mint: '#D8F3DC',
        sunflower: '#E9C46A',
        sky: '#48CAE4',
        terracotta: '#E76F51',
      },
      fontFamily: {
        heading: ['Fredoka', 'cursive', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

