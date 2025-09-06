/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f0ff',
          100: '#e5e2ff',
          200: '#cdc8ff',
          300: '#aca1ff',
          400: '#8b70ff',
          500: '#6c63ff',
          600: '#5a4df7',
          700: '#4c3ce3',
          800: '#3f32bf',
          900: '#352b9b'
        },
        secondary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#00c9a7',
          600: '#00b89d',
          700: '#059669',
          800: '#065f46',
          900: '#064e3b'
        },
        accent: {
          coral: '#ff6b6b',
          yellow: '#ffd93d'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Poppins', 'system-ui', 'sans-serif'],
        'mono': ['Fira Code', 'monospace']
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};