/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "1000px",
        xl: "1200px",
      },
    },
    extend: {
      boxShadow: {
        shadowUser: "0 .4px 6px 0 #C2BAAC",
      },
      backgroundImage: {
        Bgbanner: "url('./src/assets/Imgs/HeroSilces/banner.png')",
        BgbannerDisc1: "url('./src/assets/Imgs/prodDiscount/DiscCream1.png')",
        BgbannerDisc2: "url('./src/assets/Imgs/prodDiscount/Discount2.jpg')",
      },
      colors: {
        bgHero: "#FBF3D9",
        bgOrange: "#E2C774",
        bgblackFooter: "#0E0E0E",
        txtPrimary: "#C39C45",
      },
    },
    fontFamily: {
      body: ["Cairo", "sans-serif"],
      special: ["Radley", "serif"],
      heading: ["Dela Gothic One", "sans-serif"],
      paragrph: ["DM Serif Text", "serif"],
    },
  },
  plugins: [],
};
