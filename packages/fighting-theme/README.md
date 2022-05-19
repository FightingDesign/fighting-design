# @fighting-design/fighting-theme

## 说明

`fighting-design` 的主题样式目录

## 目录说明

```
├── dist                  打包的文件夹
├── font                  字体文件夹
├── global                组件公用的一些样式定义，比如 type 等
├── src                   每个组件的主样式表存放目录
├── index.scss            样式主入口文件，也是打包入口文件
├── package.json          package.json
├── README.md             README.md
├── vite.config.ts        vite 打包配置文件
```

## 规范说明

在 `src` 目录下新建和组件名相同的 `*.scss` 文件，进行开组件样式表

在主入口 `index.scss` 中需要引入你新建的 `*.scss` 文件提供使用

```scss
@use './src/xxx.scss';
```

## 引入

可以在全局任意地方使用下面方式引入使用

```ts
import '@fighting-design/fighting-theme'
```
