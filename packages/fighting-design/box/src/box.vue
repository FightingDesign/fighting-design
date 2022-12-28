<script lang="ts" setup name="FBox">
  import { Props } from './props'
  import { useList } from '../../_hooks'

  const prop = defineProps(Props)

  const { styles } = useList(prop, 'box')

  /**
   * 样式列表
   */
  const styleList = styles(['padding', 'width', 'height', 'background', 'display'])

  console.log(styleList.value)
</script>

<template>
  <div class="f-box" :role="role || 'none'" :style="styleList">
    <slot />
  </div>
</template>
