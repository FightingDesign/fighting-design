<script lang="ts" setup name="FTooltip">
  import { Props } from './tooltip'

  defineProps(Props)
</script>

<template>
  <div class="f-tooltip">
    <slot />
    <div class="f-tooltip-msg" :f-tooltip-content="content" />
  </div>
</template>
