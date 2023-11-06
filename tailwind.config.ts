import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neutral: 'rgb(var(--neutral-rgb))',
        background: 'rgb(var(--background-rgb))',
        primary: 'rgb(var(--primary-rgb))',
        secondary: 'rgb(var(--secondary-rgb))',
      },
    },
  },
  plugins: [],
};
export default config;
