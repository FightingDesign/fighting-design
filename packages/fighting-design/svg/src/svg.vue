<script lang="ts" setup name="FSvg">
  import { Props, Emits } from './svg'

  defineProps(Props)
  defineEmits(Emits)
</script>

<template>
  <i class="f-svg" :style="{ color }">
    <slot />
  </i>
</template>
