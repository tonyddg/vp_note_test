# Vuepress 部署笔记

## 前提工作
1. 安装 node.js 18.x 以上的版本 (Windows 上可以直接覆盖安装实现升级)
1. 通过 npm 安装 pnpm, 安装后 pnpm 将取代 npm, npm 将无法使用

## 基本部署
### [安装 Vuepress](https://v2.vuepress.vuejs.org/zh/guide/getting-started.html)
* .gitignore 应手动创建, 若采用脚本则注意将编码改为 utf-8
* 设置完 package.json 后使用以下命令进行开发

```shell
# 用于开发时预览
pnpm docs:dev

# 用于生成静态页面
pnpm docs:build
```

### [基本配置](https://v2.vuepress.vuejs.org/zh/guide/configuration.html)
* 安装后在根目录 / .vuepress 目录下创建配置文件进行配置 vuepress.config.js

### [md-enhance 安装与配置](https://plugin-md-enhance.vuejs.press/zh/)
* 插件安装
```shell
npm i -D vuepress-plugin-md-enhance
```
* [配置 Tex](https://plugin-md-enhance.vuejs.press/zh/guide/tex.html)
```ts
mdEnhancePlugin({
    // 启用 Katex
    katex: true
    })
```
* [配置标记语法](https://plugin-md-enhance.vuejs.press/zh/guide/mark.html)
```ts
mdEnhancePlugin({
    // 开启标记
    mark: true,
}),
```
### [语法高亮插件安装](https://v2.vuepress.vuejs.org/zh/reference/plugin/shiki.html)
注意使用时需要输入正确的代码块类型, 如 c++ 的类型为 cpp, 否则将出错

### 默认主题与插件配置
对于默认主题与默认插件, 可直接使用以下语句引用, 不需要额外安装
```ts
import { defineUserConfig, defaultTheme } from 'vuepress'
```

## GithubPage 部署
### 修改配置
* 将配置文件中 base 属性设置为 "/{仓库名}/"
* 确保 package.json 中有
```json
{
  "scripts": {
    "docs:build": "vuepress build docs"
  }
}
```

### 创建 Github Action 实现自动创建页面
通过 Github Action 实现每次 push 后在云端生成静态页面

#### 本地配置
* 在项目根目录下创建文件 .github/workflows/docs.yaml
* 参考此项目源代码中的 .github/workflows/docs.yaml 创建
    * 必须要有以下配置
    ```yaml
        # 安装依赖
    - name: Install dependencies
        run: pnpm install --frozen-lockfile
    ```
    * 源代码中将 master 作为主分支, 若不为 master 需要手动修改

#### Github 配置
* 将项目上传到 github 上 (可通过 vscode 工具上传)
* 根据此[文章](https://blog.csdn.net/ibigboy/article/details/126402267)设置 Github Action, 如果之前出错则刷新
* 在项目设置中启动 Github Pages, ==设置为 Deploy from a branch==, 对于此项目的 Github Action, 在 gh-pages 分支下的根目录保存静态网页
* 当使用 Github Action 自动生成静态网页后, 如果将 vuepress.config.js 放在根目录下, 则文件夹 docs/.vuepress 可以写入 .gitignore 中 

## 其他插件
* [插件查询](https://github.com/vuepress/awesome-vuepress/blob/main/v2.md#blogging)
* [博客插件](https://plugin-blog2.vuejs.press/zh/)

