<script lang="ts" setup name="FDropdownItem">
  import { Props } from './props'
  import type { DropdownItemPropsType } from './interface'
  import type { HandleMouseEventInterface } from '../../_interface'

  const prop: DropdownItemPropsType = defineProps(Props)

  /**
   * 点击时触发
   */
  const handleClick: HandleMouseEventInterface = (evt: MouseEvent): void => {
    if (prop.disabled) return
    prop.click && prop.click(evt)
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
