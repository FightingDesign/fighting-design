<script lang="ts" setup name="FTableColgroup">
  import { Props } from './props'
  import { sizeChange } from '../../../../_utils'
  import type { TablePropsType } from './interface'

  const prop: TablePropsType = defineProps(Props)
</script>

<template>
  <colgroup>
    <col
      v-for="(column, index) in prop.columns"
      :key="index"
      :width="sizeChange(column.width)"
    />
  </colgroup>
</template>
