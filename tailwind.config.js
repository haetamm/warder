/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xxs: '360px',
        xs: '500px',
        tab: '845px',
        tabCs: '961px',
      },
    },
  },
  plugins: [],
}
