# Waterfall 瀑布流

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/waterfall)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/waterfall.md)

## 基本使用

<demo1-vue />

::: details 显示代码

```html
<template>
  <f-waterfall
    wrap-height="300px"
    type="column"
    :list="data"
    @scroll-end="handleEnd"
  >
    <template #default="{ row }">
      <div style="height: auto; width: 100%; display: flex" class="pic">
        <img :src="row.src" style="height: auto; width: 100%" />

        <div class="pic-name">{{ row.name }}</div>
      </div>
    </template>
  </f-waterfall>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const handleEnd = (): void => {
    console.log('handleEnd')
    data.value.push({
      src: 'https://film-grab.com/wp-content/uploads/2022/07/The-Adjuster-006.jpg',
      name: 'test'
    })
  }

  const data = ref(
    [
      'https://film-grab.com/wp-content/uploads/2022/07/The-Adjuster-006.jpg',
      'https://film-grab.com/wp-content/uploads/2022/04/Live-and-Let-Die-061.jpg',
      'https://film-grab.com/wp-content/uploads/2022/07/After-Yang026.jpg',
      'https://film-grab.com/wp-content/uploads/2022/07/The-Worst-Person-in-the-World-001.jpg',
      'https://film-grab.com/wp-content/uploads/2020/10/Zeroville-025.jpg',
      'https://film-grab.com/wp-content/uploads/2022/02/Bigger-Than-Life-029.jpg',
      'https://film-grab.com/wp-content/uploads/2022/04/Diamonds-are-Forever-060.jpg',
      'https://film-grab.com/wp-content/uploads/2022/02/Prisoners-of-Ghostland-002.jpg',
      'https://film-grab.com/wp-content/uploads/2022/02/Dune-2021-022.jpg',
      'https://film-grab.com/wp-content/uploads/2022/05/Apollo101_2036.jpg',
      'https://film-grab.com/wp-content/uploads/2022/05/InTheEarth035.jpg'
    ].map((el) => {
      return {
        src: el,
        name: el.substring(49)
      }
    })
  )
</script>

<style lang="scss">
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .pic {
    overflow: hidden;
    transition: all 0.6s;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.4);
      transition: background-color 4s;
      transform: translateY(-100%);
    }

    &:hover {
      &:before {
        transform: translateY(0%);
      }

      .pic-name {
        color: #bbb;
        transform: translateY(0);
      }
    }
  }

  .pic-name {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 100%;
    line-height: 20px;
    font-size: 12px;
    text-align: center;
    font-weight: bold;
    color: transparent;
    transform: translateY(100%);
    transition: all 1s;
  }
</style>
```

:::

## Attributes

| 参数          | 说明                    | 类型          | 可选值 | 默认值 |
| ------------- | ----------------------- | ------------- | ------ | ------ |
| `list`        | 数据                    | array         | ——     | array  |
| `type`        | 布局方式                | (flex,column) | ——     | flex   |
| `colGap`      | 列间隙                  | number        | ——     | 0      |
| `rowGap`      | 行间隙                  | number        | ——     | 0      |
| `minWidth`    | 单行最小宽度            | number        | ——     | 0      |
| `cols`        | 列数,不指定最小宽度生效 | number        | ——     | 2      |
| `scrollAwait` | 滚动节流时间            | number        | ——     | 100    |

## Slots

| 名称      | 说明             |
| --------- | ---------------- |
| `default` | 瀑布流单项的内容 |

## Events

| 事件名称     | 说明       | 参数 |
| ------------ | ---------- | ---- |
| `scroll-end` | 滚动到底部 |      |

## Interface

组件导出以下类型定义：

```ts
import type { WaterfallRowType } from 'fighting-design'
```

## Contributors

<a href="https://gitee.com/gz_lib" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/80079124?v=4" />
</a>

<script setup lang="ts">
  import demo1Vue from './_demos/waterfall/demo1.vue'
</script>
