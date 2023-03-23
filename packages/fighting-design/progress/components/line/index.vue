<script lang="ts" setup>
  import { inject, computed } from 'vue'
  import { PROGRESS_PROPS_KEY } from '../../src/props'
  import { useList } from '../../../_hooks'
  import { isNumber } from '../../../_utils'
  import type { ProgressProps } from '../../index'
  import type { CSSProperties } from 'vue'

  const prop = inject(PROGRESS_PROPS_KEY) as ProgressProps

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
  <div
    role="progressbar"
    :class="classList"
    :style="styleList"
    :aria-value="percentageNum"
    :aria-valuemin="0"
    :aria-valuemax="100"
  >
    <!-- 进度条底色 -->
    <div class="f-progress__bar">
      <!-- 进度条 -->
      <div class="f-progress__fill" :style="barStyleList">
        <!-- 百分百文字 -->
        <div v-if="!prop.outsideText && prop.showText" class="f-progress__percentage">
          {{ percentageNum }}%
        </div>
      </div>
    </div>

    <!-- 外部进度数值显示 -->
    <div v-if="prop.outsideText && prop.showText" class="f-progress__text">
      {{ percentageNum }}%
    </div>
  </div>
</template>
