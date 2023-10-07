<script lang="ts" setup>
  import { Props } from './props'

  defineOptions({ name: 'FMenuItemGroup' })

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
