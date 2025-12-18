/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure it includes your App.jsx
  ],
  darkMode: "class", // Enables dark mode via class
  theme: {
    extend: {},
  },
  plugins: [],
};
