# @fighting-design/fighting-theme <a href="https://www.npmjs.com/package/@fighting-design/fighting-theme"><img src="https://badgen.net/npm/v/@fighting-design/fighting-theme" /></a>

中文 | [英文](https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-theme/README.en-US.md)

## 🐳 说明

`Fighting Design` 的主题样式目录

## 🦩 目录说明

```
├── config                组件的一些配置变量
├── src                   每个组件的主样式表存放目录
├── index.scss            样式主入口文件，打包入口文件
├── package.json          package.json
├── README.en-US.md       README.en-US.md
└── README.md             README.md
```

## 🚧 规范说明

- 在 `src` 目录下新建和组件名相同的 `*.scss` 文件，进行开发组件样式表
- 在主入口 `index.scss` 中需要引入你新建的 `*.scss` 文件提供使用
- 样式中禁止出现 `!important`
- 文件名统一使用短横杠连接，不可以出现大写字母
- 在 `src/*` 目录下，是对应的每一个组件的 `*.scss` 文件
- 在 `config/*` 目录下，是组件的一些配置变量文件，组件的配置文件都以 `var-组件名.scss` 进行命名。全局配置文件使用 `const-***.scss` 命名

## 🐿️ 唯一样式

每个组件都会有一个唯一的样式，比如 `f-button`、`f-icon` 等等，为避免样式发生冲突，需要严格约束其内部样式或同级样式对于其它组件的污染。

比如在 `FButton` 组件中，可以通过 `round` 属性可以配置圆角属性，那么伪代码如下：

```html
<button
  :class="[
  'f-button',
  { 'f-button-round': round }
  ]"
>
  按钮组件
</button>
```

因为在组件中都会有一个唯一的 `class`，也就是 `f-button`，那么对于 `f-button__round` 的属性前面，也应该加入 `f-button` 才可以防止样式污染。

反面例子：

```css
.f-button {
  /*  */
}
.f-button__round {
  border-radius: 4px;
}
```

正面例子：

```css
.f-button {
  /*  */
}
.f-button.f-button__round {
  border-radius: 4px;
}
```

## 🦄 引入

可以在全局任意地方使用下面方式引入使用

```ts
import '@fighting-design/fighting-theme'
```
