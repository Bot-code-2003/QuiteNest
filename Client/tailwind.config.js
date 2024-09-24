/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#22c55e",
        primaryBlue: "#3b82f6",
        secondary: "#86efac",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lora: ["Lora", "serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, #bbf7f6, #ddd6fe, #fbcfe8)",
        "button-gradient": "linear-gradient(to right, #d8b4fe, #f9a8d4)",
        "button-hover-gradient": "linear-gradient(to right, #f9a8d4, #d8b4fe)",
      },
    },
  },
  plugins: [],
};
