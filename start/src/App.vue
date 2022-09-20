<script lang="ts" setup>
  // const data = [
  //   {
  //     label: 'Node 1',
  //     children: [
  //       {
  //         label: 'Node 1-1',
  //         children: [
  //           { label: 'Node 1-1-1' },
  //           { label: 'Node 1-1-2' },
  //           { label: 'Node 1-1-3' }
  //         ]
  //       },
  //       { label: 'Node 1-2' },
  //       { label: 'Node 1-3' }
  //     ]
  //   },
  //   { label: 'Node 2' }
  // ]
  const date = new Date()
</script>

<template>
  <f-calendar v-model:date="date" lunar />
  <!-- <f-tree :data="data" /> -->
</template>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
</style>
