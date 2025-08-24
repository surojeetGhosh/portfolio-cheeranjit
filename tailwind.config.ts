import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // use your CSS variables defined in src/styles/index.css
        roboto: ["var(--font-roboto)"],
        noto: ["var(--font-noto)"],
      },
      boxShadow: {
        // top shadow for footer
        "top-md": "0 -6px 12px -4px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;