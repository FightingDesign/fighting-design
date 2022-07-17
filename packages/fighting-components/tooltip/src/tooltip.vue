<script lang="ts" setup name="FTooltip">
  import { Props } from './tooltip'

  defineProps(Props)
</script>

<template>
  <div
    :class="[
      'f-tooltip',
      `f-tooltip-${position}`,
      {
        'f-tooltip-disabled ': disabled,
        'f-tooltip-bold': bold,
        'f-tooltip-no-arrow': noArrow
      }
    ]"
    :f-content="content"
  >
    <slot />
  </div>
</template>
