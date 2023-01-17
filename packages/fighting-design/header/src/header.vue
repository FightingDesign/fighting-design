<script lang="ts" setup name="FHeader">
  import { Props } from './props'
  import { useList } from '../../_hooks'

  const prop = defineProps(Props)

  const { styles } = useList(prop, 'header')

  /** 样式列表 */
  const styleList = styles(['height', 'padding'])
</script>

<template>
  <header role="banner" class="f-header" :style="styleList">
    <slot />
  </header>
</template>
