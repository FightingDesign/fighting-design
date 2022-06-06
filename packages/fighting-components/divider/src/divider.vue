<template>
  <div :class="['f-divider', `f-divider-${direction}`]">
    <span
      v-if="renderSlot"
      :class="['f-divider-text', `f-divider-text-${textAlign}`]"
    >
      <slot />
    </span>
  </div>
</template>

<script lang="ts" setup name="FDivider">
  import { useSlots, computed } from 'vue'
  import { Props } from './divider'
  import type { ComputedRef } from 'vue'

  const prop = defineProps(Props)

  const renderSlot: ComputedRef<boolean> = computed((): boolean => {
    return prop.direction === 'horizontal' && Boolean(useSlots().default)
  })
</script>
