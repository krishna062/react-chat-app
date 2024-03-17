/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {
      colors: {
        'primary': '#FF6363',
        'secondary': '#E2E2D5',
        
        'light': '#F3F4F6',
      },
    },
  },
  plugins: [],
}

