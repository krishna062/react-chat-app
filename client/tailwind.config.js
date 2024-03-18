/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {
      colors: {
        'primary': '#0000FF',
        'secondary': '#E2E2D5',
        
        'light': '#F3F4F6',
      },
    },
  },
  plugins: [],
}

