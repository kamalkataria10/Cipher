/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgcolor: "#e8eaec",
      },
    },
    fontFamily: {
      body: ["Open Sans"],
    },
  },
  plugins: [],
};
