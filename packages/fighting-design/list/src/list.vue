<script lang="ts" setup name="FList">
  import { provide, computed } from 'vue'
  import { Props, listPropsKey } from './list'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { classListInterface as a } from '../../_interface'

  const props = defineProps(Props)

  provide(listPropsKey, props)

  const listClass: ComputedRef<a> = computed((): a => {
    const { maxHeight, zebra, center, size } = props

    return [
      'f-list',
      `f-list-${size}`,
      {
        'f-list-scroll': maxHeight,
        'f-list-zebra': zebra,
        'f-list-center': center
      }
    ] as const
  })

  const listStyle: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { maxHeight, borderColor, listStyle } = props

    return {
      maxHeight,
      borderColor,
      listStyle
    } as const
  })
</script>

<template>
  <ul :class="listClass" :style="listStyle">
    <header v-if="$slots.header" class="f-list-header">
      <slot name="header" />
    </header>
    <slot />
    <footer v-if="$slots.footer" class="f-list-footer">
      <slot name="footer" />
    </footer>
  </ul>
</template>
