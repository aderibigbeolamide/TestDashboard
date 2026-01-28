/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: '#001b5e', // Dark blue from image
        primary: '#ffd700', // Yellow accent from image (approx)
      }
    },
  },
  plugins: [],
}
