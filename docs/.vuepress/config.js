module.exports = {
    head: [
        ['link', { rel: 'icon', href: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/174183/beedle-favicon.png' }]
    ],
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
