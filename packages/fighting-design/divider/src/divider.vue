<script lang="ts" setup name="FDivider">
  import { useSlots, computed } from 'vue'
  import { Props } from './divider'
  import type { ComputedRef, CSSProperties } from 'vue'

  const prop = defineProps(Props)

  const renderSlot: ComputedRef<boolean> = computed((): boolean => {
    return !prop.vertical && Boolean(useSlots().default)
  })

  const dividerStyle: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
      const { color, margin } = prop

      if (margin) {
        return {
          margin: `${margin} 0`,
          borderColor: color
        } as const
      }
      return { borderColor: color } as const
    }
  )
</script>

<template>
  <div
    role="separator"
    :class="[
      'f-divider',
      { 'f-divider__vertical': vertical, [`f-divider__${type}`]: type }
    ]"
    :style="dividerStyle"
  >
    <span
      v-if="renderSlot"
      :class="['f-divider__text', `f-divider__text-${position}`]"
      :style="{
        background,
        color: fontColor
      }"
    >
      <slot />
    </span>
  </div>
</template>
