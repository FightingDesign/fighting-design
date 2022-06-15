<template>
  <f-switch
    v-model="value"
    openText="打开"
    closeText="关闭"
    icon="f-icon-default-template"
    @change="aaaa"
  />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const value = ref(true)

  function aaaa(e) {
    console.log(e)
  }
</script>

<style scoped></style>
