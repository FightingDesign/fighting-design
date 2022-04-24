# Info 信息栏

## 基本使用

Info 的基本使用

userInfo 属性可以配置昵称

describe 属性可以配置描述信息

photo 插槽可以插入一个头像

right 插槽可以插入右侧内容

<tyh-info userInfo="Tyh2001" describe="hello world">
  <template v-slot:photo>
    <tyh-avatar
      round
      :size="5"
      src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"
    />
  </template>
  <template v-slot:right>
    <tyh-button simple type="primary" size="mini">关注 TA</tyh-button>
  </template>
</tyh-info>

```html
<tyh-info userInfo="Tyh2001" describe="hello world">
  <template v-slot:photo>
    <tyh-avatar
      round
      :size="5"
      src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"
    />
  </template>
  <template v-slot:right>
    <tyh-button simple type="primary" size="mini">关注 TA</tyh-button>
  </template>
</tyh-info>
```

## 更多扩展

body 和 footer 插槽可以进行插入身体和页脚的内容

<tyh-info userInfo="Tyh2001" describe="hello world">
  <template v-slot:photo>
    <tyh-avatar
      round
      :size="5"
      src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"
    />
  </template>
  <template v-slot:right>
    <tyh-button simple type="primary" size="mini">关注 TA</tyh-button>
  </template>

  <template v-slot:body>
    <tyh-text block type="success">这是我今天拍的照片，好看吗？</tyh-text>
    <tyh-image
      width="300px"
      src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"
    />
  </template>

  <template v-slot:footer>
    <tyh-text type="danger">2022-02-12</tyh-text>
  </template>
</tyh-info>

```html
<tyh-info userInfo="Tyh2001" describe="hello world">
  <template v-slot:photo>
    <tyh-avatar
      round
      :size="5"
      src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"
    />
  </template>
  <template v-slot:right>
    <tyh-button simple type="primary" size="mini">关注 TA</tyh-button>
  </template>

  <template v-slot:body>
    <tyh-text block type="success">这是我今天拍的照片，好看吗？</tyh-text>
    <tyh-image
      width="300px"
      src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"
    />
  </template>

  <template v-slot:footer>
    <tyh-text type="danger">2022-02-12</tyh-text>
  </template>
</tyh-info>
```

## 昵称超链接

使用 linkUrl 属性，传入一个 url 可以配置点击昵称的时候进行超链接跳转

<tyh-info userInfo="Tyh2001" describe="hello world" linkUrl="https://tianyuhao.cn">  
  <template v-slot:photo>
    <tyh-avatar
      round
      :size="5"
      src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"
    />
  </template>
</tyh-info>

```html
<tyh-info
  userInfo="Tyh2001"
  describe="hello world"
  linkUrl="https://tianyuhao.cn"
>
  <template v-slot:photo>
    <tyh-avatar
      round
      :size="5"
      src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"
    />
  </template>
</tyh-info>
```

## Attributes

| 参数     | 说明               | 类型   | 可选值 | 默认值 |
| -------- | ------------------ | ------ | ------ | ------ |
| userInfo | 昵称               | string | ——     | ——     |
| describe | 描述信息           | string | ——     | ——     |
| linkUrl  | 点击昵称的跳转链接 | string | ——     | ——     |

## Slots

| 插槽名称 | 说明说明               |
| -------- | ---------------------- |
| photo    | 自定义信息栏的头像     |
| right    | 自定义信息栏的右侧内容 |
| body     | 自定义信息栏的主要部分 |
| footer   | 自定义信息栏的页脚部分 |
