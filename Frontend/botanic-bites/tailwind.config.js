/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#3d211A',
        secondary: '#6f4d38',
        hover: '#A07856',
      },
    },
  },
  plugins: [],
}