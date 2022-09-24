<script lang="ts" setup>
  const openEnd = (target: boolean): string => {
    console.log(target)
    return '1'
  }
</script>

<template>
  <h1>1111</h1>
  <h1>1111</h1>
  <h1>1111</h1>
  <h1>1111</h1>
  <h1>1111</h1>
  <h1>1111</h1>
  <h1>1111</h1>
  <h1>1111</h1>
  <h1>1111</h1>
  <f-sticky-card :open="false" sticky-bottom="40px" :open-end="openEnd">
    <template #option-right> 复制代码 复制代码 复制代码 </template>
    <template #option-left> 复制代码 复制代码 复制代码 </template>
    <div>这是一段代码格式</div>
    <div>这是一段代码格式</div>
    <div>这是一段代码格式</div>
    <div>这是一段代码格式</div>
    <div>这是一段代码格式</div>
    <div>这是一段代码格式</div>
    <div>这是一段代码格式</div>
    <div>这是一段代码格式</div>
    <div>这是一段代码格式</div>
    <div>这是一段代码格式</div>
    <div>这是一段代码格式</div>
    <div>这是一段代码格式</div>
    <div>这是一段代码格式</div>
    <div>这是一段代码格式</div>
    <div>这是一段代码格式</div>
    <div>这是一段代码格式</div>
    <div>这是一段代码格式</div>
    <div>这是一段代码格式</div>
    <h1>1111</h1>
    <h1>1111</h1>
    <h1>1111</h1>
    <h1>1111</h1>
    <h1>1111</h1>
    <h1>1111</h1>
    <h1>1111</h1>
    <h1>1111</h1>
  </f-sticky-card>
  <h1>1111</h1>
  <h1>1111</h1>
  <h1>1111</h1>
  <h1>1111</h1>
  <h1>1111</h1>
  <h1>1111</h1>
  <h1>1111</h1>
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
