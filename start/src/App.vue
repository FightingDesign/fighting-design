<script lang="ts" setup>
  import { ref } from 'vue'

  const data = ref([
    {
      label: 'Node 1',
      children: [
        {
          label: 'Node 1-1',
          children: [{ label: 'Node 1-1-1' }, { label: 'Node 1-1-2' }, { label: 'Node 1-1-3' }]
        },
        { label: 'Node 1-2' },
        { label: 'Node 1-3' }
      ]
    },
    { label: 'Node 2' }
  ])
</script>

<template>
  <f-tree :data="data" />
</template>
