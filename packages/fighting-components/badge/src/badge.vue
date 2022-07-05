<script lang="ts" setup name="FBadge">
  import { computed } from 'vue'
  import { Props } from './badge'
  import type { ComputedRef } from 'vue'

  const prop = defineProps(Props)

  const classList: ComputedRef<object | string[]> = computed(
    (): object | string[] => [
      'f-badge-content',
      `f-badge-${prop.type}`,
      {
        'f-badge-dot': prop.bot
      }
    ]
  )

  const content: ComputedRef<string> = computed<string>((): string => {
    const { bot, max, value } = prop

    if (bot) return ''

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
      v-show="!show && (content || bot)"
      :class="classList"
      :style="{ background: color, color: textColor }"
    >
      {{ content }}
    </sup>
  </div>
</template>
