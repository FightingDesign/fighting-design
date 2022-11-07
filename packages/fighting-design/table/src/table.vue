<script lang="ts" setup name="FTable">
  import { Props, Emits } from './props'
  import type { TablePropsType } from './props'

  const prop: TablePropsType = defineProps(Props)
  defineEmits(Emits)
</script>

<template>
  <div class="f-table">
    FTable
  </div>
</template>
