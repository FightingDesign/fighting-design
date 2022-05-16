<template>
  <i
    :class="[fontClass || 'f-icon', icon]"
    :style="{ opacity, color, fontSize: size }"
  >
    <slot />
  </i>
</template>

<script lang="ts">
import { props } from './icon'

export default {
  name: 'FIcon',
  props
}
</script>
