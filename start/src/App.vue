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

  const value1 = ref('')

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
      key: 'name',
      fixed: true
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

  const value3 = ref(true)

  const searchList = (e, v) => console.log(e, v)
  const c = (e, v) => console.log('change', e, v)
  const i = (e, v) => console.log('input', e, v)
</script>

<template>
  <h3>{{ value1 }}</h3>
  <f-input
    v-model="value1"
    type="text"
    placeholder="请输入...."
    search
    abc="1234"
    :on-search="searchList"
    :on-input="i"
    :on-change="c"
  />
  <f-input v-model="value1" type="text" placeholder="请输入...." />
  <f-textarea v-model="value1" placeholder="请输入...." />

  <f-fighting-global :size="value3 ? 'mini' : 'large'">
    <f-space>
      <f-input v-model="value1" type="text" placeholder="请输入...." />

      <f-button>默认按钮</f-button>
      <f-button>主要按钮</f-button>
      <f-button>成功按钮</f-button>
      <f-button>危险按钮</f-button>
      <f-button>警告按钮</f-button>

      <f-switch v-model="value3" />
    </f-space>
  </f-fighting-global>

  <f-table :data="data" :columns="columns">
    <template #tfoot> 这是表格的页脚 </template>
  </f-table>
</template>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
  }

  #aaa123 {
    border: 2px solid red;
  }
</style>
