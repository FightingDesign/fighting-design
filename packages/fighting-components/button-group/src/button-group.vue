<template>
  <div
    :class="[
      'f-button-group',
      `f-button-group-${size}`,
      vertical ? 'f-button-group-vertical' : 'f-button-group-horizontal'
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { Props } from './button-group'

defineProps(Props)
</script>

<script lang="ts">
export default {
  name: 'FButtonGroup'
}
</script>
