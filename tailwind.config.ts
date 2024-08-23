import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      xs: "360px",
      md: "768px",
      lg:"1024px",
    },
      extend: {
        colors: {
          white: "#fff",
          lightgray: "#d7d7d7",
          maroon: "rgba(121, 0, 0, 0.55)",
          black: "#000",
          rosybrown: "#c3a7a7",
          gray: {
            "100": "rgba(0, 0, 0, 0.7)",
            "200": "rgba(255, 255, 255, 0.4)",
          },
          gold: "#ffdd40",
          red: "#ff0000",
        },
        spacing: {},
        fontFamily: {
          "palanquin-dark": "'Palanquin Dark'",
          "pathway-gothic-one": "'Pathway Gothic One'",
        },
      
    },
  },
  plugins: [],
};
export default config;
