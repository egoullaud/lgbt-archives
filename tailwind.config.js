/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        harmonicaReg: ["harmonica-reg", "regular"],
        harmonicaMono: ["harmonica-mono", "mono"],
        harmonicaBold: ["harmonica-bold","bold"],
        harmonicaItalic: ["harmonica-italic", "italic"],
        harmonicaCondensed: ["harmonica-condensed", "condensed"]
      }
    },
  },
  plugins: [],
}
