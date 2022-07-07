<script lang="ts" setup name="FTooltip">
  import { Props } from './tooltip'

  defineProps(Props)
</script>

<template>
  <div class="f-tooltip">
    <slot />
    <div
      :f-tooltip-content="content"
      :data-f-tooltip-z-index="zIndex"
      :data-f-tooltip-background="background"
      :class="['f-tooltip-msg', `f-tooltip-${position}`]"
    />
  </div>
</template>
