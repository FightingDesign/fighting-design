# @fighting-design/fighting-theme <a href="https://www.npmjs.com/package/@fighting-design/fighting-theme"><img src="https://badgen.net/npm/v/@fighting-design/fighting-theme" /></a>

English | [Chinese](https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-theme/README.md)

## 🐳 Introduction

Theme style directory of `fighting-design`

## 🦩 Catalog Description

```
├── config                Some style definitions common to components, such as type, etc
├── src                   Main style sheet storage directory of each component
├── index.scss            The main style entry file is also a package entry file
├── package.json          package.json
├── README.en-US.md       README.en-US.md
└── README.md             README.md
```

## 🚧 Rule

- Create a new `*.scss` with the same component name in the `src` directory file to develop component style sheets
- At the main entrance `index.scss` You need to import your new `*.scss` files are provided for use
- Is not allowed in the style `!important`
- The file names are connected by a short horizontal bar, and no uppercase letters are allowed
- In the `src/*` directory, it is the `*.scss` file
- In the `config/*` directory, there are some configuration variable files of components. The configuration files of components are all named `var-component-name.scss`. The global configuration file uses `const-***.scss` Naming

## 🐿️ Unique Style

Each component will have a unique style, such as `f-button`,`f-icon`, etc. In order to avoid style conflicts, you need to strictly restrict the pollution of its internal style or peer style to other components.

For example, in the `FButton` component, the round corner attribute can be configured through the `round` attribute. The pseudo code is as follows:

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

Because there will be a unique `class` in a component, that is,`f-button`, then `f-button` should also be added in front of the `f-button__round` attribute to prevent style pollution.

Negative example:

```css
.f-button {
  /*  */
}
.f-button__round {
  border-radius: 4px;
}
```

Positive examples:

```css
.f-button {
  /*  */
}
.f-button.f-button__round {
  border-radius: 4px;
}
```

## 🦄 Import

The following methods can be used anywhere in the world

```ts
import '@fighting-design/fighting-theme'
```
