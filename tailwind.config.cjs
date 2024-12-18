require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

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
            letterSpacing: {
                custom: '0.3em',
              },
            backgroundImage: {
                'nav-link-gradient':
                    'linear-gradient(#000 0 0, var(--accent-purple) 0 0)',
                'nav-gradient':
                    'linear-gradient(0.50turn, #262626AA, #1A1A1AAA)',
                'submit-gradient':
                    'linear-gradient(0.25turn, #C4ADEE, #00C79C)',
                'y-grey-gradient': 'linear-gradient(#1A1A1A, #262626)',
                'x-grey-gradient':
                    'linear-gradient(0.50turn, #262626, #1A1A1A)',
                'border-gradient':
                    'linear-gradient(0.25turn, #C4ADEE 0%, #00C79C 100%)',
                'border-gradient-reverse':
                    'linear-gradient(0.25turn, #00C79C 0%, #C4ADEE 100%)',
                'mobile-frame': "url('./assets/mobile-frame.png')",
                'ring-purple-gradient':
                    'linear-gradient(0.25turn, #262626  0%, var(--accent-purple) 50%)',
                'ring-green-gradient':
                    'linear-gradient(0.5turn, #262626  0%, var(--primary-green) 40%)',
            },
            backgroundSize: {
                'nav-size': '0 2px',
                'nav-size-hover': '100% 2px',
            },
            transitionDuration: {
                1500: '1500ms',
            },
            fontFamily: {
                bodycopy: ['Lato-light', 'sans-serif'], 
                subheading: ['Lato-bold', 'sans-serif'], 
                title: ['Lato-bold', 'sans-serif'], 
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
                            secondary: 'var(--primary-white)',
                        },
                    },
                },
                textShadow: {
                    glitch:
                        '' +
                        '0.05em 0 0 var(--tw-shadow-color-01), ' +
                        '-0.025em -0.05em 0 var(--tw-shadow-color-02), ' +
                        '0.025em 0.05em 0 var(--tw-shadow-color-03)',
                },
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
                rotate: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                'rotate-translate': {
                    '0%': { transform: 'rotate(0deg)  scale(1.2)' },
                    '50%': { transform: 'rotate(180deg) scale(0.7)' },
                    '100%': { transform: 'rotate(360deg) scale(1.2)' },
                },
                orbit: {
                    '0%': {
                        transform:
                            'rotate(135deg) translateX(85%)  rotate(0deg)',
                    },
                    '100%': {
                        transform:
                            'rotate(855deg) translateX(85%)  rotate(1080deg)',
                    },
                },
                'glitch-text': {
                    '0%': {
                        textShadow:
                            '0.05em 0 0 var(--tw-shadow-color-01), ' +
                            '-0.025em -0.05em 0 var(--tw-shadow-color-02), ' +
                            '0.025em 0.05em 0 var(--tw-shadow-color-03)',
                    },
                    '14%': {
                        textShadow:
                            '0.05em 0 0 var(--tw-shadow-color-01), ' +
                            '-0.025em -0.05em 0 var(--tw-shadow-color-02), ' +
                            '0.025em 0.05em 0 var(--tw-shadow-color-03)',
                    },
                    '15%': {
                        textShadow:
                            '-0.05em -0.025em 0 var(--tw-shadow-color-01), ' +
                            '0.025em -0.025em 0 var(--tw-shadow-color-02), ' +
                            '-0.05em -0.05em 0 var(--tw-shadow-color-03)',
                    },
                    '49%': {
                        textShadow:
                            '-0.05em -0.025em 0 var(--tw-shadow-color-01), ' +
                            '0.025em -0.025em 0 var(--tw-shadow-color-02), ' +
                            '-0.05em -0.05em 0 var(--tw-shadow-color-03)',
                        opacity: 1
                    },
                    '50%': {
                        textShadow:
                            '0.025em 0.05em 0 var(--tw-shadow-color-01), ' +
                            '0.05em 0 0 var(--tw-shadow-color-02), ' +
                            '0 -0.05em 0 var(--tw-shadow-color-03)',
                        opacity: 0
                    },
                    '59%': {
                        textShadow:
                            '0.025em 0.05em 0 var(--tw-shadow-color-01), ' +
                            '0.05em 0 0 var(--tw-shadow-color-02), ' +
                            '0 -0.05em 0 var(--tw-shadow-color-03)',
                        opacity: 0
                    },
                    '60%': {
                        textShadow:
                            '0.025em 0.05em 0 var(--tw-shadow-color-01), ' +
                            '0.05em 0 0 var(--tw-shadow-color-02), ' +
                            '0 -0.05em 0 var(--tw-shadow-color-03)',
                        opacity: 1
                    },
                    '99%': {
                        textShadow:
                            '0.025em 0.05em 0 var(--tw-shadow-color-01), ' +
                            '0.05em 0 0 var(--tw-shadow-color-02), ' +
                            '0 -0.05em 0 var(--tw-shadow-color-03)',
                    },
                    '100%': {
                        textShadow: 'unset'
                    },
                },
                'glitch-text-leave': {
                    '0%': {
                        textShadow:
                            '0.05em 0 0 var(--tw-shadow-color-01), ' +
                            '-0.025em -0.05em 0 var(--tw-shadow-color-02), ' +
                            '0.025em 0.05em 0 var(--tw-shadow-color-03)',
                    },
                    '14%': {
                        textShadow:
                            '0.05em 0 0 var(--tw-shadow-color-01), ' +
                            '-0.025em -0.05em 0 var(--tw-shadow-color-02), ' +
                            '0.025em 0.05em 0 var(--tw-shadow-color-03)',
                    },
                    '15%': {
                        textShadow:
                            '-0.05em -0.025em 0 var(--tw-shadow-color-01), ' +
                            '0.025em -0.025em 0 var(--tw-shadow-color-02), ' +
                            '-0.05em -0.05em 0 var(--tw-shadow-color-03)',
                    },
                    '49%': {
                        textShadow:
                            '-0.05em -0.025em 0 var(--tw-shadow-color-01), ' +
                            '0.025em -0.025em 0 var(--tw-shadow-color-02), ' +
                            '-0.05em -0.05em 0 var(--tw-shadow-color-03)',
                        opacity: 1
                    },
                    '50%': {
                        textShadow:
                            '0.025em 0.05em 0 var(--tw-shadow-color-01), ' +
                            '0.05em 0 0 var(--tw-shadow-color-02), ' +
                            '0 -0.05em 0 var(--tw-shadow-color-03)',
                        opacity: 0
                    },
                    '55%': {
                        textShadow:
                            '0.025em 0.05em 0 var(--tw-shadow-color-01), ' +
                            '0.05em 0 0 var(--tw-shadow-color-02), ' +
                            '0 -0.05em 0 var(--tw-shadow-color-03)',
                        opacity: 1
                    },
                    '99%': {
                        textShadow:
                            '0.025em 0.05em 0 var(--tw-shadow-color-01), ' +
                            '0.05em 0 0 var(--tw-shadow-color-02), ' +
                            '0 -0.05em 0 var(--tw-shadow-color-03)',
                    },
                    '100%': {
                        textShadow:
                            '-0.025em 0 0 var(--tw-shadow-color-01), ' +
                            '-0.025em -0.025em 0 var(--tw-shadow-color-02), ' +
                            '-0.025em -0.05em 0 var(--tw-shadow-color-03)',
                        opacity: 0
                    },
                },
            },
            animation: {
                'infinite-scroll': 'infinite-scroll 30s linear infinite',
                'pop-up': 'pop-up 1s ease-out',
                marquee: 'marquee 10s linear infinite',
                'bounce-horizontal':
                    'bounce-horizontal 10s ease-in-out infinite',
                'text-reveal': 'text-reveal 1s ease-out',
                'letter-reveal': 'letter-reveal 0.1s ease-out forwards',
                wiggle: 'wiggle 1s ease-in-out infinite',
                slideIn: 'slideIn 10s ease-out',
                'slide-up': 'slide-up 0.5s ease-out forwards',
                rotate: 'rotate 10s linear infinite',
                'rotate-slow': 'rotate-translate 150s linear infinite',
                'rotate-fast': 'rotate-translate 50s linear infinite',
                orbit: 'orbit ease-in-out 45s infinite',
                'glitch-text-00': 'glitch-text-leave 300ms 4 forwards',
                'glitch-text-01': 'glitch-text 600ms 3 forwards',
                'glitch-text-02': 'glitch-text-leave 400ms 5 forwards',
            },
        },
    },
    plugins: [
        require('tailwindcss-animate'),
        require('@tailwindcss/typography'),
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'text-shadow': (value) => ({
                        textShadow: value,
                    }),
                },
                { values: theme('textShadow') },
            );
        }),
    ],
};
