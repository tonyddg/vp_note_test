# Vuepress-hope 主题部署
## 安装 Vuepress-hope
### 基本部署
参考 [Vuepress 部署笔记](./tutor.md)完成至基本配置, 不安装插件

### 安装主题
直接安装 Vuepress-hope 主题, 不采用官方方式

```shell
pnpm add -D vuepress-theme-hope
```

## 主题配置
### 插件配置
通过以下方式设置主题捆绑插件, 不需要额外安装
```ts
hopeTheme({
    plugins: {
        mdEnhance:{
            // 使用 KaTeX 启用 TeX 支持
            katex: true,
            // 启用标记
            mark: true,
        }
    }
})
```

### 布局配置
* [导航栏配置](https://theme-hope.vuejs.press/zh/guide/layout/navbar.html)
* [侧边栏](https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html) 通常保持默认即可
* [页脚配置](https://theme-hope.vuejs.press/zh/guide/layout/footer.html)
    * 配置 footer 属性用于设置全局的页脚, 传入 string 类型的 html 代码
    * 配置 displayFooter: true 使所有页面开启页脚
* [页页配置](https://theme-hope.vuejs.press/zh/guide/layout/page.html)
    * 通过配置 Frontmatter  生效 (md 文件前通过 --- 包裹的 yaml 配置)
    * 对于主页的配置可[见此](https://theme-hope.vuejs.press/zh/guide/layout/home.html)
    * 对于一般页面的配置可[见此](https://theme-hope.vuejs.press/zh/guide/feature/page-info.html), 可添加文章的标签, 分类等信息

### 主题特殊功能
* [目录页面](https://theme-hope.vuejs.press/zh/guide/layout/catalog.html) 访问文件夹时将自动生成一个目录页面
* [博客功能](https://theme-hope.vuejs.press/zh/guide/blog/intro.html)
* [编辑此页](https://theme-hope.vuejs.press/zh/guide/feature/meta.html#%E7%BC%96%E8%BE%91%E6%AD%A4%E9%A1%B5%E9%93%BE%E6%8E%A5) 通常需要修改 docsDir, docsBranch, 保证功能正常

## Github Page 部署
见 [Github Page 部署](./tutor.md#githubpage-部署)
