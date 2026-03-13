import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial'],
        display: ['"Space Grotesk"', 'Manrope', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        clay: {
          50: '#fff5ed',
          100: '#ffe7d4',
          200: '#fec9a3',
          300: '#fca36f',
          400: '#f47d43',
          500: '#e15f2a',
          600: '#c4491f',
          700: '#9f371c',
          800: '#7f301d',
          900: '#672b1c'
        },
        sand: {
          50: '#fbf8f2',
          100: '#f3ede2',
          200: '#e6d8c4',
          300: '#d6c09f',
          400: '#c7a67b',
          500: '#b68b5c',
          600: '#9d7048',
          700: '#7e583b',
          800: '#674935',
          900: '#563d2e'
        },
        pine: {
          50: '#eef7f4',
          100: '#d7ebe3',
          200: '#b1d8cb',
          300: '#83bdaa',
          400: '#579f89',
          500: '#3d836f',
          600: '#2f6859',
          700: '#275347',
          800: '#22433b',
          900: '#1e3832'
        }
      }
    }
  },
  plugins: []
} satisfies Config;
