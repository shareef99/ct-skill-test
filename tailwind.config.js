/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
          xl: "3rem",
        },
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      colors: {
        white: "#fefeff",
        "light-blue": "#414f6b",
        gray: "#b0b4be",
      },
      animation: {
        "fade-in": "fadeIn .5s ease-in",
        "fade-out": "fadeOut .5s ease-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
