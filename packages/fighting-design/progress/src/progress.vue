<script lang="ts" setup name="FProgress">
  import { Props } from './progress'
  import { sizeChange } from '../../_utils'
  import { computed, ref, onMounted } from 'vue'
  import type { CSSProperties, ComputedRef, Ref } from 'vue'
  import type { isShowPercentageInterface as a } from './interface'

  const prop = defineProps(Props)

  const isShow: Ref<boolean> = ref<boolean>(false)
  const fillRef: Ref<HTMLDivElement> = ref<HTMLDivElement>(
    null as unknown as HTMLDivElement
  )

  const progressStyle: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
      const { background, height, square } = prop

      return {
        height: sizeChange(height),
        background,
        borderRadius: square ? '0px' : '100px'
      } as const
    }
  )

  const progressFillStyle: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
      const { percentage, color, square } = prop

      return {
        width: `${percentage}%`,
        background: color,
        borderRadius: square ? '0px' : '100px'
      } as const
    }
  )

  const isShowPercentage: a = (): boolean => {
    return (isShow.value = fillRef.value.clientHeight >= 18 && prop.textInside)
  }

  onMounted((): void => {
    isShowPercentage()
  })
</script>

<template>
  <div
    role="progressbar"
    :class="['f-progress', { 'f-progress-liner': linear }]"
    :style="{ width: sizeChange(width) }"
    :aria-value="percentage"
    :aria-valuemin="0"
    :aria-valuemax="100"
  >
    <div class="f-progress-bar" :style="progressStyle">
      <div
        ref="fillRef"
        :class="[
          'f-progress-fill',
          `f-progress-fill-${type}`,
          { 'f-progress-stripe': stripe }
        ]"
        :style="progressFillStyle"
      >
        <span
          v-if="isShow && showText"
          class="f-progress-percentage"
          :style="{ color: textColor }"
        >
          {{ percentage }}%
        </span>
      </div>
    </div>
    <div v-if="!isShow && showText" class="f-progress-text">
      {{ percentage }}%
    </div>
  </div>
</template>
