module.exports = {
    title: 'BearTeam',
    description: 'JS/PM/UED/LIFE',
    themeConfig: {
        nav: [
            { text: 'Blog', link: '/blog/' },
            { text: 'GitHub精选', link: '/github/' },
            { text: 'Bear周刊', link: '/weekly/' },
            { text: 'About US', link: '/weekly/' },
        ],
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