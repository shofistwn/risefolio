/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#C778DD',
        'black': '#282C33',
        'dark': '#2C3036',
        'gray': '#ABB2BF',
      }
    },
  },
  plugins: [],
}

