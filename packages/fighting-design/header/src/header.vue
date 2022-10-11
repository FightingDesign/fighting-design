<script lang="ts" setup name="FHeader">
  import { Props } from './header'
  import { computed } from 'vue'
  import { sizeChange } from '../../_utils'
  import type { CSSProperties, ComputedRef } from 'vue'

  const prop = defineProps(Props)

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { height, padding } = prop

    return {
      '--f-header-height': sizeChange(height),
      '--f-header-padding': sizeChange(padding)
    } as const
  })
</script>

<template>
  <header class="f-header" :style="styleList">
    <slot />
  </header>
</template>
