<script lang="ts" setup name="FHeader">
  import { Props } from './props'
  import { useList } from '../../_hooks'
  import type { CSSProperties, ComputedRef } from 'vue'
  import type { HeaderPropsType } from './props'

  const prop: HeaderPropsType = defineProps(Props)

  const { styles } = useList(prop, 'header')

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = styles(['height', 'padding'])
</script>

<template>
  <header class="f-header" :style="styleList">
    <slot />
  </header>
</template>
