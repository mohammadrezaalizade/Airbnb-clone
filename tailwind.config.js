/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary_red: {
          100: "#ffdedf",
          200: "#ffbdbf",
          300: "#ff9c9f",
          400: "#ff7b7f",
          500: "#ff5a5f",
          600: "#cc484c",
          700: "#993639",
          800: "#662426",
          900: "#331213"
        },
        primary_purple: {
          100: "#e9dae1",
          200: "#d3b5c3",
          300: "#bd90a5",
          400: "#a76b87",
          500: "#914669",
          600: "#743854",
          700: "#572a3f",
          800: "#3a1c2a",
          900: "#1d0e15"
        },
        primary_green: {
          100: "#cce6e7",
          200: "#99ced0",
          300: "#66b5b8",
          400: "#339da1",
          500: "#008489",
          600: "#006a6e",
          700: "#004f52",
          800: "#003537",
          900: "#001a1b"
        },
        secondary_white:"#FFFFFF",
        secondary_dark_gray: {
          100: "#dadada",
          200: "#b6b6b6",
          300: "#919191",
          400: "#6d6d6d",
          500: "#484848",
          600: "#3a3a3a",
          700: "#2b2b2b",
          800: "#1d1d1d",
          900: "#0e0e0e"
        },
        secondary_gray: {
          100: "#e4e4e4",
          200: "#c8c8c8",
          300: "#adadad",
          400: "#919191",
          500: "#767676",
          600: "#5e5e5e",
          700: "#474747",
          800: "#2f2f2f",
          900: "#181818"
        },
      }
    },
  },
  plugins: [],
}