<script lang="ts" setup name="FSkeleton">
  import { computed, useSlots } from 'vue'
  import { Props } from './skeleton'
  import type { ComputedRef } from 'vue'
  import type { ClassListInterface as a } from '../../_interface'

  const prop = defineProps(Props)

  const classList: ComputedRef<a> = computed((): a => {
    const { rounded, animated, circled, size } = prop

    return [
      'f-skeleton',
      {
        'f-skeleton__rounded': rounded,
        'f-skeleton__animated': animated,
        'f-skeleton__circled': circled,
        [`f-skeleton__${size}`]: size
      }
    ] as const
  })

  const isRender: ComputedRef<boolean> = computed((): boolean => {
    const slots = useSlots()
    if (slots.default) {
      return prop.loading === true
    }
    return true
  })
</script>

<template>
  <template v-if="isRender">
    <div v-for="(n, i) in rows" :key="i" :class="classList" v-bind="$attrs" />
  </template>
  <slot v-else />
</template>
