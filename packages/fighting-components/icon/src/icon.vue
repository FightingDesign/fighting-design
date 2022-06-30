<script lang="ts" setup name="FIcon">
  import { Props, Emits } from './icon'
  import type { onClickInterface } from './interface'

  defineProps(Props)
  const emit = defineEmits(Emits)

  const onClick: onClickInterface = (evt: PointerEvent): void => {
    emit('click', evt)
  }
</script>

<template>
  <i
    :class="[fontClass || 'f-icon', icon]"
    :style="{ color, fontSize: size }"
    @click="onClick"
  >
    <slot />
  </i>
</template>
