<script lang="ts" setup>
  import { Props } from './footer'
  import { computed } from 'vue'
  import { isString } from '../../_utils'
  import type { CSSProperties, ComputedRef } from 'vue'

  const prop = defineProps(Props)

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { height, padding } = prop

    return {
      height: isString(height) ? height : height + 'px',
      padding: isString(padding) ? padding : padding + 'px'
    } as const
  })
</script>

<script lang="ts">
  export default {
    name: 'FFooter'
  }
</script>

<template>
  <footer class="f-footer" :style="styleList">
    <slot />
  </footer>
</template>
