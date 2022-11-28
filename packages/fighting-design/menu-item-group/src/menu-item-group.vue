<script lang="ts" setup name="FMenuItemGroup">
  import { Props } from './props'
  import type { MenuItemGroupPropsType } from './interface'

  const prop: MenuItemGroupPropsType = defineProps(Props)
</script>

<template>
  <ul class="f-menu-item-group">
    <li class="f-menu-item-group__title">{{ title }}</li>

    <ul class="f-menu-item-group__list">
      <slot />
    </ul>
  </ul>
</template>
