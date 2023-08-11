<!--
一个可以递归渲染自己的嵌套树组件。
你可以双击一个项目将其转变为一个文件夹。
-->

<script lang="ts" setup>
  import { ref } from 'vue'
  import TreeItem from './TreeItem.vue'

  const treeData = ref({
    name: 'My Tree',
    children: [
      { name: 'hello', children: [{ name: '123' }] },
      { name: 'world' },
      {
        name: 'child folder',
        children: [
          {
            name: 'child folder',
            children: [{ name: 'hello' }, { name: 'world' }]
          },
          { name: 'hello' },
          { name: 'world' },
          {
            name: 'child folder',
            children: [{ name: 'hello' }, { name: 'world' }]
          }
        ]
      }
    ]
  })
</script>

<template>
  <ul>
    <tree-item class="item" :model="treeData"></tree-item>
    <tree-item class="item" :model="treeData"></tree-item>
  </ul>
</template>

<style>
  .item {
    cursor: pointer;
    line-height: 1.5;
  }
  .bold {
    font-weight: bold;
  }
</style>
