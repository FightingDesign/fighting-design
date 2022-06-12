<template>
  <div
    :class="['f-divider', { 'f-divider-vertical': vertical }]"
    :style="dividerStyle"
  >
    <span
      v-if="renderSlot"
      :class="['f-divider-text', `f-divider-text-${position}`]"
      :style="dividerTextStyle"
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

  const dividerTextStyle: ComputedRef<string> = computed((): string => {
    const fontColor = prop.fontColor ? `color: ${prop.fontColor}` : ''
    const background = prop.background ? `background: ${prop.background}` : ''
    return [fontColor, background].join(';')
  })

  const dividerStyle: ComputedRef<string> = computed((): string => {
    const borderColor = prop.color ? `border-color: ${prop.color}` : ''
    const margin = prop.margin ? `margin: ${prop.margin} 0` : ''
    const borderStyle = prop.type ? `border-style: ${prop.type}` : ''
    return [borderColor, margin, borderStyle].join(';')
  })
</script>
