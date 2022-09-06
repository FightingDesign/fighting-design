<script lang="ts" setup name="Ripple">
  import { Props } from './ripple'
  import { Ripples } from '../../_utils'
  import { ref } from 'vue'
  import type { Ref } from 'vue'

  const prop = defineProps(Props)

  const FRipple: Ref<HTMLElement> = ref(null as unknown as HTMLElement)

  const handleClick = (evt: MouseEvent): void => {
    const ripples: Ripples = new Ripples(
      evt as MouseEvent,
      FRipple.value as HTMLElement,
      prop,
      {
        duration: prop.duration,
        type: 'ripples',
        className: 'f-ripple'
      } as const
    )
    ripples.clickRipples()
  }
</script>

<template>
  <div ref="FRipple" class="f-ripple" @click="handleClick">
    <slot />
  </div>
</template>
