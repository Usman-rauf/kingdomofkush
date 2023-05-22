/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  darkMode: 'class',
  content: [
    './src/**/*.{html,js}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
    'node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}'
  ],

  theme: {
    fontFamily: {
      sans: ['Custom Sans', 'sans-serif'],
      serif: ['Custom Serif', 'serif'],
      mono: ['Custom Mono', 'monospace']
    },

    fontSize: {
      sm: '13px',
      base: '15px',
      titleSm: '.95rem',
      heading: '3.37rem',
      xl: '1.25rem'
    },

    colors: {
      transparent: 'transparent',
      primary: '#CB9833',
      white: '#ffffff',
      gray: '#191919',
      lightGray: '#7f8393',
      softBlack: '#1E1E1E',
      second: '#47B8E7',
      link: '#416DEC',
      black: '#000',
      softGray: '#ddd',
      silver: '#ecebff',
      'bubble-gum': '#ff77e9',
      bermuda: '#78dcca',
      red: '#FF0000'
    },

    plugins: [
      // ...
      require('tailwind-scrollbar')({ nocompatible: true })
    ],
    screens: {
      // Mobile Device
      sm: '556px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      // laptop
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      // Desktop
      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    }
  }
});
