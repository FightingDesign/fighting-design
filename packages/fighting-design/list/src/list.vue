<script lang="ts">
  export default {
    name: 'FList'
  }
</script>

<script lang="ts" setup>
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
      `f-list-${size}`,
      {
        'f-list-scroll': maxHeight,
        'f-list-zebra': zebra,
        'f-list-center': center
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
    <header v-if="$slots.header" class="f-list-header">
      <slot name="header" />
    </header>
    <slot />
    <footer v-if="$slots.footer" class="f-list-footer">
      <slot name="footer" />
    </footer>
  </ul>
</template>
