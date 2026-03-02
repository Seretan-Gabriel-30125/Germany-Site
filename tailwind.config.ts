import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Inter', 'Roboto', 'Arial']
      },
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#dcedff',
          200: '#baddff',
          300: '#87c6ff',
          400: '#4ea8ff',
          500: '#1c86ff',
          600: '#0b66db',
          700: '#0b52b1',
          800: '#0d468f',
          900: '#0f3d75'
        }
      }
    }
  },
  plugins: []
} satisfies Config;
