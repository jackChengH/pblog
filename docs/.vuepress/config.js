const pluginConf = require('../../config/pluginConfig.js');
const navConf = require('../../config/navConfig.js');

module.exports = {
    // github 仓库名
    base: '/pblog/',
    theme: 'reco',
    title: '个人主页',
    description: '一名java爱好者的博客',
    head: [
        ['link', {rel: 'icon', href: '/img/touxiang.jpg'}],
    ],
    port: 80,
    markdown: {
        lineNumbers: true,  // 代码显示行号
    },
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    plugins: pluginConf,
    themeConfig: {
        lastUpdated: '上次更新',
        //顶部导航栏
        nav: navConf,
        sidebarDepth: 0, // 侧边栏显示深度，默认为1，即显示一级标题
    }
}
