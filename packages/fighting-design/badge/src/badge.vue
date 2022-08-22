<script lang="ts" setup name="FBadge">
  import { computed } from 'vue'
  import { Props } from './badge'
  import type { ComputedRef } from 'vue'
  import type { FPropsType } from './badge'

  const prop: FPropsType = defineProps(Props)

  const classList: ComputedRef<object | string[]> = computed(
    (): object | string[] => {
      return [
        'f-badge-content',
        `f-badge-${prop.type}`,
        {
          'f-badge-dot': prop.dot
        }
      ] as const
    }
  )

  const content: ComputedRef<string> = computed<string>((): string => {
    const { dot, max, value } = prop

    if (dot) return ''

    if (typeof max === 'number' && typeof value === 'number') {
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
