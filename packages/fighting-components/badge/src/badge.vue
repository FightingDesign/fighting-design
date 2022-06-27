<template>
  <div class="f-badge">
    <slot />
    <sup :class="classList" v-show="!hidden && (content || isDot)">
      {{ content }}
    </sup>
  </div>
</template>

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
        'f-badge-dot': prop.isDot
      }
    ]
  )

  const content: ComputedRef<string> = computed<string>((): string => {
    const { isDot, max, value } = prop

    if (isDot) return ''

    if (typeof max === 'number' && typeof value === 'number') {
      return max > value ? `${value}` : `${max}+`
    }

    return `${value}`
  })
</script>
