# Avatar 头像

## 基本使用

头像的基本使用

src 属性可以添加图片路径

size 可以配置头像大小

<tyh-avatar :size="10" src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"/>

```html
<tyh-avatar :size="10" src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg" />
```

## 配置圆角

round 属性配置头像的圆角

<tyh-avatar round src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg" />

```html
<tyh-avatar round src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg" />
```

## 如何适应容器框

fit 属性配置头像如何适应到容器框，同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)

<div class="fitBox">
  <div class="item" v-for="fit in fits" :key="fit">
    <span class="text">{{ fit }}</span>
    <tyh-avatar
      round
      src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"
      :fit="fit"
    />
  </div>
</div>

```html
<template>
  <div class="fitBox">
    <div class="item" v-for="fit in fits" :key="fit">
      <span class="text">{{ fit }}</span>
      <tyh-avatar
        round
        src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"
        :fit="fit"
      />
    </div>
  </div>
</template>

<script setup>
  const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
</script>
```

## 配置边框

border 属性配置头像的边框

<tyh-avatar border src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg" />
<tyh-avatar border round  src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"/>

```html
<tyh-avatar border src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg" />
<tyh-avatar border round src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg" />
```

## 加载失败

errorIcon 属性配置加载失败的 icon

<tyh-avatar src="https://tianyuhao.cn2/v3/assets/giraffe.jpg" />
<tyh-avatar errorIcon="tyh-ui-githublogo" src="https://tianyuhao.cn2/v3/assets/giraffe.jpg"/>

```html
<tyh-avatar src="https://tianyuhao.cn2/v3/assets/giraffe.jpg" />
<tyh-avatar
  errorIcon="tyh-ui-githublogo"
  src="https://tianyuhao.cn2/v3/assets/giraffe.jpg"
/>
```

## Attributes

| 参数      | 说明               | 类型    | 可选值 | 默认值                      |
| --------- | ------------------ | ------- | ------ | --------------------------- |
| src       | 图片路径           | string  | ——     | ——                          |
| size      | 图片大小           | number  | ——     | 8，(计算方式：(size\*10)px) |
| round     | 圆角               | boolean | ——     | false                       |
| border    | 边框               | boolean | ——     | false                       |
| fit       | 图片如何适应容器框 | string  | ——     | ——                          |
| alt       | 原生 alt 属性      | string  | ——     | ——                          |
| select    | 是否可以选择       | boolean | ——     | false                       |
| draggable | 是否可以拖动       | boolean | ——     | false                       |
| errorIcon | 失败时显示的 icon  | string  | ——     | tyh-ui-user                 |

## Events

| 事件名称 | 说明             | 回调参数 |
| -------- | ---------------- | -------- |
| load     | 图片加载成功触发 | ——       |
| error    | 图片加载失败触发 | ——       |

## slots

| 插槽名称 | 说明说明       |
| -------- | -------------- |
| error    | 自定义失败提示 |

<script setup>
  const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
</script>
