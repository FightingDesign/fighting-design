# Button 按钮

## 基本使用

按钮的基础用法

type 属性配置不同的按钮类型

<tyh-button>默认按钮</tyh-button>
<tyh-button type="primary">主要按钮</tyh-button>
<tyh-button type="success">成功按钮</tyh-button>
<tyh-button type="danger">危险按钮</tyh-button>
<tyh-button type="warning">警告按钮</tyh-button>

```html
<tyh-button>默认按钮</tyh-button>
<tyh-button type="primary">主要按钮</tyh-button>
<tyh-button type="success">成功按钮</tyh-button>
<tyh-button type="danger">危险按钮</tyh-button>
<tyh-button type="warning">警告按钮</tyh-button>
```

## 简约按钮

simple 属性可以配置简约按钮

<tyh-button simple>默认按钮</tyh-button>
<tyh-button simple type="primary">主要按钮</tyh-button>
<tyh-button simple type="success">成功按钮</tyh-button>
<tyh-button simple type="danger">危险按钮</tyh-button>
<tyh-button simple type="warning">警告按钮</tyh-button>

```html
<tyh-button simple>默认按钮</tyh-button>
<tyh-button simple type="primary">主要按钮</tyh-button>
<tyh-button simple type="success">成功按钮</tyh-button>
<tyh-button simple type="danger">危险按钮</tyh-button>
<tyh-button simple type="warning">警告按钮</tyh-button>
```

## 图标按钮

icon 属性可以配置图标按钮

<tyh-button icon="tyh-ui-setting-filling">设置</tyh-button>
<tyh-button icon="tyh-ui-tyhui" type="primary">tyh-ui</tyh-button>
<tyh-button icon="tyh-ui-fabulous" type="success"></tyh-button>
<tyh-button icon="tyh-ui-discount" type="danger"></tyh-button>
<tyh-button icon="tyh-ui-chart-bar" type="warning"></tyh-button>
<br />
<tyh-button simple icon="tyh-ui-setting-filling">设置</tyh-button>
<tyh-button simple icon="tyh-ui-tyhui" type="primary">tyh-ui</tyh-button>
<tyh-button simple icon="tyh-ui-fabulous" type="success"></tyh-button>
<tyh-button simple icon="tyh-ui-discount" type="danger"></tyh-button>
<tyh-button simple icon="tyh-ui-chart-bar" type="warning"></tyh-button>

```html
<tyh-button icon="tyh-ui-setting-filling">设置</tyh-button>
<tyh-button icon="tyh-ui-tyhui" type="primary">tyh-ui</tyh-button>
<tyh-button icon="tyh-ui-fabulous" type="success"></tyh-button>
<tyh-button icon="tyh-ui-discount" type="danger"></tyh-button>
<tyh-button icon="tyh-ui-chart-bar" type="warning"></tyh-button>

<tyh-button simple icon="tyh-ui-setting-filling">设置</tyh-button>
<tyh-button simple icon="tyh-ui-tyhui" type="primary">tyh-ui</tyh-button>
<tyh-button simple icon="tyh-ui-fabulous" type="success"></tyh-button>
<tyh-button simple icon="tyh-ui-discount" type="danger"></tyh-button>
<tyh-button simple icon="tyh-ui-chart-bar" type="warning"></tyh-button>
```

## 禁用状态

disabled 属性可以配置禁用状态

<tyh-button disabled>默认按钮</tyh-button>
<tyh-button disabled type="primary">主要按钮</tyh-button>
<tyh-button disabled type="success">成功按钮</tyh-button>
<tyh-button disabled type="danger">危险按钮</tyh-button>
<tyh-button disabled type="warning">警告按钮</tyh-button>
<br />
<tyh-button simple disabled>默认按钮</tyh-button>
<tyh-button simple disabled type="primary">主要按钮</tyh-button>
<tyh-button simple disabled type="success">成功按钮</tyh-button>
<tyh-button simple disabled type="danger">危险按钮</tyh-button>
<tyh-button simple disabled type="warning">警告按钮</tyh-button>

```html
<tyh-button disabled>默认按钮</tyh-button>
<tyh-button disabled type="primary">主要按钮</tyh-button>
<tyh-button disabled type="success">成功按钮</tyh-button>
<tyh-button disabled type="danger">危险按钮</tyh-button>
<tyh-button disabled type="warning">警告按钮</tyh-button>

<tyh-button simple disabled>默认按钮</tyh-button>
<tyh-button simple disabled type="primary">主要按钮</tyh-button>
<tyh-button simple disabled type="success">成功按钮</tyh-button>
<tyh-button simple disabled type="danger">危险按钮</tyh-button>
<tyh-button simple disabled type="warning">警告按钮</tyh-button>
```

## 圆角按钮

round 属性可以配置圆角按钮

square 属性可以配置方形按钮

<tyh-button round>默认按钮</tyh-button>
<tyh-button round type="primary">主要按钮</tyh-button>
<tyh-button round type="success">成功按钮</tyh-button>
<tyh-button round type="danger">危险按钮</tyh-button>
<tyh-button round type="warning">警告按钮</tyh-button>
<br />
<tyh-button square>默认按钮</tyh-button>
<tyh-button square type="primary">主要按钮</tyh-button>
<tyh-button square type="success">成功按钮</tyh-button>
<tyh-button square type="danger">危险按钮</tyh-button>
<tyh-button square type="warning">警告按钮</tyh-button>

```html
<tyh-button round>默认按钮</tyh-button>
<tyh-button round type="primary">主要按钮</tyh-button>
<tyh-button round type="success">成功按钮</tyh-button>
<tyh-button round type="danger">危险按钮</tyh-button>
<tyh-button round type="warning">警告按钮</tyh-button>

<tyh-button square>默认按钮</tyh-button>
<tyh-button square type="primary">主要按钮</tyh-button>
<tyh-button square type="success">成功按钮</tyh-button>
<tyh-button square type="danger">危险按钮</tyh-button>
<tyh-button square type="warning">警告按钮</tyh-button>
```

## 按钮组

使用 `tyh-button-group` 标签来嵌套按钮

<tyh-button-group>
<tyh-button type="primary">上一页</tyh-button>
<tyh-button type="primary">下一页</tyh-button>
</tyh-button-group>

<tyh-button-group>
  <tyh-button simple type="primary">左</tyh-button>
  <tyh-button simple type="success">右</tyh-button>
</tyh-button-group>
<br />
<tyh-button-group>
  <tyh-button icon="tyh-ui-arrow-left-filling" type="primary"></tyh-button>
  <tyh-button icon="tyh-ui-arrow-right-filling" type="success"></tyh-button>
</tyh-button-group>

<tyh-button-group>
  <tyh-button type="primary">左</tyh-button>
  <tyh-button type="success">中</tyh-button>
  <tyh-button type="primary">右</tyh-button>
</tyh-button-group>

```html
<tyh-button-group>
  <tyh-button type="primary">上一页</tyh-button>
  <tyh-button type="primary">下一页</tyh-button>
</tyh-button-group>

<tyh-button-group>
  <tyh-button simple type="primary">左</tyh-button>
  <tyh-button simple type="success">右</tyh-button>
</tyh-button-group>

<tyh-button-group>
  <tyh-button icon="tyh-ui-arrow-left-filling" type="primary"></tyh-button>
  <tyh-button icon="tyh-ui-arrow-right-filling" type="success"></tyh-button>
</tyh-button-group>

<tyh-button-group>
  <tyh-button type="primary">左</tyh-button>
  <tyh-button type="success">中</tyh-button>
  <tyh-button type="primary">右</tyh-button>
</tyh-button-group>
```

## 不同尺寸

size 属性可以配置按钮尺寸

<tyh-button size="mini" type="primary">小型按钮</tyh-button>
<tyh-button size="small" type="primary">中等按钮</tyh-button>
<tyh-button type="primary">正常大小</tyh-button>
<tyh-button size="large" type="primary">大号按钮</tyh-button>
<br />
<tyh-button simple size="mini" type="primary">小型按钮</tyh-button>
<tyh-button simple size="small" type="primary">中等按钮</tyh-button>
<tyh-button simple type="primary">正常大小</tyh-button>
<tyh-button simple size="large" type="primary">大号按钮</tyh-button>

```html
<tyh-button size="mini" type="primary">小型按钮</tyh-button>
<tyh-button size="small" type="primary">中等按钮</tyh-button>
<tyh-button type="primary">正常大小</tyh-button>
<tyh-button size="large" type="primary">大号按钮</tyh-button>

<tyh-button simple size="mini" type="primary">小型按钮</tyh-button>
<tyh-button simple size="small" type="primary">中等按钮</tyh-button>
<tyh-button simple type="primary">正常大小</tyh-button>
<tyh-button simple size="large" type="primary">大号按钮</tyh-button>
```

## loading 状态

loading 属性可以配置 loading 状态下的按钮

<tyh-button loading>默认按钮</tyh-button>
<tyh-button loading type="primary">主要按钮</tyh-button>
<tyh-button loading type="success">成功按钮</tyh-button>
<tyh-button loading type="danger">危险按钮</tyh-button>
<tyh-button loading type="warning">警告按钮</tyh-button>

```html
<tyh-button loading>默认按钮</tyh-button>
<tyh-button loading type="primary">主要按钮</tyh-button>
<tyh-button loading type="success">成功按钮</tyh-button>
<tyh-button loading type="danger">危险按钮</tyh-button>
<tyh-button loading type="warning">警告按钮</tyh-button>
```

## Attributes

| 参数     | 说明           | 类型    | 可选值                                         | 默认值  |
| -------- | -------------- | ------- | ---------------------------------------------- | ------- |
| type     | 按钮的类型     | string  | default / primary / success / danger / warning | default |
| round    | 是否为圆角按钮 | boolean | ——                                             | false   |
| simple   | 简约按钮       | boolean | ——                                             | false   |
| disabled | 按钮是否禁用   | boolean | ——                                             | false   |
| icon     | 按钮上的 icon  | string  | ——                                             | ——      |
| size     | 按钮尺寸       | string  | large / small / mini                           | ——      |
| square   | 方形按钮       | boolean | ——                                             | false   |
| loading  | loading 状态   | boolean | ——                                             | false   |
