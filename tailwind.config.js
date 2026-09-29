/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          50: '#effaf6',
          100: '#d0f2e4',
          200: '#a4e4cd',
          300: '#6fcfb0',
          400: '#3db590',
          500: '#1f9a76',
          600: '#137b5f',
          700: '#10634e',
          800: '#0f4f3f',
          900: '#0d4135',
          950: '#06251e',
        },
        warm: {
          50: '#fdf8f3',
          100: '#f9edd9',
          200: '#f3d9b2',
          300: '#eabd81',
          400: '#e09d50',
          500: '#d88430',
          600: '#c96d25',
          700: '#a75321',
          800: '#864322',
          900: '#6d381e',
        },
      },
    },
  },
  plugins: [],
};
