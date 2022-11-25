<script lang="ts" setup name="FMenuItem">
  import { Props } from './props'
  import type { MenuItemPropsType } from './interface'

  const prop: MenuItemPropsType = defineProps(Props)
</script>

<template>
  <div class="f-menu-item">FMenuItem</div>
</template>
