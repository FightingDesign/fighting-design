<script lang="ts" setup>
  import { Props } from './props'
  import { FSvgIcon } from '../../svg-icon'
  import { FCloseBtn } from '../../close-btn'
  import { useList, useRun, useGlobal } from '../../_hooks'

  defineOptions({ name: 'FTag' })

  const prop = defineProps(Props)

  const { getProp } = useGlobal(prop)
  const { run } = useRun()
  const { classes, styles } = useList(getProp(['size', 'type']), 'tag')

  /** 类名列表 */
  const classs = classes(['simple', 'type', 'size', 'block', 'round', 'line'], 'f-tag')

  /** 样式列表 */
  const style = styles(['color', 'background'])

  /**
   * 点击关闭按钮
   *
   * @param { Object } evt 事件对象
   */
  const handleClose = (evt: MouseEvent): void => {
    run(prop.onClose, evt)
  }
</script>

<template>
  <transition name="f-tag" appear>
    <div :class="classs" :style @click="onClick">
      <!-- 之前的 icon -->
      <f-svg-icon v-if="beforeIcon" :icon="beforeIcon" />

      <slot />

      <!-- 之后的 icon -->
      <f-svg-icon v-if="afterIcon" :icon="afterIcon" />

      <!-- 关闭按钮 -->
      <f-close-btn v-if="close" :size="14" :on-click="handleClose" />
    </div>
  </transition>
</template>
