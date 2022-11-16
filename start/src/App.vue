<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref(2)
</script>

<template>
  <f-select v-model="value1" placeholder="请选择……">
    <f-option label="香蕉" :value="1">香蕉</f-option>
    <f-option :value="2"></f-option>
    <f-option label="哈密瓜" :value="3">哈密瓜</f-option>
    <f-option label="樱桃" :value="4">樱桃</f-option>
  </f-select>
</template>
