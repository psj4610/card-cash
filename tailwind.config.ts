import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#ed1c24',
          blue: '#0088cb',
          yellow: '#ffcb05',
          beige: {
            light: '#f5efe0',
            DEFAULT: '#e8dcc8',
          },
        },
        dark: '#242121',
      },
    },
  },
  plugins: [],
};
export default config;
