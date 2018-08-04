module.exports = {
    serviceWorker: true,
    themeConfig: {
        title: 'Beedle',
        nav: [
            {
                text: 'Home',
                link: '/'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/hankchizljaw/beedle'
            },
            {
                text: 'npm',
                link: 'https://www.npmjs.com/package/beedle'
            }
        ],
        sidebar: [
            {
                title: 'Quick links',
                collapsable: false,
                children: [
                    '/'
                ]
            },
            {
                title: 'Guide',
                collapsable: false,
                children: [
                    '/guide/state.html',
                    '/guide/actions.html',
                    '/guide/mutations.html'
                ]
            },
            {
                title: 'Reference',
                collapsable: false,
                children: [
                    '/reference/store-class.html'
                ]
            }
        ],
        displayAllHeaders: true
    }
};
