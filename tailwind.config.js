/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#400073",
        "secondary-color": "#1E073C",
        "txt-color": "#CBF55C",
        "btn-color": "#00FFFF"
      },
    },
    fontFamily: {
      Roboto: 'Roboto, sans-serif'
    },

  },
  plugins: [],
}

