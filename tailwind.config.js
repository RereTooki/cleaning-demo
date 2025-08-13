/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      vsm: "1px",
      md: "375px",
      xmd: "455px",
      tab: "565px",
      tabImg: "601px",
      lg: "750px",
      nxl: "800px",
      mxl: "900px",
      xl: "1000px",
      xxl: "1100px",
      xxxl: "1200px",
    },

    extend: {
      colors: {
        brand: {
          DEFAULT: "#0F9D8D", // accent (teal). change once; updates everywhere.
          50: "#F0FAF9",
          100: "#DCF5F2",
          200: "#B8EAE4",
          300: "#8FDCD3",
          400: "#4FC7B9",
          500: "#0F9D8D",
          600: "#0C8074",
          700: "#0A6A61",
          800: "#094F49",
          900: "#083F3B",
        },
      },
      boxShadow: {
        card: "0 10px 25px rgba(16,24,40,0.06)",
      },
    },
  },
  plugins: [],
};
