<script lang="ts" setup>
  import { ref } from 'vue'

  const option2 = ref(['汉堡'])

  const value = ref<boolean>('123')
</script>

<template>
  <input v-model="value" type="checkbox" />

  <!-- <input v-model="abc" type="text" /> -->
  <!-- <f-checkbox v-model="option1" label="酸辣土豆丝" />
  <f-checkbox v-model="option1" label="酸辣土豆丝" />
  <f-checkbox v-model="option1" label="酸辣土豆丝" /> -->

  <f-checkbox-group v-model="option2" disabled>
    <f-checkbox label="鸡肉卷" />
    <f-checkbox label="鸡排" />
    <f-checkbox label="汉堡" />
  </f-checkbox-group>
</template>

<style lang="scss" scoped></style>
