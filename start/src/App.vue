<script lang="ts" setup>
  import { h, ref } from 'vue'
  import { FIconAppsMinus } from '@fighting-design/fighting-icon'
  import type { TreeClickLabel } from 'fighting-design'

  const data = ref([
    {
      label: 'Node 1',
      value: 2121,
      icon: h(FIconAppsMinus),
      children: [
        {
          label: 'Node 1-1',
          value: '今天好啊',
          children: [
            { label: 'Node 1-1-1', icon: FIconAppsMinus },
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
    console.log(v, r, d)
  }

  const check = ref([])
</script>

<template>
  {{ check }}
  <f-button :after-icon="FIconAppsMinus"></f-button>
  <f-tree
    v-model:check="check"
    :offset="50"
    is-check
    :data="data"
    :on-click-label="onClickLabel"
  >
    <!-- <template #options>
      <f-space>
        <f-button size="mini" round type="danger">删除</f-button>
        <f-button size="mini" round type="info">查看</f-button>
      </f-space>
    </template> -->
  </f-tree>
</template>
