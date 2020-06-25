# A simple demo of the `vuepress-theme-book`

<div style="text-align: center; margin: 4rem auto;">
  <img src="/logo.png" alt="book emoji"/>
</div>

This demo showcases a [VuePress](https://vuepress.vuejs.org) theme inspired by [Gitbook](https://docs.gitbook.com/).

I really love their clean and minimalist style, so I decided to do a theme for VuePress.

It is **not** 100% identical to a Gitbook page, some choices are made to respect VuePress limitations.

It is based on the [@vuepress/theme-default](https://vuepress.vuejs.org/theme/default-theme-config.html) and extends it.  
So you'll get all the great features it already provides! :tada:

## Installation

You can add `vue-theme-book` to your current Vuepress project by running:

```bash
npm install --save vuepress-theme-book
# or yarn add vuepress-theme-book
```

And then, in your `.vuepress/config.js` file simply add:

```js
module.exports = {
  theme: "book",
  ...
}
```
