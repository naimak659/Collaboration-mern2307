/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      textColor: {
        primary: "#232323",
        secondary: "#6E6E6E",
      },
    },
  },
  plugins: [],
};
