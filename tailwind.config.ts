import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        bone: "#dcdacf",
        sand: "#cebcab",
        charcoal: "#38292b",
        crimson: "#972c1f",
        ochre: "#cb8530",
      },
      fontFamily: {
        display: ["Geist", "Inter Tight", "Inter", "system-ui", "sans-serif"],
        body: ["Geist", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
};

export default config;
