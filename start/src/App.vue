<template>
  {{ value }}
  <f-select v-model="value" placeholder="请选择……" filter>
    <f-option>香蕉</f-option>
    <f-option>苹果</f-option>
    <f-option>哈密瓜</f-option>
    <f-option>樱桃</f-option>
  </f-select>

  <!-- <f-input v-model="value1" :on-input="inp"></f-input> -->
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref('')
  const value1 = ref('')

  const inp = (v, e) => {
    console.log(v, e)
  }
</script>
