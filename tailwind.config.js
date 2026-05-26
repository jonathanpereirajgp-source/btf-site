/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"I Brand"', 'Fraunces', 'Georgia', 'serif'],
        sans: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          900: '#0B1622',
          800: '#142235',
          700: '#243549',
          600: '#3a4e66',
          500: '#56697f',
          400: '#7e8d9f',
        },
        paper: {
          DEFAULT: '#FFFFFF',
          warm:    '#F7F5EF',
          soft:    '#FAFAF7',
        },
        rule: '#1f2c3d',
        // Brand green — official BTF
        moss: {
          DEFAULT: '#AED140',
          dark:    '#9DBE36',
          deep:    '#7A9628',
          soft:    '#C3DC6E',
          tint:    '#E6F0C6',
        },
        copper: {
          DEFAULT: '#F04F27',
          dark:    '#D3431F',
          soft:    '#F47559',
        },
      },
      letterSpacing: {
        tighter2: '-0.02em',
        tighter3: '-0.032em',
      },
      maxWidth: {
        '7xl': '1280px',
        '8xl': '1440px',
      },
    },
  },
  plugins: [],
}
