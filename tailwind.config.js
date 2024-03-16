/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "svg-background": "url('/bg2.svg')",
      },
      colors: {
        rgb: {
          green: "rgb(1, 75, 91)",
          yellow: "rgb(255, 169, 61)",
        },
      },
    },
  },
  plugins: [],
};
