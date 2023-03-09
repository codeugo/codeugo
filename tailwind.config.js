/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      colors: {
        "primary": "#FFFFFF",
        "primary-dark": "#202023",
        "accentgreen": "#42B883",
        "accentgreen2": "#3BA575",
        "accentgreen3": "#318760",
      },
      fontFamily: {
        'mplusrounded': ['"M PLUS Rounded 1c"'],
      },
      container: {
        padding: "20%",
        center: true,
      },
    },
  },
  plugins: [],
}
