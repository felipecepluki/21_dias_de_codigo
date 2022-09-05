/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgba(255, 255, 255, 0.1)",
        boxShadow: "rgba(0, 0, 0, 0.5)",
        borderColor: "rgba(255, 255, 255, 0.5)",
      },
    },
  },
  plugins: [],
};
