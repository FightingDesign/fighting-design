<script lang="ts" setup name="FCloseBtn">
  import { Props, Emits } from './close-btn'
  import { FSvgIcon } from '../../svg-icon'

  defineProps(Props)
  defineEmits(Emits)
</script>

<template>
  <div class="f-close-btn">
    <f-svg-icon>
      <slot />
    </f-svg-icon>
  </div>
</template>
