<script lang="ts" setup name="FDropdownItem">
  import { Props } from './props'
  import { runCallback } from '../../_utils'
  import type { DropdownItemPropsType } from './interface'
  import type { HandleMouseEventInterface } from '../../_interface'

  const prop: DropdownItemPropsType = defineProps(Props)

  /**
   * 点击时触发
   *
   * @param evt 事件对象
   */
  const handleClick: HandleMouseEventInterface = (evt: MouseEvent): void => {
    if (prop.disabled) return
    runCallback(prop.onClick, evt)
  }
</script>

<template>
  <div
    :class="[
      'f-dropdown-item',
      {
        'f-dropdown-item__disabled': disabled
      }
    ]"
    @click.stop="handleClick"
  >
    <slot />
  </div>
</template>
