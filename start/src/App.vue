<script lang="ts" setup>
  import { ref } from 'vue'

  const value2 = ref(false)
</script>

<template>
  <f-switch v-model="value2" />
  <f-alert :type="value2 ? 'default' : 'success'" center>成功提示信息</f-alert>
</template>

<style lang="scss" scoped></style>
