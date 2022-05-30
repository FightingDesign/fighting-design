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
  import type { onClickInterface } from '@fighting-design/fighting-type'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const onClick: onClickInterface = (evt: PointerEvent): void => {
    emit('click', evt)
  }
</script>

<script lang="ts">
  export default {
    name: 'FIcon'
  }
</script>
