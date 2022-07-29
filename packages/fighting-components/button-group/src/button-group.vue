<script lang="ts" setup name="FButtonGroup">
  import { Props } from './button-group'

  defineProps(Props)
</script>

<template>
  <div
    :class="[
      'f-button-group',
      vertical ? 'f-button-group-vertical' : 'f-button-group-horizontal',
      {
        [`f-button-group-${size}`]: size
      }
    ]"
  >
    <slot />
  </div>
</template>
