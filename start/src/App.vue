<script lang="ts" setup>
  function add () {
    console.log(111)
  }
</script>

<template>
  <f-dropdown>
    <f-button type="primary">主要按钮</f-button>

    <template #content>
      <f-dropdown-item>
        监督卡就看大家看到几点开始讲课的健康打算开店
      </f-dropdown-item>
      <f-dropdown-item disabled>选项2</f-dropdown-item>
      <f-dropdown-item :click="add">选项3</f-dropdown-item>
      <f-dropdown-item>选项4</f-dropdown-item>
    </template>
  </f-dropdown>
</template>
