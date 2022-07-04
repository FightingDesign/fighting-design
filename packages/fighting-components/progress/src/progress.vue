<script lang="ts" setup name="FProgress">
  import { Props } from './progress'
  import { computed } from 'vue'
  import type { progressStyleInterface } from './interface'
  import type { ComputedRef } from 'vue'

  const prop = defineProps(Props)

  const progressStyle: ComputedRef<progressStyleInterface> = computed(
    (): progressStyleInterface => {
      const { background, width, height, square } = prop

      return {
        width,
        height,
        background,
        borderRadius: square ? '0px' : '100px'
      }
    }
  )

  const progressFillStyle: ComputedRef<progressStyleInterface> = computed(
    (): progressStyleInterface => {
      const { percentage, color, square } = prop

      return {
        width: `${percentage}%`,
        background: color,
        borderRadius: square ? '0px' : '100px'
      }
    }
  )
</script>

<template>
  <div
    :class="['f-progress', { 'f-progress-liner': linear }]"
    :style="progressStyle"
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
