<script lang="ts" setup>
  import { ref } from 'vue'

  const radio5 = ref('1')
</script>

<template>
  <f-radio-group v-model="radio5">
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3</f-radio>
  </f-radio-group>

  <br />
  <br />
  <br />
  <br />

  <f-radio-group v-model="radio5" background>
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3</f-radio>
  </f-radio-group>

  <br />
  <br />
  <br />

  <f-radio-group v-model="radio5" vertical>
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3</f-radio>
  </f-radio-group>

  <br />
  <br />
  <br />
  <br />

  <f-radio-group v-model="radio5" vertical>
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3哈哈哈哈</f-radio>
  </f-radio-group>

  <br />
  <br />
  <br />
  <br />

  <f-radio-group v-model="radio5" vertical background>
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3哈哈哈哈</f-radio>
  </f-radio-group>
</template>
