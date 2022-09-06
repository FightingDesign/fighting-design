<script lang="ts" setup name="Ripple">
  import { Props, Emits } from './ripple'

  defineProps(Props)
  defineEmits(Emits)
</script>

<template>
  <div class="f-ripple">
    <slot />
  </div>
</template>
