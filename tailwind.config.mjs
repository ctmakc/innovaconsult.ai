/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        electric: '#22D3EE',
        cobalt: '#2563EB',
        ink: '#020617',
        glow: '#7DD3FC'
      },
      fontFamily: {
        sans: ['"Manrope"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif']
      },
      boxShadow: {
        card: '0 20px 80px -28px rgba(34, 211, 238, 0.32)'
      }
    }
  },
  plugins: []
};
