<script lang="ts" setup name="FTooltip">
  import { Props, Emits } from './tooltip'

  defineProps(Props)
  defineEmits(Emits)
</script>

<template>
  <div class="f-tooltip">
    <slots />
  </div>
</template>
