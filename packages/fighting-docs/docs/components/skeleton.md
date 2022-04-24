# Skeleton 骨架

## 基本使用

骨架的基本使用

<tyh-skeleton />
<tyh-skeleton />
<tyh-skeleton />
    
```html
<tyh-skeleton />
<tyh-skeleton />
<tyh-skeleton />
```

## 圆角的

round 属性可以配置圆角

<tyh-skeleton round />
<tyh-skeleton round />
<tyh-skeleton round />

```html
<tyh-skeleton round />
<tyh-skeleton round />
<tyh-skeleton round />
```

## 自定义宽高

width 属性可以配置宽度

height 属性可以配置高度

<tyh-skeleton width="75%" />
<tyh-skeleton width="150px" />
<tyh-skeleton width="100px" height="100px" />

```html
<tyh-skeleton width="75%" />
<tyh-skeleton width="150px" />
<tyh-skeleton width="100px" height="100px" />
```

## 启用动画

animation 属性可以配置显示动画

<tyh-skeleton animation />
<tyh-skeleton animation />
<tyh-skeleton animation />

```html
<tyh-skeleton animation />
<tyh-skeleton animation />
<tyh-skeleton animation />
```

## Attributes

| 参数      | 说明         | 类型    | 可选值 | 默认值 |
| --------- | ------------ | ------- | ------ | ------ |
| round     | 圆角         | boolean | ——     | false  |
| width     | 宽度         | string  | ——     | 100%   |
| height    | 高度         | string  | ——     | 15px   |
| animation | 是否启用动画 | boolean | ——     | false  |
