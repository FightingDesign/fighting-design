# Image 图片

## 基本使用

图片的基本使用

src 属性可以添加图片路径

width，height 可以配置图片宽高

<tyh-image width="300px" src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg" />

```html
<tyh-image width="300px" src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg" />
```

## 如何适应容器框

fit 属性配置图片如何适应到容器框，同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)

<div class="fitBox">
  <div class="item" v-for="fit in ['fill', 'contain', 'cover', 'none', 'scale-down']" :key="fit">
    <span class="text">{{ fit }}</span>
    <tyh-image
      width="100px"
      height="100px"
      src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"
      :fit="fit"
    />
  </div>
</div>

```html
<div class="fitBox">
  <div
    class="item"
    v-for="fit in ['fill', 'contain', 'cover', 'none', 'scale-down']"
    :key="fit"
  >
    <span class="text">{{ fit }}</span>
    <tyh-image
      width="100px"
      height="100px"
      src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"
      :fit="fit"
    />
  </div>
</div>
```

## Attributes

| 参数      | 说明               | 类型    | 可选值 | 默认值 |
| --------- | ------------------ | ------- | ------ | ------ |
| src       | 图片路径           | string  | ——     | ——     |
| width     | 图片宽度           | string  | ——     | ——     |
| height    | 图片高度           | string  | ——     | ——     |
| fit       | 图片如何适应容器框 | string  | ——     | ——     |
| alt       | 原生 alt 属性      | string  | ——     | ——     |
| select    | 是否可以选择       | boolean | ——     | false  |
| draggable | 是否可以拖动       | boolean | ——     | false  |

## Events

| 事件名称 | 说明             | 回调参数 |
| -------- | ---------------- | -------- |
| load     | 图片加载成功触发 | ——       |
| error    | 图片加载失败触发 | ——       |

## slots

| 插槽名称 | 说明说明       |
| -------- | -------------- |
| error    | 自定义失败提示 |
