/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        'nav-gradient': 'linear-gradient(#000 0 0, var(--accent-purple) 0 0)',
      },
      backgroundSize: {
        'nav-size': '0 2px',
        'nav-size-hover': '100% 2px',
      },
      fontFamily: {
        logo: ['Kirang Haerang', 'sans-serif'],
        primaryLight: ['Oswald', 'sans-serif'],
        primaryRegular: ['TWKEverett-Regular', 'sans-serif'],
        secondaryLight: ['SuisseIntl-Light', 'sans-serif'],
        secondaryRegular: ['SuisseIntl-Regular', 'sans-serif'],
        secondaryBold: ['SuisseIntl-Bold', 'sans-serif'],
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: 'var(--primary-grey)',
          grey: 'var(--primary-grey)',
          white: 'var(--primary-white)',
          green: 'var(--primary-green)',
        },
        secondary: {
          DEFAULT: 'var(--secondary-blue)',
          blue: 'var(--secondary-blue)',
        },
        accent: {
          DEFAULT: 'var(--accent-purple)',
          purple: 'var(--accent-purple)',
        },
        navbar: {
          logo: 'var(--primary-white)',
          link: 'var(--primary-white)',
          button: {
            DEFAULT: 'var(--secondary-blue)',
            hover: {
              DEFAULT: 'var(--secondary-blue)',
              secondary: 'var(--primary-white)'
            }
          }
        }
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 30s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};