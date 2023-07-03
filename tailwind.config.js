/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: '#0A6EBD',
        secondary: '#5A96E3',
        dark: '#0f172a',
      },
      screens:{
        '2xl':'1320px',
      },
    },
  },
  plugins: [],
}

