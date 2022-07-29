<script lang="ts" setup name="FTooltip">
  import { Props } from './tooltip'

  defineProps(Props)
</script>

<template>
  <div
    v-if="$slots.default"
    :class="[
      'f-tooltip',
      `f-tooltip-${position}`,
      `f-tooltip-${state}`,
      {
        'f-tooltip-disabled ': disabled,
        'f-tooltip-bold': bold,
        'f-tooltip-no-arrow': noArrow,
        'f-tooltip-bright': bright
      }
    ]"
    :f-content="content"
  >
    <slot />
  </div>
</template>
