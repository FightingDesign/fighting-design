<script lang="ts" setup name="FProgress">
  import type { CSSProperties } from 'vue'
  import { computed } from 'vue'
  import { Props, Emits } from './progress'

  const prop = defineProps(Props)

  defineEmits(Emits)

  const progressStyle = computed<CSSProperties>(() => {
    const { background, width, height, square } = prop

    return {
      width,
      height,
      background,
      borderRadius: square ? '0px' : '100px'
    }
  })

  const progressFillStyle = computed(() => {
    const { percentage, color, square } = prop

    return {
      width: `${percentage}%`,
      background: color,
      borderRadius: square ? '0px' : '100px'
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
      :class="['f-progress-fill', `f-progress-fill-${type}`]"
      :style="progressFillStyle"
    >
      <span v-if="showText && !linear" class="f-progress-per-num">
        {{ percentage }}%
      </span>
    </div>
  </div>
</template>
