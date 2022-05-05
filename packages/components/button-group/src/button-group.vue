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

<script lang="ts">
import { props } from './button-group'
export default {
  name: 'FButtonGroup',
  props
}
</script>
