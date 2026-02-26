/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'tp-green': '#7a9b7e',
        'tp-sage': '#8fae8b',
        'tp-green-light': '#e8f0e8',
        'tp-bg': '#f7f6f2',
        'tp-card': '#ffffff',
        'tp-card-alt': '#f5f4f0',
        'tp-text': '#3d3d3d',
        'tp-muted': '#7a7a7a',
        'tp-border': '#e0ddd6',
        'tp-divider': '#f0eeea',
        'tp-coral': '#c97070',
        'tp-blue': '#8b9cc7',
        'tp-orange': '#d4a574',
        'tp-teal': '#7ab8a8',
        'tp-lavender': '#b8a0c9',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      borderRadius: {
        'tp-lg': '20px',
        'tp-md': '16px',
        'tp-sm': '12px',
      },
      boxShadow: {
        'tp': '0 1px 4px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.02)',
      },
      maxWidth: {
        'site': '1200px',
      },
    },
  },
  plugins: [],
};
