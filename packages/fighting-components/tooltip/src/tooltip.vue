<script lang="ts" setup name="FTooltip">
  import { Props, Emits } from './tooltip'

  defineProps(Props)
  defineEmits(Emits)
</script>

<template>
  <div class="f-tooltip">
    <slot />
    <div class="f-tooltip-msg" :f-tooltip-content="content"></div>
  </div>
</template>
