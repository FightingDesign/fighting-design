<script lang="ts" setup name="FAside">
  import { Props } from './props'
  import { useList } from '../../_hooks'

  const prop = defineProps(Props)

  const { styles } = useList(prop, 'aside')

  /** 样式列表 */
  const styleList = styles(['width', 'padding', 'background'])
</script>

<template>
  <!-- https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/aside -->
  <aside class="f-aside" :style="styleList">
    <slot />
  </aside>
</template>
