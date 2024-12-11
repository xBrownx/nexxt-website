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
        title: ['Evermore', 'sans-serif'],              
        arial: ['Arial', 'sans-serif'],   
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
        'pop-up': {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'bounce-horizontal': {
          '0%': { transform: 'translateX(0)' }, 
          '50%': { transform: 'translateX(calc(100vw - 100%))' },
          '100%': { transform: 'translateX(0)' }, 
        },
        'text-reveal': {
          '0%': { transform: 'translateY(100%)', opacity: 0 }, 
          '50%': { opacity: 0.5 }, 
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'letter-reveal': {
          '0%': { opacity: 0, transform: 'translateY(100%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-5px)' },
        },
        slideIn: {
          '0%': {
            transform: 'translateX(-100%)', 
            opacity: '0',                   
          },
          '100%': {
            transform: 'translateX(0)',  
            opacity: '1',                   
          },
        },
        'slide-up': {
          '0%': {
            transform: 'translateY(100%)', 
            opacity: '0',                  
          },
          '100%': {
            transform: 'translateY(0)',   
            opacity: '1',                  
          },
        },
        
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 30s linear infinite',
        'pop-up': 'pop-up 1s ease-out',
         marquee: 'marquee 10s linear infinite',
        'bounce-horizontal': 'bounce-horizontal 10s ease-in-out infinite', 
        'text-reveal': 'text-reveal 1s ease-out',
        'letter-reveal': 'letter-reveal 0.1s ease-out forwards',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'slideIn': 'slideIn 10s ease-out',
        'slide-up': 'slide-up 0.5s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};