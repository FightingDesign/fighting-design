<script lang="ts" setup name="FDivider">
  import { Props } from './props'
  import { useSlots, computed } from 'vue'
  import type { CSSProperties, Slots } from 'vue'

  const prop = defineProps(Props)

  /** 是否有插槽 */
  const renderSlot = computed((): boolean => {
    /** 获取到插槽内容 */
    const slot: Slots = useSlots()

    return !prop.vertical && Boolean(slot.default)
  })

  /** 样式列表 */
  const styleList = computed((): CSSProperties => {
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
    :class="['f-divider', { 'f-divider__vertical': vertical, [`f-divider__${type}`]: type }]"
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
