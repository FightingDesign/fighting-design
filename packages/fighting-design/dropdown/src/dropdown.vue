<script lang="ts" setup name="FDropdown">
  import { Props, Emits } from './props'
  import type { DropdownPropsType } from './interface'

  const prop: DropdownPropsType = defineProps(Props)
  defineEmits(Emits)
</script>

<template>
  <div class="f-dropdown">
    FDropdown
  </div>
</template>
