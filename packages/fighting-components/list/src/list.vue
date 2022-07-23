<script lang="ts" setup name="FList">
  import { provide } from 'vue'
  import { Props, listPropsKey } from './list'

  const prop = defineProps(Props)

  provide(listPropsKey, prop)
</script>

<template>
  <ul class="f-list zebra">
    <slot name="header" />
    <slot />
    <slot name="footer" />
  </ul>
</template>
