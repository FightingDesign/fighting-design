<script lang="ts" setup name="FProgress">
  import { Props } from './props'
  import { sizeChange } from '../../_utils'
  import { computed, ref, onMounted } from 'vue'
  import type { CSSProperties, Ref } from 'vue'

  const prop = defineProps(Props)

  /** 是否展示百分比 */
  const isPercentage = ref<boolean>(false)

  /** 元素节点 */
  const fillEl: Ref<HTMLDivElement | null> = ref(null)

  /** 进度条样式列表 */
  const progressStyle = computed((): CSSProperties => {
    const { background, height, square } = prop

    return {
      height: sizeChange(height),
      background,
      borderRadius: square ? '0px' : '100px'
    } as const
  })

  /** 百分比样式列表 */
  const progressFillStyle = computed((): CSSProperties => {
    const { percentage, color, square } = prop

    return {
      width: `${percentage}%`,
      background: color,
      borderRadius: square ? '0px' : '100px'
    } as const
  })

  /** 是否展示百分比 */
  const isShowPercentage = (): boolean => {
    return (isPercentage.value = (fillEl.value as HTMLDivElement).clientHeight >= 18 && prop.textInside)
  }

  onMounted((): void => {
    isShowPercentage()
  })
</script>

<template>
  <div
    role="progressbar"
    :class="['f-progress', { 'f-progress__liner': linear }]"
    :style="{ width: sizeChange(width) }"
    :aria-value="percentage"
    :aria-valuemin="0"
    :aria-valuemax="100"
  >
    <div class="f-progress__bar" :style="progressStyle">
      <div
        ref="fillEl"
        :class="[
          'f-progress__fill',
          {
            [`f-progress__fill-${type}`]: type,
            'f-progress__stripe': stripe
          }
        ]"
        :style="progressFillStyle"
      >
        <span v-if="isPercentage && showText" class="f-progress__percentage" :style="{ color: textColor }">
          {{ percentage }}%
        </span>
      </div>
    </div>
    <div v-if="!isPercentage && showText" class="f-progress__text">{{ percentage }}%</div>
  </div>
</template>
