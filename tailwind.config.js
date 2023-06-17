/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color':'#018A8C',
        'sec-color':'#FFE535',
        'sec-color-h':'#F7D700',
      },
    },
  },
  plugins: [],
}