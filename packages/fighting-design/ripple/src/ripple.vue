<script lang="ts" setup name="Ripple">
  import { Props, Emits } from './ripple'
  import { Ripples } from '../../_utils'
  import { ref } from 'vue'
  import type { Ref } from 'vue'

  const prop = defineProps(Props)
  defineEmits(Emits)

  const FRipple: Ref<HTMLElement> = ref(null as unknown as HTMLElement)

  const handleClick = (evt: MouseEvent): void => {
    console.log(FRipple.value)
    const ripples: Ripples = new Ripples(evt, FRipple.value, prop)
    ripples.clickRipples()
  }
</script>

<template>
  <div ref="FRipple" class="f-ripple" @click="handleClick">
    <slot />
  </div>
</template>
