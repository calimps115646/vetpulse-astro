/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        colors: {
          'navy-900': '#0a1628',
          'navy-800': '#1a2332',
          'navy-700': '#2a3442',
          'cyan-400': '#00d9ff',
          'cyan-500': '#00d9ff',
          'cyan-600': '#00b8d4',
        },
      },
    },
    plugins: [],
  }
  