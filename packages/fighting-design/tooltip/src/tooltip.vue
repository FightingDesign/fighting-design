<script lang="ts" setup name="FTooltip">
  import { Props } from './tooltip'
  import { computed } from 'vue'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { classListInterface as a } from '../../_interface'

  const prop = defineProps(Props)

  const classList: ComputedRef<a> = computed((): a => {
    const { position, state, disabled, bold, noArrow, bright } = prop

    return [
      'f-tooltip',
      `f-tooltip-${position}`,
      `f-tooltip-${state}`,
      {
        'f-tooltip-disabled ': disabled,
        'f-tooltip-bold': bold,
        'f-tooltip-no-arrow': noArrow,
        'f-tooltip-bright': bright
      }
    ] as const
  })

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { background, fontColor } = prop

    return {
      '--f-tooltip-background': background,
      '--f-tooltip-font-color': fontColor
    } as const
  })
</script>

<template>
  <div
    v-if="$slots.default"
    :f-content="content"
    :class="classList"
    :style="styleList"
  >
    <slot />
  </div>
</template>
