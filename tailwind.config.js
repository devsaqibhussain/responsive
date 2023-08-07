import { defaultMethod } from 'react-router-dom/dist/dom';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      backgroundImage: {
        "page-bg" : "url('/images/space-bg.jpg')"
      },
      fontFamily:{
        Handjet: ["Handjet"],
        REM: ["REM"]
      },
    },
  },
  plugins: [],
}