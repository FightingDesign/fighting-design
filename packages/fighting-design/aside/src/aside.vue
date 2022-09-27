<script lang="ts" setup>
  import { Props } from './aside'
  import { computed } from 'vue'
  import { sizeChange } from '../../_utils'
  import type { CSSProperties, ComputedRef } from 'vue'

  const prop = defineProps(Props)

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { width, padding } = prop

    return {
      width: sizeChange(width),
      padding: sizeChange(padding)
    } as const
  })
</script>

<script lang="ts">
  export default {
    name: 'FAside'
  }
</script>

<template>
  <aside class="f-aside" :style="styleList">
    <slot />
  </aside>
</template>
