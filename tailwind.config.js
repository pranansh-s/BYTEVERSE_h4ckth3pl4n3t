/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: { 
      fontFamily: {
        hindLight: ['Hind Madurai Light', 'serif'],
        hindRegular: ['Hind Madurai Regular', 'serif'],
        montserrat: ['Montserrat', 'serif'],
      },
      colors: {
        primary: "#c0b7f7",
      }
     },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
