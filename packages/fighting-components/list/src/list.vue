<script lang="ts" setup name="FList">
  import { computed, provide } from 'vue'
  import { Props, Emits } from './list'

  const props = defineProps(Props)
  defineEmits(Emits)

  provide('list-style', computed((): string => props).value)
</script>

<template>
  <ul class="f-list zebra">
    <slot name="header" />
    <slot />
    <slot name="footer" />
  </ul>
</template>
