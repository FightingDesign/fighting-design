<script lang="ts" setup name="FProgress">
  import { Props, Emits } from './progress'
  import { computed, ref, onMounted, watchEffect } from 'vue'
  import type { CSSProperties, ComputedRef, Ref } from 'vue'
  import type { isShowPercentageInterface } from './interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const isShow: Ref<boolean> = ref<boolean>(false)
  const fillRef: Ref<HTMLDivElement> = ref<HTMLDivElement>(
    null as unknown as HTMLDivElement
  )

  const progressStyle: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
      const { background, width, height, square } = prop

      return {
        width,
        height: `${height}px`,
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

  const isShowPercentage: isShowPercentageInterface = (): boolean => {
    return (isShow.value = fillRef.value.clientHeight >= 15)
  }

  onMounted((): void => {
    isShowPercentage()
  })

  watchEffect((): void => {
    if (prop.percentage === 100) {
      emit('fill-end')
    }
  })
</script>

<template>
  <div
    :class="['f-progress', { 'f-progress-liner': linear }]"
    :style="progressStyle"
    :aria-value="percentage"
    :aria-valuemin="0"
    :aria-valuemax="100"
    role="progressbar"
  >
    <div
      ref="fillRef"
      :class="[
        'f-progress-fill',
        `f-progress-fill-${type}`,
        { 'f-progress-stripe': stripe }
      ]"
      :style="progressFillStyle"
    >
      <div v-if="isShow" class="f-progress-percentage">{{ percentage }}%</div>
    </div>
  </div>
</template>
