/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
    screens: {
      tablet: { max: "768px" },
      mobile: { max: "375px" },
    },
  },
  plugins: [],
};
