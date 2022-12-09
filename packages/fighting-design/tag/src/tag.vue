<script lang="ts" setup name="FTag">
  import { Props } from './props'
  import { ref } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { FCloseBtn } from '../../close-btn'
  import { useList, useRun } from '../../_hooks'

  const prop = defineProps(Props)

  const { classes } = useList(prop, 'tag')

  /**
   * 是否展示
   */
  const isShow = ref<boolean>(true)

  /**
   * 类名列表
   */
  const classList = classes(
    ['simple', 'type', 'size', 'block', 'round', 'line'],
    'f-tag'
  )

  /**
   * 点击关闭按钮
   *
   * @param evt 事件对象
   */
  const handleClose = (evt: MouseEvent): void => {
    isShow.value = false
    useRun(prop.onClose, evt)
  }
</script>

<template>
  <transition name="f-tag">
    <div v-if="isShow" :class="classList" :style="{ background, color }">
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
