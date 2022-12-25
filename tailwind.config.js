/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      s: '350px',
      sm: '600px',
      md: '960px',
      lg: '1280px',
      xl: '1440px'
    },
  }, plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
};
