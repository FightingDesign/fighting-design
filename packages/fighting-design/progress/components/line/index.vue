<script lang="ts" setup>
  import { inject, computed } from 'vue'
  import { PROGRESS_PROPS_KEY } from '../../src/props'
  import { useList } from '../../../_hooks'
  import type { ProgressProvide } from '../../index'
  import type { CSSProperties } from 'vue'

  const prop = inject(PROGRESS_PROPS_KEY) as ProgressProvide

  const { classes, styles } = useList(prop, 'progress')

  /** 类名列表 */
  const classList = classes(['type', 'stripe'], 'f-progress')

  /** 样式列表 */
  const styleList = styles(['height', 'color', 'textColor', 'background'])

  /* 进度条进度 */
  const barStyleList = computed((): CSSProperties => {
    return { '--progress-width': `${prop.percent}%` } as const
  })
</script>

<template>
  <div
    role="progressbar"
    :class="classList"
    :style="[styleList, barStyleList]"
    :aria-value="prop.percent"
    :aria-valuemin="0"
    :aria-valuemax="100"
  >
    <!-- 进度条底色 -->
    <div class="f-progress__bar">
      <!-- 进度条 -->
      <div class="f-progress__fill">
        <!-- 百分百文字 -->
        <div v-if="!prop.outsideText && prop.showText" class="f-progress__percentage">
          {{ prop.percent }}%
        </div>
      </div>
    </div>

    <!-- 外部进度数值显示 -->
    <div v-if="prop.outsideText && prop.showText" class="f-progress__text">
      {{ prop.percent }}%
    </div>
  </div>
</template>
