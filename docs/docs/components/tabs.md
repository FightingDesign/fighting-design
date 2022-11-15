# Tabs 标签页

在同一块区域切换内容。

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/tabs)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/tabs.md)

## 基本使用

<f-card>
  <f-tabs>
    <f-tabs-pane label="如烟">
      <p>七岁的那一年，抓住那只蝉，以为能抓住夏天；</p>
      <p>十七岁的那年，吻过他的脸，就以为和他能永远。</p>
    </f-tabs-pane>
    <f-tabs-pane label="盛夏光年">
      <p>长大 难道是人必经的溃烂。</p>
    </f-tabs-pane>
    <f-tabs-pane label="我心中尚未崩坏的地方">
      <p>就算会有一天，没人与我合唱，至少在我的心中，还有个尚未崩坏的地方。</p>
    </f-tabs-pane>
  </f-tabs>
</f-card>

::: demo

```html
<f-tabs>
  <f-tabs-pane label="如烟">
    <p>七岁的那一年，抓住那只蝉，以为能抓住夏天；</p>
    <p>十七岁的那年，吻过他的脸，就以为和他能永远。</p>
  </f-tabs-pane>
  <f-tabs-pane label="盛夏光年">
    <p>长大 难道是人必经的溃烂。</p>
  </f-tabs-pane>
  <f-tabs-pane label="我心中尚未崩坏的地方">
    <p>就算会有一天，没人与我合唱，至少在我的心中，还有个尚未崩坏的地方。</p>
  </f-tabs-pane>
</f-tabs>
```

:::

## 多种风格/方向

配置`type`、`position`，实现不同风格与不同方向的排列组合

<f-card>
  <f-tabs :type="type" :position="position">
    <f-tabs-pane label="知足">
      <p>怎么去拥有一道彩虹，怎么去拥抱一夏天的风</p>
    </f-tabs-pane>
    <f-tabs-pane label="星空">
      <p>摸不到的颜色是否叫彩虹，看不到的拥抱是否叫做微风</p>
    </f-tabs-pane>
    <f-tabs-pane label="彩虹">
      <p>你的爱就像彩虹，我张开了手却只能抱住风</p>
    </f-tabs-pane>
  </f-tabs>
  <p>
    风格：
    <f-radio-group v-model="type">
      <f-radio label="line">line</f-radio>
      <f-radio label="card">card</f-radio>
      <f-radio label="segment">segment</f-radio>
    </f-radio-group>
  </p>
  <p>
    方向：
    <f-radio-group v-model="position">
      <f-radio label="top">top</f-radio>
      <f-radio label="right" :disabled="type === 'segment'">right</f-radio>
      <f-radio label="bottom">bottom</f-radio>
      <f-radio label="left" :disabled="type === 'segment'">left</f-radio>
    </f-radio-group>
  </p>
</f-card>

::: demo

```html
<f-card>
  <f-tabs :type="type" :position="position">
    <f-tabs-pane label="知足">
      <p>怎么去拥有一道彩虹，怎么去拥抱一夏天的风</p>
    </f-tabs-pane>
    <f-tabs-pane label="星空">
      <p>摸不到的颜色是否叫彩虹，看不到的拥抱是否叫做微风</p>
    </f-tabs-pane>
    <f-tabs-pane label="彩虹">
      <p>你的爱就像彩虹，我张开了手却只能抱住风</p>
    </f-tabs-pane>
  </f-tabs>
  <p>
    风格：
    <f-radio-group v-model="type">
      <f-radio label="line">line</f-radio>
      <f-radio label="card">card</f-radio>
      <f-radio label="segment">segment</f-radio>
    </f-radio-group>
  </p>
  <p>
    方向：
    <f-radio-group v-model="position">
      <f-radio label="top">top</f-radio>
      <f-radio label="right" :disabled="type === 'segment'">right</f-radio>
      <f-radio label="bottom">bottom</f-radio>
      <f-radio label="left" :disabled="type === 'segment'">left</f-radio>
    </f-radio-group>
  </p>
</f-card>

<script lang="ts" setup>
  import { ref } from 'vue'

  const type = ref('line')
  const position = ref('top')
</script>
```

:::

## 对齐方式

使用`justify-content`参数配置对齐方式，仅针对`line`风格，并且只有上下方向生效

<f-card>
  <f-tabs :justifyContent="justifyContent">
    <f-tabs-pane label="登录">
      <p>在这登录</p>
    </f-tabs-pane>
    <f-tabs-pane label="注册">
      <p>在这注册！！</p>
    </f-tabs-pane>
  </f-tabs>
  <p>
    对齐方式：
    <f-radio-group v-model="justifyContent">
      <f-radio label="flex-start">flex-start</f-radio>
      <f-radio label="center">center</f-radio>
      <f-radio label="flex-end">flex-end</f-radio>
      <f-radio label="space-between">space-between</f-radio>
      <f-radio label="space-around">space-around</f-radio>
    </f-radio-group>
  </p>
</f-card>

::: demo

```html
<f-card>
  <f-tabs :justifyContent="justifyContent">
    <f-tabs-pane label="登录">
      <p>在这登录</p>
    </f-tabs-pane>
    <f-tabs-pane label="注册">
      <p>在这注册！！</p>
    </f-tabs-pane>
  </f-tabs>
  <p>
    对齐方式：
    <f-radio-group v-model="justifyContent">
      <f-radio label="flex-start">flex-start</f-radio>
      <f-radio label="center">center</f-radio>
      <f-radio label="flex-end">flex-end</f-radio>
      <f-radio label="space-between">space-between</f-radio>
      <f-radio label="space-around">space-around</f-radio>
    </f-radio-group>
  </p>
</f-card>

<script lang="ts" setup>
  import { ref } from 'vue'

  const justifyContent = ref('line')
</script>
```

:::

## 切换时的回调

<f-tabs :beforeEnter="beforeEnter">
  <f-tabs-pane label="个人信息" name="name">
    <p>小芳，女</p>
  </f-tabs-pane>
  <f-tabs-pane label="爱好(等一秒)" name="hobby">
    <p>疯狂星期四，V我50~</p>
  </f-tabs-pane>
  <f-tabs-pane label="年龄" name="age">
  </f-tabs-pane>
</f-tabs>

::: demo

```html
<f-tabs :beforeEnter="beforeEnter">
  <f-tabs-pane label="个人信息" name="name">
    <p>小芳，女</p>
  </f-tabs-pane>
  <f-tabs-pane label="爱好(等一秒)" name="hobby">
    <p>疯狂星期四，V我50~</p>
  </f-tabs-pane>
  <f-tabs-pane label="年龄" name="age"> </f-tabs-pane>
</f-tabs>

<script lang="ts" setup>
  import { FMessage } from 'fighting-design'

  const beforeEnter = (name) => {
    switch (name) {
      case 'hobby':
        return new Promise<boolean>((resolve) => {
          FMessage.warning('稍等一下~')
          setTimeout(() => {
            resolve(true)
          }, 1000)
        })
      case 'age':
        FMessage.danger('这个不能说')
        return false
      default:
        return true
    }
  }
</script>
```

:::

## 前缀 & 后缀

<f-tabs>
  <template #prefix>前缀</template>
  <template #suffix>后缀</template>
  <f-tabs-pane label="如烟">
    <p>七岁的那一年，抓住那只蝉，以为能抓住夏天；</p>
    <p>十七岁的那年，吻过他的脸，就以为和他能永远。</p>
  </f-tabs-pane>
  <f-tabs-pane label="盛夏光年">
    <p>长大 难道是人必经的溃烂。</p>
  </f-tabs-pane>
  <f-tabs-pane label="我心中尚未崩坏的地方">
    <p>就算会有一天，没人与我合唱，至少在我的心中，还有个尚未崩坏的地方。</p>
  </f-tabs-pane>
</f-tabs>

::: demo

```html
<f-tabs>
  <template #prefix>前缀</template>
  <template #suffix>后缀</template>
  <f-tabs-pane label="如烟">
    <p>七岁的那一年，抓住那只蝉，以为能抓住夏天；</p>
    <p>十七岁的那年，吻过他的脸，就以为和他能永远。</p>
  </f-tabs-pane>
  <f-tabs-pane label="盛夏光年">
    <p>长大 难道是人必经的溃烂。</p>
  </f-tabs-pane>
  <f-tabs-pane label="我心中尚未崩坏的地方">
    <p>就算会有一天，没人与我合唱，至少在我的心中，还有个尚未崩坏的地方。</p>
  </f-tabs-pane>
</f-tabs>
```

:::

## Edit 模式

仅在`card`风格下支持`edit`模式

需添加`editStatus`属性，并配置`edit`回调事件

<f-card>
  <f-tabs editStatus type="card" @edit="edit">
    <f-tabs-pane :label="item.label" :name="item.name" v-for="item in list">{{item.content}}</f-tabs-pane>
  </f-tabs>
</f-card>

::: demo

```html
<f-card>
  <f-tabs editStatus type="card" @edit="edit">
    <f-tabs-pane :label="item.label" :name="item.name" v-for="item in list"
      >{{item.content}}</f-tabs-pane
    >
  </f-tabs>
</f-card>

<script lang="ts" setup>
  import { ref } from 'vue'

  let tabIndex = 2
  const list = ref([
    { label: '第一个', content: '哈哈哈哈', name: '1' },
    { label: '第二个', content: '哈哈哈哈a', name: '2' }
  ])

  function edit(action: 'remove' | 'add', name: string, i: number) {
    switch (action) {
      case 'add':
        const newTabName = `${++tabIndex}`
        list.value.push({
          label: '新的' + newTabName,
          content: '新的标签页' + newTabName,
          name: newTabName
        })
        break
      case 'remove':
        list.value.splice(i, 1)
        break
    }
  }
</script>
```

:::

## 触发方式

配置`trigger`改变触发方式

<f-card>
  <f-tabs :trigger="trigger">
    <f-tabs-pane label="如烟">
      <p>七岁的那一年，抓住那只蝉，以为能抓住夏天；</p>
      <p>十七岁的那年，吻过他的脸，就以为和他能永远。</p>
    </f-tabs-pane>
    <f-tabs-pane label="盛夏光年">
      <p>长大 难道是人必经的溃烂。</p>
    </f-tabs-pane>
    <f-tabs-pane label="我心中尚未崩坏的地方">
      <p>就算会有一天，没人与我合唱，至少在我的心中，还有个尚未崩坏的地方。</p>
    </f-tabs-pane>
  </f-tabs>

  <p>
    触发方式：
    <f-radio-group v-model="trigger">
      <f-radio label="click">click</f-radio>
      <f-radio label="hover">hover</f-radio>
    </f-radio-group>
  </p>
</f-card>

::: demo

```html
<f-card>
  <f-tabs :trigger="trigger">
    <f-tabs-pane label="如烟">
      <p>七岁的那一年，抓住那只蝉，以为能抓住夏天；</p>
      <p>十七岁的那年，吻过他的脸，就以为和他能永远。</p>
    </f-tabs-pane>
    <f-tabs-pane label="盛夏光年">
      <p>长大 难道是人必经的溃烂。</p>
    </f-tabs-pane>
    <f-tabs-pane label="我心中尚未崩坏的地方">
      <p>就算会有一天，没人与我合唱，至少在我的心中，还有个尚未崩坏的地方。</p>
    </f-tabs-pane>
  </f-tabs>

  <p>
    触发方式：
    <f-radio-group v-model="trigger">
      <f-radio label="click">click</f-radio>
      <f-radio label="hover">hover</f-radio>
    </f-radio-group>
  </p>
</f-card>

<script lang="ts" setup>
  import { ref } from 'vue'

  const trigger = ref('click')
</script>
```

:::

<script lang="ts" setup>
  import { ref } from 'vue'
  import { FMessage } from '../../../packages/fighting-design/index'

  const type = ref('line')
  const position = ref('top')
  const justifyContent = ref('flex-start')

  const beforeEnter = (name) => {
    switch(name) {
      case 'hobby':
        return new Promise<boolean>((resolve) => {
          FMessage.warning('稍等一下~')
          setTimeout(() => {
            resolve(true)
          }, 1000)
        })
      case 'age':
        FMessage.danger('这个不能说')
        return false
      default: 
        return true
    }
  }

  const trigger = ref('click')

  let tabIndex = 2
  const list = ref([
    {label: '第一个', content: '哈哈哈哈', name: '1'},
    {label: '第二个', content: '哈哈哈哈a', name: '2'},
  ])
  function edit(action:"remove" | "add", name: string, i:number) {
    switch (action) {
      case "add":
      const newTabName = `${++tabIndex}`
        list.value.push({label: '新的' + newTabName, content: '新的标签页' + newTabName, name: newTabName})
        break;
      case "remove":
        list.value.splice(i, 1)
        break;
    }
  }
</script>

## Tabs Attributes

| 参数             | 说明                                 | 类型                                | 可选值                                                          | 默认值              |
| ---------------- | ------------------------------------ | ----------------------------------- | --------------------------------------------------------------- | ------------------- |
| `v-model`        | 绑定值，选中选项卡的 name            | string / number                     | ——                                                              | 第一个选项卡的 name |
| `type`           | 风格类型                             | string                              | `line` `card` `segment`                                         | `line`              |
| `position`       | 头部位置                             | string                              | `left` `right` `top` `bottom`                                   | `top`               |
| `justifyContent` | 对齐方式(仅针对上下方向的`line`有效) | string                              | `justify-content` 的`css`属性 | `flex-start`        |
| `beforeEnter`    | 切换前的回调                         | (name: String \| Number) => Boolean | ——                                                              | ——                  |
| `editStatus`     | 编辑模式                             | Boolean                             | ——                                                              | `false`             |
| `trigger`        | 触发方式                             | String                              | `click` `hover`                                                 | `click`             |

## Tabs Slots

| 名称      | 说明       |
| --------- | ---------- |
| `default` | 标签的内容 |
| `prefix`  | 标签的前缀 |
| `suffix`  | 标签的后缀 |

## TabsPane Attributes

| 参数    | 说明                 | 类型            | 可选值 | 默认值  |
| ------- | -------------------- | --------------- | ------ | ------- |
| `name`  | 标签的标识符         | string / number | ——     | ——      |
| `label` | 标签项的标题         | string          | ——     | ——      |
| `lazy`  | 标签内容是否延迟渲染 | boolean         | ——     | `false` |

## TabsPane Slots

| 名称      | 说明             |
| --------- | ---------------- |
| `default` | 标签项的内容     |
| `label`   | 标签项的标题内容 |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/xluoyu" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/36356701?v=4" />
</a>
