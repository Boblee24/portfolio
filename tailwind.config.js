const defaultTheme = require("tailwindcss/defaultTheme")
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      screens : {
        xs:"475px",
        xx:"580px",
        xii: "750px",
        dm: "830px", 
        xdm: "930px",
        xxdm: "1000px",
        xxxdm: "1100px",
        ...defaultTheme.screens
      },
      maxWidth : {
        '128' : '600px'
      },
      colors : {
        'primary-blue': '#074C83',
      }
    },
  },
  plugins: [],
}

