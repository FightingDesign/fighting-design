<script lang="ts" setup>
  import { inject, computed } from 'vue'
  import { PROGRESS_PROPS_KEY } from '../../src/props'
  import { useList } from '../../../_hooks'
  import type { ProgressProvide } from '../../index'
  import type { CSSProperties } from 'vue'

  defineOptions({ name: 'FProgressLine' })

  /** 父组件注入的依赖项 */
  const params = inject(PROGRESS_PROPS_KEY) as ProgressProvide

  const { classes, styles } = useList(params, 'progress')

  /** 类名列表 */
  const classList = classes(['type', 'stripe', 'state'], 'f-progress')

  /** 样式列表 */
  const style = styles(['height', 'color', 'textColor', 'background'])

  /* 进度条进度 */
  const barstyle = computed((): CSSProperties => {
    return { '--progress-width': `${params.percent}%` } as const
  })
</script>

<template>
  <div
    role="progressbar"
    :class="classList"
    :style="[style, barstyle]"
    :aria-value="params.percent"
    :aria-valuemin="0"
    :aria-valuemax="100"
  >
    <!-- 进度条底色 -->
    <div class="f-progress__bar">
      <!-- 进度条 -->
      <div class="f-progress__fill">
        <!-- 显示在内部的百分比文字 -->
        <div v-if="!params.outsideText && params.showText" class="f-progress__percentage">
          {{ params.percent }}%
        </div>
      </div>
    </div>

    <!-- 显示在外部的百分比文字 -->
    <div v-if="params.outsideText && params.showText" class="f-progress__text">
      {{ params.percent }}%
    </div>
  </div>
</template>
