<script lang="ts" setup name="FList">
  import { Props, LIST_PROPS_KEY } from './props'
  import { provide, computed } from 'vue'
  import { sizeChange } from '../../_utils'
  import type { CSSProperties } from 'vue'
  import type { ClassListInterface } from '../../_interface'

  const prop = defineProps(Props)

  provide(LIST_PROPS_KEY, prop)

  /**
   * 类名列表
   */
  const classList = computed((): ClassListInterface => {
    const { maxHeight, zebra, center, size } = prop

    return [
      'f-list',
      {
        [`f-list__${size}`]: size,
        'f-list__scroll': maxHeight,
        'f-list__zebra': zebra,
        'f-list__center': center
      }
    ] as const
  })

  /**
   * 样式列表
   */
  const styleList = computed((): CSSProperties => {
    const { maxHeight, borderColor } = prop

    return {
      borderColor,
      maxHeight: sizeChange(maxHeight)
    } as const
  })
</script>

<template>
  <ul role="list" :class="classList" :style="styleList">
    <header v-if="$slots.header" class="f-list__header">
      <slot name="header" />
    </header>

    <slot />

    <footer v-if="$slots.footer" class="f-list__footer">
      <slot name="footer" />
    </footer>
  </ul>
</template>
