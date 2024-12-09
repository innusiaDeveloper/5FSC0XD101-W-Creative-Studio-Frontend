/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Включите все файлы внутри папки src
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "Roboto", "Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
