<script lang="ts" setup>
  import { Props } from './props'
  import { sizeChange } from '../../../_utils'

  defineOptions({name: 'FTableColgroup'})

  defineProps(Props)
</script>

<template>
  <!-- https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/colgroup -->
  <colgroup>
    <col
      v-for="(column, index) in columns"
      :key="index"
      :width="sizeChange(column.width)"
    />
  </colgroup>
</template>
