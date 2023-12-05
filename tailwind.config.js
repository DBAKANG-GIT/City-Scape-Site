/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#28A745',
        secondary: '#A26028',
        coral: '#FF7F50',
        silver: '#f5f5f5',
        backdrop: 'rgba(0, 0, 0, 0.7)',
        grey: '#333',
      },
    },
  },
  plugins: [],
};
