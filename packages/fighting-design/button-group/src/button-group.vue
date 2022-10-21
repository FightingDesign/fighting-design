<script lang="ts" setup name="FButtonGroup">
  import { Props } from './button-group'
  import { computed } from 'vue'
  import type { ComputedRef } from 'vue'
  import type { ClassListInterface as a } from '../../_interface'

  const prop = defineProps(Props)

  const classList: ComputedRef<a> = computed((): a => {
    const { vertical, size } = prop

    return [
      'f-button-group',
      `f-button-group__${vertical ? 'vertical' : 'horizontal'}`,
      {
        [`f-button-group__${size}`]: size
      }
    ] as const
  })
</script>

<template>
  <div role="group" :class="classList">
    <slot />
  </div>
</template>
