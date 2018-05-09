module.exports = {
    title: 'BearTeam',
    description: '来一起坐下来谈谈情，聊聊天',
    head: [
        ['link', { rel: 'icon', href: `/img/favicon.ico` }],
    ],
    themeConfig: {
        nav: [
            { text: 'Blog', link: '/blog/' },
            { text: 'GitHub精选', link: '/github/' },
            { text: 'Bear周刊', link: '/weekly/' },
            { text: 'About US', link: '/aboutUS/' },
        ],
        sidebar: [
            {
                title: '博客',
                collapsable: true,
                children: [
                    '/blog/',
                    '/blog/javascript/',
                    '/blog/ued/',
                    '/blog/life/',
                    '/blog/other/',
                ]
            },
            {
                title: 'github精选',
                collapsable: true,
                children: [
                    '/github/'
                ]
            },
            {
                title: 'Bear周刊',
                collapsable: true,
                children: [
                    '/weekly/'
                ]
            },
            ['/aboutUS/', '关于我们']
        ]
    },
    chainWebpack: config => {
        config.module
            .rule('sass')
            .test(/\.sass$/)
            .use('sass-loader')
            .loader('sass-loader')
            .end()
    }
}