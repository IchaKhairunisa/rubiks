/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", "sans-serif"],
    },
    colors: {
        Dark: "#0f172a",
        Green: "#0d9488",
        Orange: "#ED7423",
        Blue: "#13597A",
    },
    }, 
  },
  plugins: [],
};