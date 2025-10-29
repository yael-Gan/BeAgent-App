/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { colors: {
      primaryBlue: '#0056A0',
    },},
  },
  plugins: [],
};
