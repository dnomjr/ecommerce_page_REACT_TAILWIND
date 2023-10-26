/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
      colors: {
        orange: "hsl(26, 100%, 55%)",
        paleOrange: "hsl(25, 100%, 94%)",
        veryDarkBlue: "hsl(220, 13%, 13%)",
        darkGrayishBlue: "hsl(219, 9%, 45%)",
        grayishBlue: "hsl(200, 6%, 45%)",
        lightGrayishBlue: "hsl(223, 64%, 98%)",
        black: "hsl(0, 0%, 0%)",
        blackOpacity: "hsl(0, 0%, 0%, 0.75)",
      },
      boxShadow: {
        cartShadow: "0px 50px 50px 0px rgba(0, 0, 0, 0.10)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
