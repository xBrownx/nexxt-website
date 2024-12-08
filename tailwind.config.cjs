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
        'nav-gradient': 'linear-gradient(#000 0 0, #FFF 0 0)',
        'availability': "url('https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/availability/availability-background-optimised.jpg')",
        'availability-mobile': "url('https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/availability/mobile-background-optimised.jpg')",
      },
      backgroundSize: {
        'nav-size': '0 2px',
        'nav-size-hover': '100% 2px',
      },
      boxShadow: {
        'modal': '0 4px 30px rgba(0, 0, 0, 0.4)',
      },
      filter: {
        'location-button': 'invert(20%) sepia(82%) saturate(370%) hue-rotate(130deg) brightness(94%) contrast(92%)',
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
          DEFAULT: '#5A86AD',
          blue: '#5A86AD',
          grey: '#1A1A1A',
          white: '#EDF5F6',
          red: '#8F454E',
        },
        secondary: {
          DEFAULT: '#293D3E',
          darkBlue: '#293D3E',
        },
        navbar: {
          logo: '#EDF5F6',
          link: '#EDF5F6',
          button: {
            DEFAULT: '#EDF5F6',
            hover: {
              DEFAULT: '#8F454E',
              secondary: '#EDF5F6'
            }
          }
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-50%)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 30s linear infinite',
      },
      gap: {
        'avail': '0.76%'
      }
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};