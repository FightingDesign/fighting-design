<script lang="ts" setup name="FMenuItemGroup">
  import { Props } from './props'

  defineProps(Props)
</script>

<template>
  <div class="f-menu-item-group">
    <div class="f-menu-item-group__title">{{ title }}</div>

    <div class="f-menu-item-group__list">
      <slot />
    </div>
  </div>
</template>
