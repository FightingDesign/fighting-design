<script lang="ts" setup>
  import { Props } from './props'
  import { useList, useRun } from '../../_hooks'

  defineOptions({ name: 'FSvgIcon' })

  const prop = defineProps(Props)

  const { run } = useRun()
  const { styles } = useList(prop, 'svg-icon')

  /**
   * 点击触发
   *
   * @param { Object } evt 事件对象
   */
  const handleClick = (evt: MouseEvent): void => {
    run(prop.onClick, evt)
  }

  /** 样式列表 */
  const style = styles(['size', 'color'])
</script>

<template>
  <i role="img" class="f-svg-icon" text-indent="middle" :style @click="handleClick">
    <component :is="icon" v-if="icon" />
    <slot v-else />
  </i>
</template>
