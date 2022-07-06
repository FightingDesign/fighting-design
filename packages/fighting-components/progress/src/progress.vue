<script lang="ts" setup name="FProgress">
  import { Props } from './progress'
  import { computed, ref } from 'vue'
  import type { CSSProperties, ComputedRef, Ref } from 'vue'

  const prop = defineProps(Props)

  const progressStyle: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
      const { background, width, height, square } = prop

      return {
        width,
        height,
        background,
        borderRadius: square ? '0px' : '100px'
      }
    }
  )

  const progressFillStyle: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
      const { percentage, color, square } = prop

      return {
        width: `${percentage}%`,
        background: color,
        borderRadius: square ? '0px' : '100px'
      }
    }
  )
  const MIN_SHOW_TEXT_HEI = 14
  const fillRef: Ref<HTMLElement | undefined> = ref<HTMLElement>()
  const fillHeight: ComputedRef<number> = computed(() => {
    return fillRef.value?.clientHeight || 25
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
      :class="['f-progress-fill', `f-progress-fill-${type}`]"
      :style="progressFillStyle"
    >
      <div
        v-if="showText && fillHeight >= MIN_SHOW_TEXT_HEI"
        :style="`line-height:${fillHeight}px;`"
        class="f-progress-per-num"
      >
        {{ percentage }}%
      </div>
    </div>
  </div>
</template>
