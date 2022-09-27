<script lang="ts" setup>
  import { Props } from './header'
  import { computed } from 'vue'
  import { sizeChange } from '../../_utils'
  import type { CSSProperties, ComputedRef } from 'vue'

  const prop = defineProps(Props)

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { height, padding } = prop

    return {
      height: sizeChange(height),
      padding: sizeChange(padding)
    } as const
  })
</script>

<script lang="ts">
  export default {
    name: 'FHeader'
  }
</script>

<template>
  <header class="f-header" :style="styleList">
    <slot />
  </header>
</template>
