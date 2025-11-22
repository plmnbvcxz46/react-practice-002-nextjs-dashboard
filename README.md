#### 第一章

具有新特性，需要用 25 来进行安装，但是因为引入了某个 item 特性，需要切换到 20 才能运行，使用 nvm。

```bash
nvm install 25
nvm install 20
nvm use 25

npm install -g pnpm
npx create-next-app@latest nextjs-dashboard --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example" --use-pnpm

nvm use 20
pnpm dev

```

---

#### 第二章

两种引入 css 文件的方式，一个是 taliwindcss，一个是 css 模块。

```JSX
<div className = "" > </div>
```

```JSX
import styles from '*/';

<div className = {style.shape}> </div>
```

clsx 选择性使用 css

```JSX
<div className = {clsx(
	'text-black',
	{
		'bg-red':status === "red",
		'bg-blue':status === "blue",

	},
)}
```

除了我们讨论的方法外，您还可以使用以下方式来为您的 Next.js 应用添加样式：

- 一种 Sass，允许你导入  `.css`  和  `.scss`  文件。
- 像 `styled-jsx` 、`styled-components` 和 `emotion` 这样的 CSS-in-JS 库。

查阅  [CSS 文档](https://nextjs.org/docs/app/building-your-application/styling)获取更多信息。

---

#### 第三章 图片与文字优化

[累积布局偏移](https://vercel.com/blog/how-core-web-vitals-affect-seo)：主要是由浏览器使用默认字体加载后，再替换成自定义字体产生的布局偏移问题。使用 next/font 模块后会自动优化，和图片等静态资源一起加载，就不会发生这个问题了。

```ts
//font.ts
import { Inter } from 'next/font';

export const inter = Inter({
	weight:['500', '700'],
	subsets: ['latin'],
	//使用字体的子集来导出后使用
})


//page.tsx
import { inter } from "/font.ts"

<p className = `&{ inter.className } antialiased` ></ p>
//antialiased主要是用来优化一些显示的
```

图片优化，主要是使用 Image 组件来使用

```Tsx
<Image
src = '/a.png'
width ={200}
height = {400}
className = "hidden md:block"//md表示中等窗口大小下，通常是电脑
alt = 'a pic'
```
