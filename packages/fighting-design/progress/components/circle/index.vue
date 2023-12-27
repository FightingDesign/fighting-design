<script lang="ts" setup>
  import { inject, computed } from 'vue'
  import { PROGRESS_PROPS_KEY } from '../../src/props'
  import { isNumber } from '../../../_utils'
  import { useList } from '../../../_hooks'
  import { PROGRESS_CIRCLE_PADDING } from '../../../_tokens'
  import type { ProgressProvide } from '../../index'
  import type { CSSProperties } from 'vue'

  defineOptions({ name: 'FProgressCircle' })

  /** 父组件注入的依赖项 */
  const params = inject(PROGRESS_PROPS_KEY) as ProgressProvide

  const { classes } = useList(params, 'progress')

  /** 类名列表 */
  const classList = classes(['type', 'state'], 'f-progress')

  /** 半径 */
  const radius = computed((): number => {
    if (isNumber(params.diameter)) {
      return params.diameter / 2
    }

    return 100
  })

  /**
   * 周长
   *
   * @see Math.PI https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
   */
  const girth = computed((): number => {
    return (radius.value - PROGRESS_CIRCLE_PADDING) * 2 * Math.PI
  })

  /** 当前周长进度 */
  const girthSize = computed((): number => {
    /** 偏移量 */
    const offset: number = girth.value - girth.value * (params.percentage / 100)

    // 如果小于等于 0 了，说明到 100% 进度了
    if (offset <= 0) {
      return 0
    }

    // 如果大于等于周长了，说明到 0% 进度了
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
</script>

<template>
  <svg
    role="progressbar"
    :class="classList"
    :width="params.diameter"
    :height="params.diameter"
    :style="svgStyleList"
    :aria-value="params.percent"
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
      :r="radius - PROGRESS_CIRCLE_PADDING"
    />
    <text
      v-if="params.showText"
      font-size="24"
      fill="grey"
      text-anchor="middle"
      alignment-baseline="middle"
      :x="radius"
      :y="radius"
    >
      {{ params.percent }}%
    </text>
  </svg>
</template>
