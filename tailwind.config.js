/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"], // "./src/**/*.{html,js}" "./public/**/*.{html,js}", 
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      height: {
        '100': '100vh',
      },
      colors: {
        
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

