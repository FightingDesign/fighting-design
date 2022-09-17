<script lang="ts" setup>
  const data = [
    {
      label: 'Parent node 1',
      children: [
        {
          label: 'Parent node 1-1',
          children: [{ label: 'Leaf node 1-1-1' }]
        },
        { label: 'Leaf node 1-2' }
      ]
    },
    { label: 'Leaf node 2' }
  ]
</script>

<template>
  <f-tree :data="data" />
</template>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
</style>
