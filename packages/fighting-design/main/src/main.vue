<script lang="ts" setup>
  import { Props } from './main'
  import { computed } from 'vue'
  import { sizeChange } from '../../_utils'
  import type { CSSProperties, ComputedRef } from 'vue'

  const prop = defineProps(Props)

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { padding } = prop

    return {
      padding: sizeChange(padding)
    } as const
  })
</script>

<script lang="ts">
  export default {
    name: 'FMain'
  }
</script>

<template>
  <main class="f-main" :style="styleList">
    <slot />
  </main>
</template>
