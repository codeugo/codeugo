/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      colors: {
        "primary": "#F0E7DB",
        "primary-dark": "#121212",
        "accentgreen": "#42B883",
        "accentdarkgreen": "#2B7855",
      },
      fontFamily: {
        'MPlusRounded': ['"M PLUS Rounded 1c"', 'sans-serif'],
      },
      container: {
        padding: "20%",
        center: true,
      },
    },
  },
  plugins: [],
}
