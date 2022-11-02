<script lang="ts" setup>
  import { computed } from 'vue'

  const prop = defineProps({
    type: String
  })

  const classList = computed(() => prop.type + 'button')
</script>

<template>
  <button :class="`a-button ${classList}`">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
  .a-button {
    width: 100px;
    height: 40px;
    background: skyblue;
  }
</style>
