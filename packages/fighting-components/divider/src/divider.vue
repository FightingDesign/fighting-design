<script lang="ts" setup name="FDivider">
  import { useSlots, computed } from 'vue'
  import { Props } from './divider'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { FPropsType } from './divider'

  const prop: FPropsType = defineProps(Props)

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
