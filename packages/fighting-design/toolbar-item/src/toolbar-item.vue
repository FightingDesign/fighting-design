<script lang="ts" setup name="FToolbarItem">
  import { Props } from './props'
  import { FSvgIcon } from '../../svg-icon'
  import { runCallback } from '../../_utils'
  import type { HandleMouseEventInterface } from '../../_interface'
  import type { ToolbarItemPropsType } from './props'

  const prop: ToolbarItemPropsType = defineProps(Props)

  /**
   * 点击触发
   *
   * @param evt 事件对象
   */
  const handleClick: HandleMouseEventInterface = (evt: MouseEvent): void => {
    runCallback(prop.onClick, evt)
  }
</script>

<template>
  <span
    class="f-toolbar-item"
    :data-index="index"
    :style="{ color }"
    @click="handleClick"
  >
    <f-svg-icon v-if="icon" :size="iconSize" :icon="icon" />
    <slot />
  </span>
</template>
