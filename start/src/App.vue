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
    { label: 'Node 2' }
  ]
  // const date = new Date()
</script>

<template>
  <f-tree :data="data" />
  <!-- <f-calendar v-model:date="date" lunar square show-footer /> -->
</template>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
</style>
