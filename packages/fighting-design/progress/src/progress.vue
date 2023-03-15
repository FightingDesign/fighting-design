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
</script>

<template>
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
