<script lang="ts" setup name="FTooltip">
  import { Props } from './tooltip'

  defineProps(Props)
</script>

<template>
  <div
    :class="[
      'f-tooltip',
      `f-tooltip-${state}`,
      { 'f-tooltip-disabled': disabled, 'f-tooltip-no-arrow': noArrow }
    ]"
  >
    <slot />
    <div
      :f-tooltip-content="content"
      :class="[
        'f-tooltip-msg',
        `f-tooltip-${position}`,
        { 'f-tooltip-no-arrow': noArrow, 'f-tooltip-bold': bold }
      ]"
    />
  </div>
</template>
