<script lang="ts" setup name="FProgress">
  import { Props } from './progress'
  import type { progressStyleInterface } from './interface'
  import type { ComputedRef } from 'vue'
  import { computed } from 'vue'

  const props = defineProps(Props)

  const progressStyle: ComputedRef<progressStyleInterface> = computed(
    (): progressStyleInterface => {
      const { background, width, height, square } = props
      console.log(square)
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
      const { percentage, color, square } = props
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
    :class="['f-progress', { 'f-progress-liner': props.linear }]"
    :style="progressStyle"
  >
    <div
      :class="['f-progress-fill', `f-progress-fill-${props.type}`]"
      :style="progressFillStyle"
    >
      <span v-if="props.showText && !props.linear" class="f-progress-per-num">
        {{ props.percentage }}%
      </span>
    </div>
  </div>
</template>
