import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'screen-body': 'calc(100vh - 4.5rem)',
      },
    },
  },
  darkMode: 'class',
} satisfies Config;
