<script lang="ts" setup class="FMain">
  import { Props } from './main'
  import { computed } from 'vue'
  import { sizeChange } from '../../_utils'
  import type { CSSProperties, ComputedRef } from 'vue'

  const prop = defineProps(Props)

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { padding } = prop

    return {
      '--f-main-padding': sizeChange(padding)
    } as const
  })
</script>

<template>
  <main role="main" class="f-main" :style="styleList">
    <slot />
  </main>
</template>
