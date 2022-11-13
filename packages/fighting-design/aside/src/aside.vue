<script lang="ts" setup name="FAside">
  import { Props } from './props'
  import { computed } from 'vue'
  import { sizeChange } from '../../_utils'
  import type { CSSProperties, ComputedRef } from 'vue'
  import type { AsidePropsType } from './props'

  const prop: AsidePropsType = defineProps(Props)

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { width, padding } = prop

    return {
      '--f-aside-width': sizeChange(width),
      '--f-aside-padding': sizeChange(padding)
    } as CSSProperties
  })
</script>

<template>
  <aside class="f-aside" :style="styleList">
    <slot />
  </aside>
</template>
