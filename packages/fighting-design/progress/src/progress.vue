<script lang="ts" setup name="FProgress">
  import { Props } from './props'
  import { useList } from '../../_hooks'
  import { computed } from 'vue'
  import { isNumber } from '../../_utils'
  import type { CSSProperties } from 'vue'

  const prop = defineProps(Props)

  const { classes, styles } = useList(prop, 'progress')

  /** 类名列表 */
  const classList = classes(['type', 'stripe'], 'f-progress')

  /** 样式列表 */
  const styleList = styles(['height', 'color', 'textColor', 'background'])

  /* 进度条进度 */
  const barStyleList = computed((): CSSProperties => {
    const { percentage } = prop

    if (!isNumber(percentage)) {
      throw new TypeError('Fighting Design - progress: percentage is not a number')
    }

    return { width: `${prop.percentage}%` } as const
  })

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

    return offset
  })

  /** svg 样式列表 */
  const svgStyleList = computed((): CSSProperties => {
    return {
      '--stroke-dasharray': girth.value,
      '--stroke-dashoffset': girthSize.value
    } as CSSProperties
  })
</script>

<template>
  <!-- 圆形进度条 -->
  <template v-if="circle">
    <svg
      role="progressbar"
      class="f-progress__circle"
      :width="diameter"
      :height="diameter"
      :style="svgStyleList"
      :aria-value="percentage"
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
        class="f-progress__text"
        font-size="24"
        fill="grey"
        text-anchor="middle"
        alignment-baseline="middle"
        :x="radius"
        :y="radius"
      >
        {{ percentage }}%
      </text>
    </svg>
  </template>

  <!-- 普通进度条 -->
  <template v-else>
    <div
      role="progressbar"
      :class="classList"
      :style="styleList"
      :aria-value="percentage"
      :aria-valuemin="0"
      :aria-valuemax="100"
    >
      <!-- 进度条底色 -->
      <div class="f-progress__bar">
        <!-- 进度条 -->
        <div class="f-progress__fill" :style="barStyleList">
          <!-- 百分百文字 -->
          <div v-if="!outsideText && showText" class="f-progress__percentage">
            {{ percentage }}%
          </div>
        </div>
      </div>

      <!-- 外部进度数值显示 -->
      <div v-if="outsideText && showText" class="f-progress__text">{{ percentage }}%</div>
    </div>
  </template>
</template>
