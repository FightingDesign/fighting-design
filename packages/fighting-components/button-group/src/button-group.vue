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

<script lang="ts" setup name="FButtonGroup">
  import { Props } from './button-group'

  defineProps(Props)
</script>
