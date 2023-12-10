import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "type-color": "#eee7f8",
        "background-color": "#04090c",
        "primary-color": "#E8C7FF",
        "secondary-color": "#C8B8FF",
        "accent-color": "#B8C0FF",
      },
      screens: {
        xs: "500px",
      },
    },
  },
  plugins: [],
};
export default config;
