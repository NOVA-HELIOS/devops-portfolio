/** @type {import('tailwindcss').Config} */

export default {

  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],

  theme: {

    extend: {

      colors: {

        background: "#050816",

        primary: "#00E5FF",

        secondary: "#3B82F6",

        accent: "#22C55E",

      },

      fontFamily: {

        poppins: ["Poppins", "sans-serif"],

      },

    },

  },

  plugins: [],

};
