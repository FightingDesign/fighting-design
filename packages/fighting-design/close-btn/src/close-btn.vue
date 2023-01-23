<script lang="ts" setup name="FCloseBtn">
  import { Props } from './props'
  import { FSvgIcon } from '../../svg-icon'
  import { FIconCrossVue } from '../../_svg'
  import { useRun, useList } from '../../_hooks'

  const prop = defineProps(Props)

  const { styles, classes } = useList(prop, 'close-btn')

  /**
   * 点击触发
   *
   * @param evt 事件对象
   */
  const handleClick = (evt: MouseEvent): void => {
    if (prop.disabled) return
    useRun(prop.onClick, evt)
  }

  /** 类名列表 */
  const classList = classes(['round', 'disabled'], 'f-close-btn')

  /** 样式列表 */
  const styleList = styles(['color', 'hoverColor'])
</script>

<template>
  <div role="button" :class="classList" :style="styleList" @click="handleClick">
    <f-svg-icon :size="size" :icon="icon">
      <slot>
        <f-icon-cross-vue />
      </slot>
    </f-svg-icon>
  </div>
</template>
