/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: { max: '820px' },
        lg: '976px',
        xl: '1440px',
        md_: '820px',
        sm_: { max: '360px' },
        'md-sm': { max: '1024px' },
        'semi-sm': '120px',
        'semi-md': '721px',
        'semi-md-col': { max: '721px' },
      },
      backgroundImage: {
       home: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/background.png')" 
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}