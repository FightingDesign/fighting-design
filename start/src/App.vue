<script lang="ts" setup>
  import { ref } from 'vue'
  import type { TreeClickLabel } from 'fighting-design'

  const data = ref([
    {
      label: 'Node 1',
      value: 2121,
      disabled: true,
      children: [
        {
          label: 'Node 1-1',
          value: '今天好啊',
          children: [
            { label: 'Node 1-1-1' },
            { label: 'Node 1-1-2' },
            { label: 'Node 1-1-3' }
          ]
        },
        { label: 'Node 1-2' },
        {
          label: 'Node 1-3',
          children: [
            { label: 'Node 1-3-1' },
            { label: 'Node 1-3-2' },
            { label: 'Node 1-3-3' }
          ]
        }
      ]
    },
    {
      label: 'Node 2',
      children: [
        { label: 'Node 2-1' },
        { label: 'Node 2-2' },
        { label: 'Node 2-3', children: [{ label: 'Node 2-3-1' }] }
      ]
    },
    {
      label: 'Node 3'
    }
  ])

  const onClickLabel: TreeClickLabel = (e, v, r, d) => {
    // console.log(v, r, d)
  }

  const check = ref([])
</script>

<template>
  {{ check }}
  <f-tree v-model:check="check" :offset="10" is-check :data="data" :on-click-label="onClickLabel">
    <!-- <template #options>
      <f-space>
        <f-button size="mini" round type="danger">删除</f-button>
        <f-button size="mini" round type="info">查看</f-button>
      </f-space>
    </template> -->
  </f-tree>

  <!-- {{ option1 }} - {{ option2 }}
  <f-checkbox-group v-model="option2">
    <f-checkbox v-model="option1" label="酸辣土豆丝" :show-label="false" />
  </f-checkbox-group> -->
</template>
