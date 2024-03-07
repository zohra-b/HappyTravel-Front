/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "inner-top": "inset 0 3px 3px -3px rgba(0, 0, 0, 0.5)",
        "sgreen": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      }
    },
    colors:{
      "primary-yellow":"#FBFDCE",
      "secondary-green":"#00DFA2",
      "tertiary-red":"#FF0060",
      "quaternary-blue":"#0079FF",
    }
  },
  plugins: [],
};
