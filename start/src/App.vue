<template>
  <f-checkbox-group v-model="option2" :change="change">
    <f-checkbox label="鸡肉卷" />
    <f-checkbox label="鸡排" />
    <f-checkbox label="汉堡" />
  </f-checkbox-group>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const option2 = ref(['汉堡'])

  function change(e) {
    console.log(e)
  }
</script>
