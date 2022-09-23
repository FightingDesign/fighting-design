<script lang="ts" setup>
  const data = [
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
    { label: 'Node 2', children: [{ label: 'Node 2-1' }] }
  ]
</script>

<template>
  <f-tree :data="data" />
</template>
