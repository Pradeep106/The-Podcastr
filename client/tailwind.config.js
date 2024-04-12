/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Define your custom color here
        "color-main": "#1A1B1D", //black
        "color-second": "#FDCC0D", //yallow
        "color-green": "#1DB954",
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        bold: "700",
      },
      backgroundImage: {
        "bg-img":
          "linear-gradient(0deg, rgba(3,2,17,0.7) 0%, rgba(15,15,18,0.5) 50%, rgba(255,255,255,0) 100%),url('../public/images/hero-section.jpg')",
      },
    },
  },
  plugins: [],
};
