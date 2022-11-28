<script lang="ts" setup name="FAside">
  import { Props } from './props'
  import { useList } from '../../_hooks'
  import type { CSSProperties, ComputedRef } from 'vue'
  import type { AsidePropsType } from './props'

  const prop: AsidePropsType = defineProps(Props)

  const { styles } = useList(prop, 'aside')

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = styles(['width', 'padding'])
</script>

<template>
  <aside class="f-aside" :style="styleList">
    <slot />
  </aside>
</template>
