<script lang="ts" setup name="FSvgIcon">
  import { Props, Emits } from './svg-icon'

  defineProps(Props)
  defineEmits(Emits)
</script>

<template>
  <i class="f-svg-icon">
    <slot />
  </i>
</template>
