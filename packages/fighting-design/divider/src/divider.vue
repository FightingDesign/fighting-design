<script lang="ts" setup name="FDivider">
  import { useSlots, computed } from 'vue'
  import { Props } from './props'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { DividerPropsType } from './props'

  const prop: DividerPropsType = defineProps(Props)

  // 是否有插槽
  const renderSlot: ComputedRef<boolean> = computed((): boolean => {
    return !prop.vertical && Boolean(useSlots().default)
  })

  // 样式列表
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { color, margin } = prop

    if (margin) {
      return {
        margin: `${margin} 0`,
        borderColor: color
      } as const
    }
    return { borderColor: color } as const
  })
</script>

<template>
  <div
    role="separator"
    :class="[
      'f-divider',
      { 'f-divider__vertical': vertical, [`f-divider__${type}`]: type }
    ]"
    :style="styleList"
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
