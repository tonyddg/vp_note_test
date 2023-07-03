# 测试

## Markdown Test
### Paragraph
#### method A
> 仅有一个回车无法分段

Paragraph1
Paragraph2

#### method B
> 在段末使用两个空格实现小分段

Paragraph1  
Paragraph2

#### method C
> 在段末使用两个回车实现大分段

Paragraph1

Paragraph2

### Marks
1. ==Marks==
1. *Marks*
1. **Marks**
1. ***Marks***
1. <kbd>Marks</kbd>

### Links
#### title 1

<div id="test-div"></div>

Text consisting of jumbled fragments of Latin words, used as a placeholder in designing the layout of a document.

#### 标题
Text consisting of <span id="test-span">jumbled</span> fragments of Latin words, used as a placeholder in designing the layout of a document.

#### nav
1. 直接引用标题 (对于标题中的空格使用 - 代替, 其中大写字母需要改为小写, 以标签的形式允许跨文件连接)
    1. [to title 1](#title-1)
    1. [to 标题](#标题)
    1. [to links](#links)
    1. [Github Page 部署](./tutor.md#githubpage-部署)
1. 自定义 HTML (存在问题, 不推荐)
    1. [to div](#test-div)
    1. [to span](#test-span)

## Code test

### High Light
> 对于 c++, 需要使用 cpp 作为标记, 不可使用 c++
> 通过 {a,b-c} 实现单行 / 多行代码高亮, 中间不可有空格

```cpp{1,5-6}
#include "stdio.h"

int main()
{
    print("Hello World")
    return 0;
}
```

### Codetabs
::: code-tabs#shell

@tab pnpm

```bash
pnpm add -D vuepress-theme-hope
```

@tab yarn

```bash
yarn add -D vuepress-theme-hope
```

@tab:active npm

```bash
npm i -D vuepress-theme-hope
```

:::

### Code in list
> 无法解决, 列表中不可使用代码块

1. 
```php
echo "Hello World"
```

1. 
```ts
console.log("Hello World")
```

## Katex Test

### Test
$$\mathscr{F}^{-1}[1]=\frac{1}{2\pi}\int_{-\infty}^{\infty}e^{jt\omega}d\omega=\delta(t)$$

### Paragraph
#### method A
> 正确范例

当 $A$ 和 $B$ 至少一个发生, 记为 
$$A\cup B$$
当A, B互斥时, 也可记为
$$A+B$$

#### method B
> Katex 块不能与文字在同一行内

当 $A$ 和 $B$ 至少一个发生, 记为 $$A\cup B$$ 当A, B互斥时, 也可记为 $$A+B$$

### List
#### method A
> 正确范例

1. $$M=D=\begin{bmatrix}a_{11}\\&a_{22}\\&&\ddots\\&&&a_{nn}\end{bmatrix}$$
1. $$A=D-L-U$$
1. $$Y_n=\frac{\sum_{i=1}^{n}X_i-E(\sum_{i=1}^{n}X_i)}{\sqrt{D(\sum_{i=1}^{n}X_i)}}=\frac{\sum_{i=1}^{n}X_i-n\mu}{\sqrt{n}\sigma}$$
1. $$\begin{split}Ax&=b\\Dx&=(L+U)x+b\\x&=D^{-1}(L+U)x+D^{-1}b\end{split}$$

#### method B
> Katex 内不可有回车

1. $$M=D=\begin{bmatrix}a_{11}
\\&a_{22}
\\&&\ddots
\\&&&a_{nn}\end{bmatrix}$$
1. $$A=D-L-U$$
1. $$Y_n=\frac{\sum_{i=1}^{n}X_i-E(\sum_{i=1}^{n}X_i)}{\sqrt{D(\sum_{i=1}^{n}X_i)}}=\frac{\sum_{i=1}^{n}X_i-n\mu}{\sqrt{n}\sigma}$$
1. $$\begin{split}Ax&=b
\\Dx&=(L+U)x+b
\\x&=D^{-1}(L+U)x+D^{-1}b\end{split}$$

#### method C
> 序列需要与 Katex 块在同一行内

1. 
$$M=D=\begin{bmatrix}a_{11}\\&a_{22}\\&&\ddots\\&&&a_{nn}\end{bmatrix}$$
1. 
$$A=D-L-U$$
1. 
$$Y_n=\frac{\sum_{i=1}^{n}X_i-E(\sum_{i=1}^{n}X_i)}{\sqrt{D(\sum_{i=1}^{n}X_i)}}=\frac{\sum_{i=1}^{n}X_i-n\mu}{\sqrt{n}\sigma}$$
1. $$\begin{split}Ax&=b\\Dx&=(L+U)x+b\\x&=D^{-1}(L+U)x+D^{-1}b\end{split}$$

#### method D
> 无法解决 段落与 Katex 块在序列中无法同时出现

1. some words
$$M=D=\begin{bmatrix}a_{11}\\&a_{22}\\&&\ddots\\&&&a_{nn}\end{bmatrix}$$
1. some words $$A=D-L-U$$
1. $$Y_n=\frac{\sum_{i=1}^{n}X_i-E(\sum_{i=1}^{n}X_i)}{\sqrt{D(\sum_{i=1}^{n}X_i)}}=\frac{\sum_{i=1}^{n}X_i-n\mu}{\sqrt{n}\sigma}$$ some words

### Table
> 支持表格内的文字级 Katex
> 不支持表格占位符

|A|this is $B=y+c$|empty|
|--|--|--|
|$$C+D$$|D|
|E|F|H|
|G|^|I|

### Aligns
split 
$$\begin{split}Ax&=b\\Dx&=(L+U)x+b\\x&=D^{-1}(L+U)x+D^{-1}b\end{split}$$

align
$$\begin{align}Ax&=b\\Dx&=(L+U)x+b\\x&=D^{-1}(L+U)x+D^{-1}b\end{align}$$

aligned
$$\begin{aligned}Ax&=b\\Dx&=(L+U)x+b\\x&=D^{-1}(L+U)x+D^{-1}b\end{aligned}$$

gathered
$$\begin{gathered}Ax&=b\\Dx&=(L+U)x+b\\x&=D^{-1}(L+U)x+D^{-1}b\end{gathered}$$

gather 
$$\begin{gather}Ax&=b\\Dx&=(L+U)x+b\\x&=D^{-1}(L+U)x+D^{-1}b\end{gather}$$

### Other
> 对于中文需要使用 /\text{} 包含

$$Y_n\mathop{\sim}\limits^{\text{近似}}N(0,1)$$