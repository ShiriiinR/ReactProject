/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      orange: {
        100: '#FF4500',
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class"
  
}

