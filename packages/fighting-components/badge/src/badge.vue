<template>
  <div class="f-badge">
    <slot />
    <sup :class="cls" v-show="!hidden && (content || isDot)">
      {{ content }}
    </sup>
  </div>
</template>

<script lang="ts" setup name="FBadge">
  import { computed } from 'vue'
  import { Props } from './badge'

  const props = defineProps(Props)

  const cls = computed(() => [
    'f-badge-content',
    `f-badge-${props.type}`,
    {
      'f-badge-dot': props.isDot
    }
  ])

  const content = computed<string>(() => {
    if (props.isDot) return ''

    if (typeof props.max === 'number' && typeof props.value === 'number') {
      return props.max > props.value ? `${props.value}` : `${props.max}+`
    }

    return `${props.value}`
  })
</script>
