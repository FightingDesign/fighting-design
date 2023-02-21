<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref('')
</script>

<template>
  <f-select v-model="value" placeholder="请选择……">
    <f-option label="香蕉" :value="1"></f-option>
    <f-option :value="2">苹果</f-option>
    <f-option :value="3"></f-option>
    <f-option label="樱桃">樱桃</f-option>
  </f-select>
</template>
