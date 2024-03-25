import { title } from "process";
import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            background: "#222222",
            foreground: "#333333",
            light: "#FFFFFF80",
            text: "#FFFFFF66",
            title: "#BAC964",
            button: "#6C757D",
         },
      },
   },
   plugins: [],
};
export default config;
