/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
      'edgewater': {
        '50': '#f2f9f9',
        '100': '#dfeeed',
        '200': '#c4dfdf',
        '300': '#99c7c7',
        '400': '#68a7a8',
        '500': '#4c8b8e',
        '600': '#427378',
        '700': '#3a5f64',
        '800': '#365054',
        '900': '#304549',
        '950': '#1c2c30',
      }
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    }
  },
  plugins: []
};