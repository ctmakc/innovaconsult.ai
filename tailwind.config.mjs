/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0A1628',
          'dark-lighter': '#111D33',
          'dark-card': '#0F1D32',
          blue: '#3B82F6',
          cyan: '#06B6D4',
          text: '#E2E8F0',
          muted: '#94A3B8',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
