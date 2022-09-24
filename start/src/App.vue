<script lang="ts" setup>
  import { ref } from 'vue'

  const open1 = ref(false)
</script>

<template>
  <f-sticky-card :open="open1">
    <template #source>
      <div>Hello World！</div>
      <div>Hello World！</div>
      <div>Hello World！</div>
      <div>Hello World！</div>
    </template>
    <h1>Hello World！</h1>
    <h1>Hello World！</h1>
    <h1>Hello World！</h1>
    <h1>Hello World！</h1>
    <h1>Hello World！</h1>
    <h1>Hello World！</h1>
    <h1>Hello World！</h1>
    <h1>Hello World！</h1>
  </f-sticky-card>
</template>

<style scoped>
  dt {
    background: skyblue;
    height: 30px;
    position: sticky;
    top: 0;
  }
  dd {
    height: 30px;
    border: 1px solid black;
  }
</style>
