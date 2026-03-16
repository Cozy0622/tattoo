/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#222222",
        brand: {
          gray: "#333333",
          light: "#E5E5E5",
        }
      },
      backdropBlur: {
        xl: "20px",
      },
      height: {
        '24': '96px',
      }
    },
  },
  plugins: [],
}