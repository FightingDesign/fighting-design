<template>
  <f-button
    :loading="isLoading"
    icon="f-icon-filter-fill"
    loadingIcon="f-icon-loading"
    type="primary"
    iconPosition="left"
  >
    1212
  </f-button>
  <f-button loadingIcon="f-icon-loading1" type="info" @click="change"
    >1212</f-button
  >
  <f-button loadingIcon="f-icon-loading2">哈哈哈哈</f-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const isLoading = ref(false)
function change() {
  isLoading.value = !isLoading.value
}
</script>

<style scoped>
div {
  color: skyblue;
}
</style>
