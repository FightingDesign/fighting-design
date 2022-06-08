<template>
  <div
    :class="['f-divider', { 'f-divider-vertical': vertical }]"
    :style="{ borderColor: color, color, margin: `${margin} 0` }"
  >
    <span
      v-if="renderSlot"
      :class="['f-divider-text', `f-divider-text-${position}`]"
      :style="{ color: fontColor, background }"
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
    return !prop.vertical && Boolean(useSlots().default)
  })
</script>
