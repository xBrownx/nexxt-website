require('tailwindcss/defaultTheme');
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
        'submit-gradient': 'linear-gradient(0.25turn, #C4ADEE, #00C79C)',
        'y-grey-gradient': 'linear-gradient(#000000, #3A3D40)',
        'x-grey-gradient': 'linear-gradient(0.25turn, #3A3D40, #262626)',
        'border-gradient': 'linear-gradient(0.25turn, #C4ADEE 0%, #00C79C 100%)',
        'border-gradient-reverse': 'linear-gradient(0.25turn, #00C79C 0%, #C4ADEE 100%)',
        'mobile-frame': "url('./assets/mobile-frame.png')",
      },
      backgroundSize: {
        'nav-size': '0 2px',
        'nav-size-hover': '100% 2px',
      },
      transitionDuration: {
        '1500': '1500ms'
      },
      fontFamily: {
        title: ['Evermore', 'sans-serif'],
        lato: ['Lato'],
        arial: ['Arial', 'sans-serif'],
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