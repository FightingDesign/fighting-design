<script lang="ts" setup name="FProgress">
  import { Props } from './props'
  import { sizeChange } from '../../_utils'
  import { computed, ref, onMounted } from 'vue'
  import type { CSSProperties } from 'vue'

  const prop = defineProps(Props)

  const isShow = ref<boolean>(false)
  const fillRef = ref<HTMLDivElement>(null as unknown as HTMLDivElement)

  const progressStyle = computed((): CSSProperties => {
    const { background, height, square } = prop

    return {
      height: sizeChange(height),
      background,
      borderRadius: square ? '0px' : '100px'
    } as const
  })

  const progressFillStyle = computed((): CSSProperties => {
    const { percentage, color, square } = prop

    return {
      width: `${percentage}%`,
      background: color,
      borderRadius: square ? '0px' : '100px'
    } as const
  })

  const isShowPercentage = (): boolean => {
    return (isShow.value = fillRef.value.clientHeight >= 18 && prop.textInside)
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
        ref="fillRef"
        :class="[
          'f-progress__fill',
          {
            [`f-progress__fill-${type}`]: type,
            'f-progress__stripe': stripe
          }
        ]"
        :style="progressFillStyle"
      >
        <span
          v-if="isShow && showText"
          class="f-progress__percentage"
          :style="{ color: textColor }"
        >
          {{ percentage }}%
        </span>
      </div>
    </div>
    <div v-if="!isShow && showText" class="f-progress__text">
      {{ percentage }}%
    </div>
  </div>
</template>
