<script lang="ts" setup name="FAside">
  import { Props } from './props'
  import { useList, useProps } from '../../_hooks'
  import type { CSSProperties, ComputedRef } from 'vue'
  import type { AsidePropsType } from './props'

  const prop: AsidePropsType = defineProps(Props)

  const { filter } = useProps(prop)
  const { styles } = useList('aside')

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = styles(
    filter(['width', 'padding'])
  )
</script>

<template>
  <aside class="f-aside" :style="styleList">
    <slot />
  </aside>
</template>
