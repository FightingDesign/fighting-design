<script lang="ts" setup>
  import { ref } from 'vue'
  const value = ref('')

  // setTimeout(() => {
  //   value.value = '1'
  //   setTimeout(() => {
  //     value.value = '3'
  //     setTimeout(() => {
  //       value.value = ''
  //     }, 1000)
  //   }, 1000)
  // }, 1000)
</script>

<template>
  <!-- <f-input v-model="value" clear></f-input> -->
  <h1>{{ value || '无' }}</h1>
  <f-select v-model="value" placeholder="请选择……" filter>
    <f-option value="1">香蕉</f-option>
    <f-option value="2">苹果</f-option>
    <f-option value="3">哈密瓜</f-option>
    <f-option value="4">樱桃</f-option>
  </f-select>
</template>
