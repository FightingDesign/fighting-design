<script lang="ts" setup>
  import { ref } from 'vue'
  const value1 = ref('')
</script>

<template>
  <f-input v-model="value1" search type="text" placeholder="请输入....">
  </f-input>
</template>

<style lang="scss" scoped></style>
