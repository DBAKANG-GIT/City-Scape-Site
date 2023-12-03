/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#28A745',
        secondary: '#DBC4B4',
        coral: '#FF7F50',
        silver: '#f5f5f5',
      },
    },
  },
  plugins: [],
};
