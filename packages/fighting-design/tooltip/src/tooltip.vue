<script lang="ts" setup name="FTooltip">
  import { Props } from './props'
  import { computed } from 'vue'
  import type { CSSProperties } from 'vue'
  import type { ClassList } from '../../_interface'

  const prop = defineProps(Props)

  /**
   * 类名列表
   */
  const classList = computed((): ClassList => {
    const { position, state, disabled, bold, noArrow, bright } = prop

    return [
      'f-tooltip',
      {
        [`f-tooltip__${position}`]: position,
        [`f-tooltip__${state}`]: state,
        'f-tooltip__disabled ': disabled,
        'f-tooltip__bold': bold,
        'f-tooltip__no-arrow': noArrow,
        'f-tooltip__bright': bright
      }
    ] as const
  })

  /**
   * 样式列表
   */
  const styleList = computed((): CSSProperties => {
    const { background, fontColor } = prop

    return {
      '--f-tooltip-background': background,
      '--f-tooltip-font-color': fontColor
    } as CSSProperties
  })
</script>

<template>
  <div v-if="$slots.default" :f-content="content" :class="classList" :style="styleList">
    <slot />
  </div>
</template>
