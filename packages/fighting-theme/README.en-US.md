# @fighting-design/fighting-theme

English | [Chinese](https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-theme/README.md)

## Introduction

Theme style directory of `fighting-design`

## 目录说明

```
├── config                Some style definitions common to components, such as type, etc
├── dist                  Packaged folder
├── font                  Font folder
├── src                   Main style sheet storage directory of each component
├── index.scss            The main style entry file is also a package entry file
├── package.json          package.json
├── README.en-US.md       README.en-US.md
└──  README.md            README.md
```

## Specification

Create a new ` *.scss` With the same component name in the `src` directory SCSS file to write component style sheets

At the main `index.scss` entrance You need to import your new `*.scss` files are available for use

```scss
@use './src/xxx.scss';
```

## Import

The following methods can be used anywhere in the world

```ts
import '@fighting-design/fighting-theme'
```
