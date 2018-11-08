module.exports = {
    title: 'BearTeam',
    description: '来一起坐下来谈谈情，聊聊天',
    head: [
        ['link', { rel: 'icon', href: `/img/favicon.ico` }],
    ],
    themeConfig: {
        nav: [
            { text: 'Blog', link: '/blog/' },
            { text: '华图组件库', link: '/components/' },
            { text: '华图方法库', link: '/functions/' },
            { text: 'GitHub精选', link: '/github/' },
            { text: 'Bear周刊', link: '/weekly/' },
            { text: 'About US', link: '/aboutUS/' },
        ],
        sidebar:{
            '/components/': [
                '',
                'ApproveFlow',
                'BackTop',
                'Breadcrumb',
                'Calendar',
                'CircleProgress',
                'ContainerTitle',
                'Empty',
                'FileUpload',
                'hamburger',
                'loading-bar',
                'node',
                'OperationLog',
                'OrganizationFilter',
                'Pager',
                'Region',
                'RoleFilter',
                'RoleList',
                'SideBar',
                'TopBar',
                'UserFilter'
            ],
            '/functions/': [
                '',
                'adaptStageSubject',
                'calcTableSpan',
                'checkPasswordStrength',
                'compressImage',
                'decimalLength',
                'deepClone',
                'divide',
                'eventBus',
                'float2Int',
                'formatDate',
                'formRequest',
                'getMonthEnds',
                'getPageDto',
                'getUrlSearch',
                'getWeekNum',
                'handleEndTime',
                'handleStartTime',
                'indexBy',
                'isRepeat',
                'minus',
                'multiply',
                'numberToChinese',
                'params',
                'plus',
                'reverseUnitMoney',
                'timeInit',
                'toast'
            ],
            '/': [
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
        } 
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