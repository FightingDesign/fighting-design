<script lang="ts" setup name="FList">
  import { provide, computed } from 'vue'
  import { Props, listPropsKey } from './props'
  import { sizeChange } from '../../_utils'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { ClassListInterface } from '../../_interface'
  import type { ListPropsType } from './props'

  const prop: ListPropsType = defineProps(Props)

  provide<ListPropsType>(listPropsKey, prop)

  /**
   * 类名列表
   */
  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
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
    }
  )

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { maxHeight, borderColor, listStyle } = prop

    return {
      borderColor,
      maxHeight: sizeChange(maxHeight),
      listStyle
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
