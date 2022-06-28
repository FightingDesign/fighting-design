# Avatar 头像

`Avatar` 用于用户的头像展示

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-components/avatar)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/avatar.md)

## 基本使用

使用 `src` 属性设置图片的路径

`round` 属性可以配置圆角头像

<f-avatar src="https://tianyuhao.cn/images/my.jpg" />
<f-avatar round src="https://tianyuhao.cn/images/my.jpg" />

::: details 显示代码

```html
<f-avatar src="https://tianyuhao.cn/images/my.jpg" />
<f-avatar round src="https://tianyuhao.cn/images/my.jpg" />
```

:::

## 适应容器的方式

`fit` 属性可以配置头像不同适应容器的方式

<f-avatar
  v-for="(fit, index) in ['fill', 'contain', 'cover', 'none', 'scale-down']"
  :key="index"
  :fit="fit"
  src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273443773.png"
/>

<br />

<f-avatar
  v-for="(fit, index) in ['fill', 'contain', 'cover', 'none', 'scale-down']"
  :key="index"
  :fit="fit"
  src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273443773.png"
  round
/>

::: details 显示代码

```html
<f-avatar
  v-for="(fit, index) in ['fill', 'contain', 'cover', 'none', 'scale-down']"
  :key="index"
  :fit="fit"
  src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273443773.png"
/>

<f-avatar
  v-for="(fit, index) in ['fill', 'contain', 'cover', 'none', 'scale-down']"
  :key="index"
  :fit="fit"
  src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273443773.png"
  round
/>
```

:::

## 不同大小

`size` 属性可以配置不同大小的头像

<f-avatar size="large" src="https://tianyuhao.cn/images/my.jpg" />
<f-avatar size="middle" src="https://tianyuhao.cn/images/my.jpg" />
<f-avatar size="small" src="https://tianyuhao.cn/images/my.jpg" />
<f-avatar size="mini" src="https://tianyuhao.cn/images/my.jpg" />

::: details 显示代码

```html
<f-avatar size="large" src="https://tianyuhao.cn/images/my.jpg" />
<f-avatar size="middle" src="https://tianyuhao.cn/images/my.jpg" />
<f-avatar size="small" src="https://tianyuhao.cn/images/my.jpg" />
<f-avatar size="mini" src="https://tianyuhao.cn/images/my.jpg" />
```

:::

## 图标头像

`icon` 属性可以配置带有 `icon` 的图标头像

当然你也可以设置背景色和 `icon` 的大小

<f-avatar size="large" icon="f-icon-bussiness-man" background="skyblue" icon-size="35px" />
<f-avatar size="middle" icon="f-icon-atm-away" icon-size="30px" icon-color="orange" round/>
<f-avatar size="small" icon="f-icon-Customermanagement" icon-size="25px"/>
<f-avatar size="mini" icon="f-icon-account" />

::: details 显示代码

```html
<f-avatar
  size="large"
  icon="f-icon-bussiness-man"
  background="skyblue"
  icon-size="35px"
/>
<f-avatar
  size="middle"
  icon="f-icon-atm-away"
  icon-size="30px"
  icon-color="orange"
  round
/>
<f-avatar size="small" icon="f-icon-Customermanagement" icon-size="25px" />
<f-avatar size="mini" icon="f-icon-account" />
```

:::

## 懒加载

`lazy` 属性可以设置图片懒加载，详情可参考 `DevTools` 的 `Network`

<f-avatar width="200px" lazy src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a72738a7113.png" />

::: details 显示代码

```html
<f-avatar
  width="200px"
  lazy
  src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a72738a7113.png"
/>
```

:::

## Attributes

| 参数         | 说明                                                                                                     | 类型    | 可选值                                       | 默认值 |
| ------------ | -------------------------------------------------------------------------------------------------------- | ------- | -------------------------------------------- | ------ |
| `src`        | 图片路径                                                                                                 | string  | ——                                           | ——     |
| `err-src`    | 加载失败时要显示的地址                                                                                   | string  | ——                                           | ——     |
| `alt`        | 原生 [alt](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#attr-alt) 属性                  | string  | ——                                           | ——     |
| `round`      | 是否为圆角                                                                                               | boolean | ——                                           | false  |
| `lazy`       | 是否懒加载头像                                                                                           | boolean | ——                                           | false  |
| `fit`        | 如何适应容器，原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit#try_it) 属性 | string  | `fill` `contain` `cover` `none` `scale-down` | ——     |
| `size`       | 图片大小                                                                                                 | string  | `large` `middle` `small` `mini`              | middle |
| `background` | 背景色                                                                                                   | string  | ——                                           | ——     |
| `icon`       | icon 类名                                                                                                | string  | ——                                           | ——     |
| `icon-size`  | icon 大小                                                                                                | string  | ——                                           | ——     |
| `icon-color` | icon 的颜色                                                                                              | string  | ——                                           | ——     |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<style scoped>
.f-avatar {
  margin: 5px;
}
</style>
