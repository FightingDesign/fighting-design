<script lang="ts" setup name="FHeader">
  import { Props } from './props'
  import { useList, useProps } from '../../_hooks'
  import type { CSSProperties, ComputedRef } from 'vue'
  import type { HeaderPropsType } from './props'

  const prop: HeaderPropsType = defineProps(Props)

  const { filter } = useProps(prop)
  const { styles } = useList('footer')

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = styles(
    filter(['height', 'padding'])
  )
</script>

<template>
  <header class="f-header" :style="styleList">
    <slot />
  </header>
</template>
