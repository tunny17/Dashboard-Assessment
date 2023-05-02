/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flex:{
        '2':'0 0 18%',
        '3': '1 0 0',
      },
      colors:{
        'indigo-960': '#1D1042',

      }
    },
    screens:{
      xs: "480px",
      sm: "768px",
      md: "1024px",
    }
  },
  plugins: [],
}