<script lang="ts" setup>
  import { ref } from 'vue'
  import { FButton } from 'fighting-design'

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
    },
    {
      name: '操作',
      render: h => {
        return h('div', { class: 'table-wrapper' }, [
          h(FButton, { type: 'info' }, { default: () => '按钮1' }),
          h(FButton, { type: 'info' }, { default: () => '按钮2' })
        ])
      }
    }
  ])

  const data = ref([
    {
      name: '卡莉斯塔',
      age: '22',
      introduce: 'dhasjhdjahdjasdhjadhasjhdasjhdasjhdjdj'
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
  <f-table :data="data" :columns="columns" />
</template>

<style>
  .table-wrapper {
    display: flex;
    column-gap: 20px;
  }
</style>
