/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '200px': '200px',
        '300px': '300px',
      },
      height: {
        '112px': '112px',
        '168px': '168px',
      },
    },
  },
  plugins: [],
}
