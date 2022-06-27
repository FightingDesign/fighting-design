<template>
  <div
    :class="[
      'f-divider',
      { 'f-divider-vertical': vertical, [`f-divider-${type}`]: type }
    ]"
    :style="dividerStyle"
  >
    <span
      v-if="renderSlot"
      :class="['f-divider-text', `f-divider-text-${position}`]"
      :style="{
        background,
        color: fontColor
      }"
    >
      <slot />
    </span>
  </div>
</template>

<script lang="ts" setup name="FDivider">
  import { useSlots, computed } from 'vue'
  import { Props } from './divider'
  import type { ComputedRef } from 'vue'
  import type { dividerStyleInterface } from './interface'

  const prop = defineProps(Props)

  const renderSlot: ComputedRef<boolean> = computed((): boolean => {
    return !prop.vertical && Boolean(useSlots().default)
  })

  const dividerStyle: ComputedRef<dividerStyleInterface> = computed(
    (): dividerStyleInterface => {
      const { color, margin } = prop

      if (margin) {
        return {
          margin: `${margin} 0`,
          borderColor: color
        }
      }
      return { borderColor: color }
    }
  )
</script>
