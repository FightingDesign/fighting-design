<script lang="ts" setup name="FToolbarItem">
  import { Props } from './props'
  import { FSvgIcon } from '../../svg-icon'
  import type { HandleMouseEventInterface } from '../../_interface'
  import type { ToolbarItemPropsType } from './props'

  const prop: ToolbarItemPropsType = defineProps(Props)

  const handleClick: HandleMouseEventInterface = (evt: MouseEvent): void => {
    prop.click && prop.click(evt)
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
