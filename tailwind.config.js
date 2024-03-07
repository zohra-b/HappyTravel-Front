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
        "inner-top": "inset 1px 3px 4px 1px rgb(37 29 29 / 18%)",
        "s-green": "2px 1px 7px 2px rgb(67 125 110 / 32%)",
        "sh-transparent": "2px 1px 7px 2px rgb(67 125 110 / 0%)",
      },
    },
    colors: {
      "white-transparent": "#f5f5dc00",
      "primary-yellow": "#FBFDCE",
      "secondary-green": "#00DFA2",
      "tertiary-red": "#FF0060",
      "quaternary-blue": "#0079FF",
    },
  },
  plugins: [],
};
