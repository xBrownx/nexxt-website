export const paths = {
    root: {
        path: '',
        getHref: () => '/',
    },
    home: {
        path: '/',
        getHref: () => '/',
    },
    services: {
        path: 'services',
        getHref: () => '/services',
    },
    ourWork: {
        path: 'our-work',
        getHref: () => '/our-work',
    },
    aboutUs: {
        path: 'about-us',
        getHref: () => '/about-us',
    },
    enquire: {
        path: 'enquire',
        getHref: () => '/enquire',
    },
} as const;
