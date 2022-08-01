<script lang="ts" setup name="FToolbarItem">
  import { Emits, Props } from './toolbar-item'
  import type { handleClickInterface } from './interface'

  defineProps(Props)
  const emit = defineEmits(Emits)

  const handleClick: handleClickInterface = (evt: MouseEvent): void => {
    emit('click', evt)
  }
</script>

<template>
  <span class="f-toolbar-item" :style="{ color }" @click="handleClick">
    <slot />
  </span>
</template>
