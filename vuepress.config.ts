import { defineUserConfig } from 'vuepress'
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',

    theme: hopeTheme({
        // 插件设置
        plugins: {
            mdEnhance:
            {
                // 使用 KaTeX 启用 TeX 支持
                katex: true,
                // 启用标记
                mark: true,
            }
        },
        // 导航栏设置
        navbar: [
            // NavbarItem
            {
                text: 'Home',
                link: '/',
            },
            // NavbarGroup
            {
                text: 'Guide',
                children: ['/guide/test.md', '/guide/tutor.md'],
            },
        ],
        // 页脚设置
        displayFooter: true,
        footer: "powered by <a href='https://theme-hope.vuejs.press/zh/'>vuepress-theme-hope</a>",
        // 其他设置
        // 仓库地址
        repo: 'https://gitlab.com/foo/bar',
        //全屏按钮
        fullscreen: true,
        //打印按钮
        print: true,

    })
})

