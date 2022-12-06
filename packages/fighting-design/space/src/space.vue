<script lang="ts" setup name="FSpace">
  import { Props } from './props'
  import { computed } from 'vue'
  import type { CSSProperties } from 'vue'
  import type { ClassList } from '../../_interface'

  const prop = defineProps(Props)

  /**
   * 样式列表
   */
  const classList = computed((): ClassList => {
    const { wrap, vertical, spacing } = prop

    return [
      'f-space',
      {
        [`f-space__${spacing}`]: spacing,
        'f-space__wrap': wrap,
        'f-space__vertical': vertical
      }
    ] as const
  })

  /**
   * 类名列表
   */
  const styleList = computed((): CSSProperties => {
    const { rowGap, columnGap } = prop

    return { rowGap, columnGap } as const
  })
</script>

<template>
  <div v-if="$slots.default" :class="classList" :style="styleList">
    <slot />
  </div>
</template>
