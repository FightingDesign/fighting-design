<script lang="ts" setup>
  import { ref } from 'vue'

  const data = ref([
    {
      label: 'Node 1',
      children: [
        {
          label: 'Node 1-1',
          children: [
            { label: 'Node 1-1-1' },
            { label: 'Node 1-1-2' },
            { label: 'Node 1-1-3' }
          ]
        },
        { label: 'Node 1-2' },
        { label: 'Node 1-3' }
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
</script>

<template>
  <f-tree :data="data">
    <template #options>
      <f-space>
        <f-button size="mini" round type="danger">删除</f-button>
        <f-button size="mini" round type="info">查看</f-button>
      </f-space>
    </template>
  </f-tree>
</template>
