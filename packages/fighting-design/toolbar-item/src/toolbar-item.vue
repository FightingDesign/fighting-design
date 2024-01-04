<script lang="ts" setup>
  import { Props } from './props'
  import { FSvgIcon } from '../../svg-icon'
  import { useRun, useList } from '../../_hooks'
  import { TOOLBAR_INDEX, TOOLBAR_ITEM_CLASS_NAME } from '../../_tokens'

  defineOptions({ name: 'FToolbarItem' })

  const prop = defineProps(Props)

  const { run } = useRun()
  const { styles } = useList(prop, 'toolbar-item')

  /**
   * 点击触发
   *
   * @param { Object } evt 事件对象
   */
  const handleClick = (evt: MouseEvent): void => {
    run(prop.onClick, evt)
  }

  /** 样式列表 */
  const style = styles(['color'])

  /** 唯一值 */
  const DATE_KEY: 'data-index' = TOOLBAR_INDEX
</script>

<template>
  <span :class="TOOLBAR_ITEM_CLASS_NAME" :[DATE_KEY]="index" :style @click="handleClick">
    <f-svg-icon v-if="icon" :size="iconSize" :icon="icon" />
    <slot />
  </span>
</template>
