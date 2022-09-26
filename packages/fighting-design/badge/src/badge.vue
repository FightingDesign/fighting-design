<script lang="ts" setup name="FBadge">
  import { computed } from 'vue'
  import { Props } from './badge'
  import { isNumber } from '../../_utils'
  import type { ComputedRef } from 'vue'
  import type { classListInterface as a } from '../../_interface'

  const prop = defineProps(Props)

  const classList: ComputedRef<a> = computed((): a => {
    const { type, dot } = prop

    return [
      'f-badge-content',
      `f-badge-${type}`,
      {
        'f-badge-dot': dot
      }
    ] as const
  })

  const content: ComputedRef<string> = computed((): string => {
    const { dot, max, value } = prop

    if (dot) return ''

    if (isNumber(max) && isNumber(value)) {
      return max > value ? `${value}` : `${max}+`
    }

    return `${value}`
  })
</script>

<template>
  <div class="f-badge">
    <slot />
    <sup
      v-show="!show && (content || dot)"
      :class="classList"
      :style="{ background: color, color: textColor }"
    >
      {{ content }}
    </sup>
  </div>
</template>
