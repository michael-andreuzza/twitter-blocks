/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontSize: {
      xs: [
        '0.75rem',
        {
          lineHeight: '1rem',
        },
      ],
      sm: [
        '0.875rem',
        {
          lineHeight: '1.5rem',
        },
      ],
      base: [
        '1rem',
        {
          lineHeight: '1.75rem',
        },
      ],
      lg: [
        '1.125rem',
        {
          lineHeight: '2rem',
        },
      ],
      xl: [
        '1.25rem',
        {
          lineHeight: '2rem',
        },
      ],
      '2xl': [
        '1.5rem',
        {
          lineHeight: '2rem',
        },
      ],
      '3xl': [
        '2rem',
        {
          lineHeight: '2.5rem',
        },
      ],
      '4xl': [
        '2.5rem',
        {
          lineHeight: '3.5rem',
        },
      ],
      '5xl': [
        '3rem',
        {
          lineHeight: '3.5rem',
        },
      ],
      '6xl': [
        '3.75rem',
        {
          lineHeight: '1',
        },
      ],
      '7xl': [
        '4.5rem',
        {
          lineHeight: '1.1',
        },
      ],
      '8xl': [
        '6rem',
        {
          lineHeight: '1',
        },
      ],
      '9xl': [
        '8rem',
        {
          lineHeight: '1',
        },
      ],
    },
    extend: {
      colors: {
        black: '#1c1d1f',
        "accent": {
      50: "#EDE8FC",
      100: "#DBD1FA",
      200: "#BBA8F5",
      300: "#977AF0",
      400: "#7750EC",
      500: "#5423E7",
      600: "#4015C1",
      700: "#2F108F",
      800: "#200B61",
      900: "#0F052E"
    },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '5rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
