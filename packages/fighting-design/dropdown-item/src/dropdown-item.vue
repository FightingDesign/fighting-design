<script lang="ts" setup name="FDropdownItem">
  import { Props } from './props'
  import type { DropdownItemPropsType } from './interface'

  const prop: DropdownItemPropsType = defineProps(Props)
</script>

<template>
  <li class="f-dropdown-item">
    <slot />
  </li>
</template>
