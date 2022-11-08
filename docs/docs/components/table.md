# Table 表格

将数据格式化

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/table)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/table.md)

## 基本使用

<f-table :data="data" :columns="columns" />

## Attributes

| 参数            | 说明               | 类型    | 可选值                  | 默认值 |
| --------------- | ------------------ | ------- | ----------------------- | ------ |
| `data`          | 数据列表           | array   | ——                      | null   |
| `columns`       | 标题数据           | array   | ——                      | null   |
| `align`         | 内容对齐方式       | string  | `left` `center` `right` | left   |
| `border`        | 是否显示边框       | boolean | ——                      | false  |
| `num`           | 是否显示序号       | boolean | ——                      | false  |
| `zebra`         | 是否显示斑马纹     | boolean | ——                      | false  |
| `zebra-color`   | 自定义斑马纹颜色   | string  | ——                      | null   |
| `height`        | 自定义表格高度     | string  | ——                      | null   |
| `optional`      | 是否支持多选       | boolean | ——                      | false  |
| `bg-color`      | 自定义背景颜色     | string  | ——                      | null   |
| `head-bg-color` | 自定义头部背景颜色 | string  | ——                      | null   |

## Interface

组件导出以下类型定义：

```ts
import type {
  TablePropsType,
  TableInstance,
  TableAlignType,
  TableDateType,
  TableColumnsInterface
} from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<script setup>
  import { ref } from 'vue'
  const columns = ref([
    {
      title: '姓名',
      key: 'name'
    },
    {
      title: '年龄',
      key: 'age'
    },
    {
      title: '介绍',
      key: 'introduce'
    }
  ])
  const data = ref([
    {
      name: '卡莉斯塔',
      age: '22',
      introduce: '她的被动可以在发动攻击后进行小距离的跳跃'
    },
    {
      name: '艾希',
      age: '16',
      introduce: '拥有强大减速和控制能力的远程射手'
    },
    {
      name: '李青',
      age: '34',
      introduce: '非常优秀的打野英雄'
    },
    {
      name: '贾克斯',
      age: '109',
      introduce: '取得优势的武器可以输出成吨的伤害'
    }
  ])

</script>
