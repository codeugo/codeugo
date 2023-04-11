/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      colors: {
        "primary": "#FFFFFF",
        "primary-dark": "#202023",
        "primary-dark-lighter": "#313134",
        "bracket": "#333333",
        "accentgreen": "#42B883",
        "accentgreen2": "#3BA575",
        "accentgreen3": "#318760",
      },
      fontFamily: {
        'mplusrounded': ['"M PLUS Rounded 1c"'],
      },
      container: {
        padding: "25%",
        center: true,
      },
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(20px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out'
      },
    },
  },
  plugins: [],
}
