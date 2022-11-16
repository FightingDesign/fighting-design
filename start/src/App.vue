<script lang="ts" setup>
  import { ref } from 'vue'

  const open1 = ref(false)
</script>

<template>
  <f-sticky-card :open="open1">
    <template #source>
      <p>展示</p>
      <p>展示</p>
      <p>展示</p>
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
