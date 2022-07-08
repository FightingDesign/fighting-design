<script lang="ts" setup name="FTooltip">
  import { Props } from './tooltip'

  defineProps(Props)
</script>

<template>
  <div class="f-tooltip">
    <slot />
    <div
      :f-tooltip-content="content"
      :class="['f-tooltip-msg', `f-tooltip-${position}`]"
    />
  </div>
</template>

<style lang="css" scoped>
  .f-tooltip .f-tooltip-msg::before,
  .f-tooltip .f-tooltip-msg::after {
    background: v-bind(background);
    color: v-bind(color);
    z-index: v-bind(zIndex);
  }

  .f-tooltip .f-tooltip-msg::after {
    width: v-bind(width);
    height: v-bind(height);
    font-size: v-bind(fontSize);
  }
</style>
