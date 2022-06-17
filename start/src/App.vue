<template>
  <div style="height: 120vh"></div>
  <f-switch v-model="value7" close-text="关闭" open-text="开启" />
  <f-backtop>
    <span>UP</span>
  </f-backtop>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const value7 = ref(true)
</script>

<style scoped></style>
