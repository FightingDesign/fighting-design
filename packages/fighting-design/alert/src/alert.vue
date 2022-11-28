<script lang="ts" setup name="FAlert">
  import { Props } from './props'
  import { ref } from 'vue'
  import { FCloseBtn } from '../../close-btn'
  import { FSvgIcon } from '../../svg-icon'
  import { runCallback } from '../../_utils'
  import { useList } from '../../_hooks'
  import type { Ref, ComputedRef, CSSProperties } from 'vue'
  import type {
    HandleMouseEventInterface,
    ClassListInterface
  } from '../../_interface'
  import type { AlertPropsType } from './props'

  const prop: AlertPropsType = defineProps(Props)

  const { styles, classes } = useList(prop, 'alert')

  /**
   * 展示状态
   */
  const isShow: Ref<boolean> = ref<boolean>(true)

  /**
   * 类名列表
   */
  const classList: ComputedRef<ClassListInterface> = classes(
    ['type', 'bold', 'simple', 'center', 'round', 'fixed'],
    'f-alert'
  )

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = styles([
    'fontSize',
    'color',
    'background',
    'titleSize',
    'titleColor'
  ])

  /**
   * 点击关闭按钮
   *
   * @param evt 事件对象
   */
  const handleClose: HandleMouseEventInterface = (evt: MouseEvent): void => {
    isShow.value = false
    runCallback(prop.onClose, evt)
  }
</script>

<template>
  <transition name="f-alert">
    <div v-if="isShow" role="alert" :class="classList" :style="styleList">
      <!-- 前缀 icon -->
      <f-svg-icon v-if="$slots.beforeIcon || beforeIcon" :icon="beforeIcon">
        <slot name="beforeIcon" />
      </f-svg-icon>

      <!-- 主要内容 -->
      <div
        :class="[
          'f-alert__content',
          {
            [`f-alert__content-${overflow}`]: overflow
          }
        ]"
      >
        <!-- 标题 -->
        <div v-if="title" class="f-alert__title">
          <slot name="title">{{ title }}</slot>
        </div>

        <!-- 内容 -->
        <div v-if="$slots.default" class="f-alert__sub-title">
          <slot />
        </div>
      </div>

      <!-- 关闭按钮 -->
      <f-close-btn
        v-if="close"
        no-hover
        color="#fff"
        :icon="closeIcon"
        @click.stop="handleClose"
      >
        <slot name="closeIcon" />
      </f-close-btn>
    </div>
  </transition>
</template>
