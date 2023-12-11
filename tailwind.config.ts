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
      animation: {
        'soft-bounce': 'soft-bounce 1s infinite'
      },
      keyframes: {
        "soft-bounce": {
          "0%, 100%": {
            transform: "translateY(-3%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
