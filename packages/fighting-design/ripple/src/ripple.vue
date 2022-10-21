<script lang="ts" setup name="Ripple">
  import { Props } from './ripple'
  import { Ripples } from '../../_utils'
  import { computed, ref } from 'vue'
  import type {
    ClassListInterface as a,
    HandleEventInterface as b
  } from '../../_interface'
  import type { Ref, CSSProperties, ComputedRef } from 'vue'

  const prop = defineProps(Props)

  const FRipple: Ref<HTMLElement> = ref(null as unknown as HTMLElement)

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { startOpacity, endOpacity } = prop

    return {
      '--f-ripple-start-opacity': startOpacity,
      '--f-ripple-end-opacity': endOpacity
    }
  })

  const classList: ComputedRef<a> = computed((): a => {
    const { noSelect } = prop

    return ['f-ripple', { 'f-ripple__select': noSelect }] as const
  })

  const handleClick: b = (evt: MouseEvent): void => {
    const { type, ripplesColor, duration, disabled } = prop

    if (disabled) return

    const ripples: Ripples = new Ripples(
      evt as MouseEvent,
      FRipple.value as HTMLElement,
      {
        duration,
        component: 'f-ripple',
        className: 'f-ripple__animation',
        type,
        ripplesColor
      } as const
    )
    ripples.clickRipples()
  }
</script>

<template>
  <div ref="FRipple" :class="classList" :style="styleList" @click="handleClick">
    <slot />
  </div>
</template>
