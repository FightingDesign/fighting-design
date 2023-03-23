<script lang="ts" setup>
  import { inject, computed } from 'vue'
  import { PROGRESS_PROPS_KEY } from '../../src/props'
  import type { ProgressProps } from '../../index'
  import type { CSSProperties } from 'vue'

  const prop = inject(PROGRESS_PROPS_KEY) as ProgressProps

  /** 半径 */
  const radius = computed((): number => prop.diameter / 2)

  /** 周长 */
  const girth = computed((): number => {
    return (radius.value - 25) * 2 * Math.PI
  })

  /** 当前周长进度 */
  const girthSize = computed((): number => {
    /** 偏移量 */
    const offset: number = girth.value - girth.value * (prop.percentage / 100)

    /** 如果小于等于 0 了，说明到 100% 进度了 */
    if (offset <= 0) {
      return 0
    }

    /** 如果大于等于周长了，说明到 0% 进度了 */
    if (offset > girth.value) {
      return girth.value
    }

    return offset
  })

  /** svg 样式列表 */
  const svgStyleList = computed((): CSSProperties => {
    return {
      '--progress-stroke-dasharray': girth.value,
      '--progress-stroke-dashoffset': girthSize.value
    } as CSSProperties
  })

  /** 百分比进度 */
  const percentageNum = computed((): number => {
    if (prop.percentage >= 100) {
      return 100
    }
    if (prop.percentage <= 0) {
      return 0
    }

    return prop.percentage
  })
</script>

<template>
  <svg
    role="progressbar"
    class="f-progress__circle"
    :width="prop.diameter"
    :height="prop.diameter"
    :style="svgStyleList"
    :aria-value="percentageNum"
    :aria-valuemin="0"
    :aria-valuemax="100"
  >
    <circle
      class="f-progress__girth"
      fill="transparent"
      stroke-width="12"
      stroke="green"
      :cx="radius"
      :cy="radius"
      :r="radius - 25"
    />
    <text
      font-size="24"
      fill="grey"
      text-anchor="middle"
      alignment-baseline="middle"
      :x="radius"
      :y="radius"
    >
      {{ percentageNum }}%
    </text>
  </svg>
</template>
