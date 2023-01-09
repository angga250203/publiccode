/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-Image': "url('/aset/BG.svg')",

      },
      fontFamily:{
        'poppins':['Poppins','sans-serif']
      },

    },
  },
  plugins: [],
}
