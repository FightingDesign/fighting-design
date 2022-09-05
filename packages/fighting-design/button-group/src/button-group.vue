<script lang="ts" setup name="FButtonGroup">
  import { Props } from './button-group'
  import { computed } from 'vue'
  import type { ComputedRef } from 'vue'
  import type { classListInterface as a } from '../../_interface'

  const prop = defineProps(Props)

  const classList: ComputedRef<a> = computed((): a => {
    const { vertical, size } = prop

    return [
      'f-button-group',
      `f-button-group-${vertical ? 'vertical' : 'horizontal'}`,
      {
        [`f-button-group-${size}`]: size
      }
    ] as const
  })
</script>

<template>
  <div :class="classList">
    <slot />
  </div>
</template>
