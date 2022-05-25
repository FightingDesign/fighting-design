<template>
  <i
    :class="[fontClass || 'f-icon', icon]"
    :style="{ opacity, color, fontSize: size }"
    @click="onClick"
  >
    <slot />
  </i>
</template>

<script lang="ts" setup>
  import { Props, Emits } from './icon'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const onClick = (evt: Event): void => {
    emit('click', evt)
  }
</script>

<script lang="ts">
  export default {
    name: 'FIcon'
  }
</script>
