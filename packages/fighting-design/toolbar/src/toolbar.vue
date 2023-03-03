<script lang="ts" setup name="FToolbar">
  import { Props } from './props'
  import { useSlots } from 'vue'
  import { useList, useRun } from '../../_hooks'
  import type { ToolbarClickParams } from './interface'

  const prop = defineProps(Props)
  const slot = useSlots()

  const { run } = useRun()
  const { classes, styles } = useList(prop, 'toolbar')

  /** 类名列表 */
  const classList = classes(['size', 'round', 'fixed'], 'f-toolbar')

  /** 样式列表 */
  const styleList = styles(['textColor', 'background', 'width', 'height'])

  /**
   * 点击触发
   *
   * @param { Object } evt 事件对象
   */
  const handleClick = (evt: MouseEvent): void => {
    if (!slot.default) return

    /** 获取到元素节点 */
    const target: HTMLElement = evt.target as HTMLElement

    if (target.className === 'f-toolbar-item') {
      /** 当前元素的唯一值 */
      const index: string | undefined = target.dataset.index

      run(prop.onClick, { evt, index } as ToolbarClickParams)
    }
  }
</script>

<template>
  <div role="toolbar" :class="classList" :style="styleList" @click="handleClick">
    <slot />
  </div>
</template>
