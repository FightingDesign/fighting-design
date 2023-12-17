<script lang="ts" setup>
  import { ref, h } from 'vue'
  import { FButton } from 'fighting-design'
  import type { TableColumns, RenderReturn } from 'fighting-design'
  import type { VNode } from 'vue'

  const a = () => h('divF')

  const columns = ref<TableColumns[]>([
    {
      title: '姓名',
      key: 'name'
      // width: 300
    },
    {
      title: '姓名',
      key: 'name'
      // width: 300
    },
    {
      title: '姓名',
      key: 'name'
      // width: 300
    },
    {
      // title: '年龄',
      title: h => {
        return h('div', { class: 'table-wrapper' }, [
          h(FButton, { type: 'info' }, { default: () => '年龄' })
        ])
      },
      key: 'age'
      // width: 500
    },
    {
      title: '介绍',
      key: 'introduce'
      // width: 500
    },
    // RenderReturn
    {
      title: '操作',
      render: (h, a, v, cc) => {
        // console.log(h, a, v, cc)
        return h('div', { class: 'table-wrapper' }, [
          h(FButton, { type: 'info', round: true }, { default: () => '按钮1' }),
          h(FButton, { type: 'info' }, { default: () => '按钮2' })
        ])
      }
    }
  ])

  const data = ref([
    {
      name: '卡莉斯塔',
      age: '22',
      introduce:
        '大环境的还是决定大数据等哈就和大家安徽的就撒欢的讲话大声讲话打击很大今后的骄傲和打击很大机会大家'
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

<template>
  <!-- <f-table :data="data" num :width="1200" :columns="columns" /> -->
  <f-table :data="data" num :columns="columns" />
</template>

<style>
  .table-wrapper {
    display: flex;
    column-gap: 20px;
  }
</style>
