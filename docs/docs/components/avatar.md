# Avatar 头像

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

<style scoped>
.f-avatar {
  margin: 5px;
}
</style>
