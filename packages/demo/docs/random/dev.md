# Development

![computer](~@assets/computer.jpeg)

In your `package.json` file you should have these two scripts

```json
{
  "scripts": {
    "develop": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```

To run your project locally you can simply run:

```bash
npm run develop
# or yarn develop
```

To prepare a production build you can do:

```bash
npm run build
# or yarn build
```
