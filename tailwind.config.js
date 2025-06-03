/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      height: {
        'show-tile': '180px',
      },
      width: {
        'show-tile': '320px',
      }
    },
  },
  plugins: [],
}
