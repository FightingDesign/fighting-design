<script lang="ts" setup name="FSvgIcon">
  import { Props } from './props'
  import { runCallback } from '../../_utils'
  import { useList } from '../../_hooks'

  const prop = defineProps(Props)

  const { styles } = useList(prop, 'svg-icon')

  /**
   * 点击触发
   *
   * @param evt 事件对象
   */
  const handleClick = (evt: MouseEvent): void => {
    runCallback(prop.onClick, evt)
  }

  /**
   * 样式列表
   */
  const styleList = styles(['size', 'color'])
</script>

<template>
  <i
    class="f-svg-icon"
    text-indent="middle"
    :style="styleList"
    @click="handleClick"
  >
    <component :is="icon" v-if="icon" />
    <slot v-else />
  </i>
</template>
