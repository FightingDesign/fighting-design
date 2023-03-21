<script lang="ts" setup>
  import { ref } from 'vue'

  const radio4 = ref('1')
</script>

<template>
  <f-radio-group v-model="radio4" size="large" vertical>
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3</f-radio>
  </f-radio-group>

  <f-radio-group v-model="radio4" border size="middle">
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3</f-radio>
  </f-radio-group>

  <f-radio-group v-model="radio4" border size="small">
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3</f-radio>
  </f-radio-group>

  <f-radio-group v-model="radio4" border size="mini">
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3</f-radio>
  </f-radio-group>
</template>

<style>
  .f-radio-group {
    margin-bottom: 20px;
  }

  * {
    margin: 0;
    padding: 0;
  }
</style>
