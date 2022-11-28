<script lang="ts" setup name="FMenuItem">
  import { Props } from './props'
  import { FSvgIcon } from '../../svg-icon'
  import { computed } from 'vue'
  import { sizeChange } from '../../_utils'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { MenuItemPropsType } from './interface'

  const prop: MenuItemPropsType = defineProps(Props)

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { fontSize, color } = prop

    return {
      '--f-menu-item-font-size': sizeChange(fontSize),
      '--f-menu-item-font-color': color
    } as CSSProperties
  })
</script>

<template>
  <li class="f-menu-item" :style="styleList">
    <f-svg-icon v-if="icon" :icon="icon" />

    <span class="f-menu-item__text">
      <slot />
    </span>
  </li>
</template>
