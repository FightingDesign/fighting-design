# Menu 导航栏

## 基本使用

导航栏的基本使用

<tyh-menu>
  <tyh-menu-item>首页</tyh-menu-item>
  <tyh-menu-item>内容</tyh-menu-item>
  <tyh-menu-item>设置</tyh-menu-item>
  <tyh-menu-item>回收站</tyh-menu-item>
</tyh-menu>

```html
<tyh-menu>
  <tyh-menu-item>首页</tyh-menu-item>
  <tyh-menu-item>内容</tyh-menu-item>
  <tyh-menu-item>设置</tyh-menu-item>
  <tyh-menu-item>回收站</tyh-menu-item>
</tyh-menu>
```

## 主题配置

通过 theme 属性可以配置主题

<tyh-menu theme="dark">
  <tyh-menu-item>首页</tyh-menu-item>
  <tyh-menu-item>内容</tyh-menu-item>
  <tyh-menu-item>设置</tyh-menu-item>
  <tyh-menu-item>回收站</tyh-menu-item>
</tyh-menu>

<tyh-menu theme="light">
  <tyh-menu-item>首页</tyh-menu-item>
  <tyh-menu-item>内容</tyh-menu-item>
  <tyh-menu-item>设置</tyh-menu-item>
  <tyh-menu-item>回收站</tyh-menu-item>
</tyh-menu>

```html
<tyh-menu theme="dark">
  <tyh-menu-item>首页</tyh-menu-item>
  <tyh-menu-item>内容</tyh-menu-item>
  <tyh-menu-item>设置</tyh-menu-item>
  <tyh-menu-item>回收站</tyh-menu-item>
</tyh-menu>

<tyh-menu theme="light">
  <tyh-menu-item>首页</tyh-menu-item>
  <tyh-menu-item>内容</tyh-menu-item>
  <tyh-menu-item>设置</tyh-menu-item>
  <tyh-menu-item>回收站</tyh-menu-item>
</tyh-menu>
```

## 禁用状态

通过 prohibit 属性可以配置子组件链接是否禁用

<tyh-menu>
  <tyh-menu-item prohibit url="/home">首页</tyh-menu-item>
  <tyh-menu-item prohibit url="/abc">内容</tyh-menu-item>
  <tyh-menu-item>设置</tyh-menu-item>
  <tyh-menu-item>回收站</tyh-menu-item>
</tyh-menu>

```html
<tyh-menu>
  <tyh-menu-item prohibit url="/home">首页</tyh-menu-item>
  <tyh-menu-item prohibit url="/abc">内容</tyh-menu-item>
  <tyh-menu-item>设置</tyh-menu-item>
  <tyh-menu-item>回收站</tyh-menu-item>
</tyh-menu>
```

## 不同排列状态

mode 属性可以配置不同的排列状态

collapse 属性可以配置是否折叠导航栏，请注意，在折叠的导航栏中，title 必须使用 `span` 标签进行包裹才能正常工作。

<tyh-switch v-model="isCollapse" />

<div>
  <tyh-menu theme="dark" mode="vertical" :collapse="isCollapse">
    <tyh-menu-item>
      <tyh-icon icon="tyh-ui-shouye-xianxing" />
      <span>首页</span>
    </tyh-menu-item>
    <tyh-menu-item>
      <tyh-icon icon="tyh-ui-pdf" />
      <span>内容</span>
    </tyh-menu-item>
    <tyh-menu-item>
      <tyh-icon icon="tyh-ui-setting" />
      <span>设置</span>
    </tyh-menu-item>
    <tyh-menu-item>
      <tyh-icon icon="tyh-ui-ashbin" />
      <span>回收站</span>
    </tyh-menu-item>
  </tyh-menu>
</div>

<div>
  <tyh-menu theme="light" mode="vertical" :collapse="isCollapse">
    <tyh-menu-item>
      <tyh-icon icon="tyh-ui-shouye-xianxing" />
      <span>首页</span>
    </tyh-menu-item>
    <tyh-menu-item>
      <tyh-icon icon="tyh-ui-pdf" />
      <span>内容</span>
    </tyh-menu-item>
    <tyh-menu-item>
      <tyh-icon icon="tyh-ui-setting" />
      <span>设置</span>
    </tyh-menu-item>
    <tyh-menu-item>
      <tyh-icon icon="tyh-ui-ashbin" />
      <span>回收站</span>
    </tyh-menu-item>
  </tyh-menu>
</div>

```html
<template>
  <tyh-switch v-model="isCollapse" />

  <tyh-menu theme="dark" mode="vertical" :collapse="isCollapse">
    <tyh-menu-item>
      <tyh-icon icon="tyh-ui-shouye-xianxing" />
      <span>首页</span>
    </tyh-menu-item>
    <tyh-menu-item>
      <tyh-icon icon="tyh-ui-pdf" />
      <span>内容</span>
    </tyh-menu-item>
    <tyh-menu-item>
      <tyh-icon icon="tyh-ui-setting" />
      <span>设置</span>
    </tyh-menu-item>
    <tyh-menu-item>
      <tyh-icon icon="tyh-ui-ashbin" />
      <span>回收站</span>
    </tyh-menu-item>
  </tyh-menu>

  <tyh-menu theme="light" mode="vertical" :collapse="isCollapse">
    <tyh-menu-item>
      <tyh-icon icon="tyh-ui-shouye-xianxing" />
      <span>首页</span>
    </tyh-menu-item>
    <tyh-menu-item>
      <tyh-icon icon="tyh-ui-pdf" />
      <span>内容</span>
    </tyh-menu-item>
    <tyh-menu-item>
      <tyh-icon icon="tyh-ui-setting" />
      <span>设置</span>
    </tyh-menu-item>
    <tyh-menu-item>
      <tyh-icon icon="tyh-ui-ashbin" />
      <span>回收站</span>
    </tyh-menu-item>
  </tyh-menu>
</template>

<script setup>
  import { ref } from 'vue'
  const isCollapse = ref(false)
</script>
```

## 左右插槽

left 插槽可以定制左侧自定义内容

right 插槽可以定制右侧自定义内容

<tyh-menu>
  <template v-slot:left>
    <tyh-avatar
      :size="5"
      round
      src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"
    />
  </template>
  <tyh-menu-item>首页</tyh-menu-item>
  <tyh-menu-item>内容</tyh-menu-item>
  <tyh-menu-item>设置</tyh-menu-item>
  <tyh-menu-item>回收站</tyh-menu-item>
  <template v-slot:right>
    <tyh-button style="margin:0" simple>右侧插槽</tyh-button>
  </template>
</tyh-menu>

```html
<tyh-menu>
  <template v-slot:left>
    <tyh-avatar
      :size="5"
      round
      src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"
    />
  </template>
  <tyh-menu-item>首页</tyh-menu-item>
  <tyh-menu-item>内容</tyh-menu-item>
  <tyh-menu-item>设置</tyh-menu-item>
  <tyh-menu-item>回收站</tyh-menu-item>
  <template v-slot:right>
    <tyh-button simple>右侧插槽</tyh-button>
  </template>
</tyh-menu>
```

## Attributes

tyh-menu

| 参数            | 说明             | 类型    | 可选值                | 默认值     |
| --------------- | ---------------- | ------- | --------------------- | ---------- |
| theme           | 主题颜色         | string  | dark / light          | dark       |
| shadow          | 底部是否显示阴影 | boolean | ——                    | false      |
| mode            | 排列方式         | string  | horizontal / vertical | horizontal |
| backgroundColor | 自定义背景色     | string  | ——                    | ——         |
| textColor       | 自定义主题颜色   | string  | ——                    | ——         |
| collapse        | 是否折叠         | boolean | ——                    | false      |

tyh-menu-item

| 参数     | 说明                           | 类型    | 可选值 | 默认值 |
| -------- | ------------------------------ | ------- | ------ | ------ |
| route    | 跳转的路径                     | string  | ——     | ——     |
| prohibit | 是否禁用                       | boolean | ——     | ——     |
| title    | 标题文字（插槽优先级大于属性） | string  | ——     | ——     |
| link     | 跳转的链接（权重高于 router）  | string  | ——     | ——     |

## Slots

| 插槽名称 | 说明说明 |
| -------- | -------- |
| default  | 默认插槽 |
| left     | 左侧插槽 |
| right    | 右侧插槽 |

<script setup>
  import { ref } from 'vue'
  const isCollapse = ref(false)
</script>
