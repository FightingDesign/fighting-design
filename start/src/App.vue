<script lang="ts" setup>
  import { h, ref } from 'vue'
  import CloseIconVue from '../../packages/fighting-design/_components/svg/f-icon-cross.vue'
  const value9 = ref(true)

  const onChange = (target: boolean): void => {
    console.log(target)
  }
</script>

<template>
  <f-switch v-model="value9" :icon="h(CloseIconVue)" @change="onChange" />
</template>

<style lang="scss" scoped></style>
