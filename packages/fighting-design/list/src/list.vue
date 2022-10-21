<script lang="ts" setup name="FList">
  import { provide, computed } from 'vue'
  import { Props, listPropsKey } from './list'
  import { sizeChange } from '../../_utils'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { ClassListInterface as a } from '../../_interface'

  const prop = defineProps(Props)

  provide(listPropsKey, prop)

  const classList: ComputedRef<a> = computed((): a => {
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

  const styleLIst: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { maxHeight, borderColor, listStyle } = prop

    return {
      borderColor,
      maxHeight: sizeChange(maxHeight),
      listStyle
    } as const
  })
</script>

<template>
  <ul role="list" :class="classList" :style="styleLIst">
    <header v-if="$slots.header" class="f-list__header">
      <slot name="header" />
    </header>
    <slot />
    <footer v-if="$slots.footer" class="f-list__footer">
      <slot name="footer" />
    </footer>
  </ul>
</template>
