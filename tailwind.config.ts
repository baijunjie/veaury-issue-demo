import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,css,scss,vue}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx,css,scss,vue}',
  ],
  darkMode: 'selector',
  theme: {},
  plugins: [nextui()],
}
