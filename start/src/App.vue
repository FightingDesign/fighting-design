<template>
  <f-radio label="1" v-model="radio2" :change="change">备选项1</f-radio>
  <f-radio disabled label="2" v-model="radio2" :change="change"
    >备选项2</f-radio
  >
  <f-radio label="3" v-model="radio2" :change="change">备选项3</f-radio>

  <br />

  <f-radio-group v-model="radio2" :change="change">
    <f-radio label="1" disabled>备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3</f-radio>
  </f-radio-group>

  <f-radio-group v-model="radio2" border :change="change" disabled>
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3</f-radio>
  </f-radio-group>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const radio1 = ref('1')
  const radio2 = ref('1')

  function change(params) {
    console.log(params)
  }
</script>
