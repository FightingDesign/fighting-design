<script lang="ts" setup name="FTableColgroup">
  import { Props } from './props'
  import { sizeChange } from '../../../../_utils'

  const prop = defineProps(Props)
</script>

<template>
  <!-- https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/colgroup -->
  <colgroup>
    <col v-for="(column, index) in prop.columns" :key="index" :width="sizeChange(column.width)" />
  </colgroup>
</template>
