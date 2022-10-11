<script lang="ts" setup>
  import { ref } from 'vue'

  const value3 = ref(2)
</script>

<template>
  <f-rate
    v-model="value3"
    half
    text-show
    :text-arr="['一', '二', '三', '四', '五']"
  />
</template>

<style lang="scss" scoped></style>
