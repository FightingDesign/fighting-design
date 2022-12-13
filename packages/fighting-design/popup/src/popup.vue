<script lang="ts" setup name="FPopup">
  import { Props } from './props'
  import { computed } from 'vue'
  import { sizeChange, isBoolean } from '../../_utils'
  import { useRun } from '../../_hooks'
  import type { CSSProperties } from 'vue'

  const prop = defineProps(Props)
  const emit = defineEmits({
    'update:visible': (visible: boolean): boolean => isBoolean(visible)
  })

  /**
   * 点击遮罩层关闭
   */
  const closePopup = (): void => {
    if (!prop.maskClose) return
    emit('update:visible', false)
  }

  /**
   * 打开动画开始执行的回调
   *
   * @param evt 事件对象
   */
  const handleOpen = (evt: MouseEvent): void => {
    useRun(prop.onOpen, evt)
  }

  /**
   * 打开动画结束执行的回调
   *
   * @param evt 事件对象
   */
  const handleOpenEnd = (evt: MouseEvent): void => {
    useRun(prop.onOpenEnd, evt)
  }

  /**
   * 关闭动画开始执行的回调
   *
   * @param evt 事件对象
   */
  const handleClose = (evt: MouseEvent): void => {
    useRun(prop.onClose, evt)
  }

  /**
   * 关闭动画结束执行的回调
   *
   * @param evt 事件对象
   */
  const handleCloseEnd = (evt: MouseEvent): void => {
    useRun(prop.onCloseEnd, evt)
  }

  /**
   * 样式列表
   */
  const styleList = computed((): CSSProperties => {
    const { direction, popupSize, padding } = prop

    if (direction === 'top' || direction === 'bottom') {
      return {
        height: sizeChange(popupSize),
        padding: sizeChange(padding)
      } as const
    }

    return {
      width: sizeChange(popupSize),
      padding: sizeChange(padding)
    } as const
  })
</script>

<template>
  <teleport to="body" :disabled="!appendToBody">
    <transition
      name="f-popup__transition"
      @before-enter="handleOpen"
      @after-enter="handleOpenEnd"
      @before-leave="handleClose"
      @after-leave="handleCloseEnd"
    >
      <div v-show="visible" class="f-popup" :style="{ zIndex }">
        <!-- 遮罩层 -->
        <div
          v-if="showMask"
          :class="['f-popup__mask', { 'f-popup__blur': maskBlur }]"
          :style="{ background: maskBackground, opacity: maskOpacity }"
        />

        <!-- 主容器 -->
        <div
          :class="[
            'f-popup__container',
            {
              [`f-popup__container-${direction}`]: direction
            }
          ]"
          @click.self="closePopup"
        >
          <!-- 主内容 -->
          <transition name="f-popup__wrapper-transition">
            <div
              v-show="visible"
              :class="[
                'f-popup__wrapper',
                {
                  [`f-popup__wrapper-${direction}`]: direction
                }
              ]"
              :style="styleList"
            >
              <slot />
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </teleport>
</template>
