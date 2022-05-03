<template>
  <i :class="[fontClass || 'f-icon', icon]">
    <slot />
  </i>
</template>

<script lang="ts" setup>
import { prop } from './prop'
defineProps(prop)
</script>

<script lang="ts">
export default {
  name: 'FIcon'
}
</script>
