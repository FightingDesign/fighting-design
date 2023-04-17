<script lang="ts" setup>
  import { ref } from 'vue'
  import { FButton } from 'fighting-design'
  import { FIconApps, FIconBlock } from '@fighting-design/fighting-icon'
  import { h } from 'vue'
  import type {
    TableColumns,
    TableRenderH,
    TableRender,
    TableHeaderRender
  } from 'fighting-design'
  import type { VNode, Ref } from 'vue'

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

  const tableRenderSlot: TableRender = (
    tableH: TableRenderH,
    dataItem: Record<string, unknown>
  ): VNode => {
    return tableH(
      FButton,
      {
        type: 'warning',
        onClick: () => {
          console.log(dataItem)
        },
        beforeIcon: h(FIconBlock),
        afterIcon: h(FIconApps)
      },
      {
        default: () => '管理'
      }
    )
  }

  const tableRenderHeader: TableHeaderRender = (
    tableH: TableRenderH,
    headerItem: TableColumns,
    index: number
  ) => {
    return tableH(
      FButton,
      {
        type: 'danger',
        simple: true,
        round: true,
        onClick: (e: MouseEvent): void => {
          console.log(e, headerItem, index)
        }
      },
      { default: () => '姓名' }
    )
  }

  const columns: Ref<TableColumns[]> = ref([
    {
      title: tableRenderHeader,
      key: 'name'
    },
    {
      title: '年龄',
      key: 'age'
    },
    {
      title: '介绍',
      key: 'introduce'
    },
    {
      title: '操作',
      render: tableRenderSlot
    }
  ])
</script>

<template>
  <f-table :data="data" :columns="columns" />
</template>
