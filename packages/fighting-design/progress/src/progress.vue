<script lang="ts" setup name="FProgress">
  import { Props } from './progress'
  import { computed, ref, onMounted } from 'vue'
  import type { CSSProperties, ComputedRef, Ref } from 'vue'
  import type { isShowPercentageInterface as a } from './interface'
  import type { FPropsType } from './progress'

  const prop: FPropsType = defineProps(Props)

  const isShow: Ref<boolean> = ref<boolean>(false)
  const fillRef: Ref<HTMLDivElement> = ref<HTMLDivElement>(
    null as unknown as HTMLDivElement
  )

  const progressStyle: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
      const { background, height, square } = prop

      return {
        height,
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
    :class="['f-progress', { 'f-progress-liner': linear }]"
    :style="{ width: width }"
    :aria-value="percentage"
    :aria-valuemin="0"
    :aria-valuemax="100"
    role="progressbar"
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
