/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  colors: {
    "green": "#0a2e36",
    "comicGreen": "#0a2e36",
  },
  fontFamily: {
    sans: ["Graphik", "sans-serif"],
    serif: ["Merriweather", "serif"],
  },
  theme: {
    extend: {
      height: {
        "128": "32rem",
      },
    },
  },
  plugins: [],
};
