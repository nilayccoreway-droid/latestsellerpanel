/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#00666B',
          light: '#008A91',
          dark: '#004D51',
          hover: '#00999F',
        }
      },
      borderRadius: {
        DEFAULT: '0.5rem',  // 8px - standard rounded
        'lg': '0.75rem',    // 12px - large rounded  
        'xl': '1rem',       // 16px - extra large rounded
      }
    },
  },
  plugins: [],
};
