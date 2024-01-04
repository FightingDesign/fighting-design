<script lang="ts" setup>
  import { Props } from './props'
  import { FSvgIcon } from '../../svg-icon'
  import { FIconCross } from '../../_svg'
  import { useRun, useList } from '../../_hooks'

  defineOptions({ name: 'FCloseBtn' })

  const prop = defineProps(Props)

  const { styles, classes } = useList(prop, 'close-btn')
  const { run } = useRun()

  /**
   * 点击触发
   *
   * @param { Object } evt 事件对象
   */
  const handleClick = (evt: MouseEvent): void => {
    if (prop.disabled) return
    run(prop.onClick, evt)
  }

  /** 类名列表 */
  const classList = classes(['round', 'disabled'], 'f-close-btn')

  /** 样式列表 */
  const style = styles(['color', 'hoverColor'])
</script>

<template>
  <div role="button" :class="classList" :style @click="handleClick">
    <f-svg-icon :size :icon="icon">
      <slot>
        <f-icon-cross />
      </slot>
    </f-svg-icon>
  </div>
</template>
