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
