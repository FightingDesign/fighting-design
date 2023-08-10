<script lang="ts" setup>
  import { ref } from 'vue'

  const radio4 = ref('1')
</script>

<template>
  <f-radio-group v-model="radio4" background size="large">
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3</f-radio>
  </f-radio-group>
  <br />
  <br />

  <f-radio-group v-model="radio4" background size="middle">
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3</f-radio>
  </f-radio-group>
  <br />
  <br />

  <f-radio-group v-model="radio4" background size="small">
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3</f-radio>
  </f-radio-group>
  <br />
  <br />

  <f-radio-group v-model="radio4" background size="mini">
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3</f-radio>
  </f-radio-group>
</template>
