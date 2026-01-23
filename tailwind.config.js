/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3D2B1F',
        secondary: '#C5A059',
        accent: '#F5F5DC',
        'text': '#4A4A4A',
        'text-light': '#6B7280',
        'bg-light': '#F9FAFB',
        'border': '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'default': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #3D2B1F 0%, #2A1D13 100%)',
      },
      transitionProperty: {
        'all': 'all',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'default': '300ms',
      },
    },
  },
  plugins: [],
}
