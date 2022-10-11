<script lang="ts" setup name="FFooter">
  import { Props } from './footer'
  import { computed } from 'vue'
  import { sizeChange } from '../../_utils'
  import type { CSSProperties, ComputedRef } from 'vue'

  const prop = defineProps(Props)

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { height, padding } = prop

    return {
      '--f-footer-height': sizeChange(height),
      '--f-footer-padding': sizeChange(padding)
    } as const
  })
</script>

<template>
  <footer class="f-footer" :style="styleList">
    <slot />
  </footer>
</template>
