<script lang="ts" setup name="FToolbarItem">
  import { Emits, Props } from './toolbar-item'
  import { FSvgIcon } from '../../svg-icon'
  import type { HandleEventInterface as a } from '../../_interface'

  defineProps(Props)
  const emit = defineEmits(Emits)

  const handleClick: a = (evt: MouseEvent): void => {
    emit('click', evt)
  }
</script>

<template>
  <span
    class="f-toolbar-item"
    :data-key="dataKey"
    :style="{ color }"
    @click="handleClick"
  >
    <f-svg-icon v-if="icon" :size="iconSize">
      <component :is="icon" />
    </f-svg-icon>
    <slot />
  </span>
</template>
