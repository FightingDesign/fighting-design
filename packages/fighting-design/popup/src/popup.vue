<script lang="ts" setup>
  import { Props } from './props'
  import { computed } from 'vue'
  import { sizeChange } from '../../_utils'
  import { useRun } from '../../_hooks'
  import { EMIT_VISIBLE } from '../../_tokens'
  import type { CSSProperties } from 'vue'

  defineOptions({ name: 'FPopup' })

  const prop = defineProps(Props)
  const emit = defineEmits([EMIT_VISIBLE])

  const { run } = useRun()

  /** 点击遮罩层关闭 */
  const closePopup = (): void => {
    if (!prop.maskClose) return
    emit(EMIT_VISIBLE, false)
  }

  /**
   * 打开动画开始执行的回调
   *
   * @param { Object } node 元素节点
   */
  const handleOpen = (node: Element): void => {
    /** 开启状态隐藏滚动条 */
    document.body.style.overflow = 'hidden'
    run(prop.onOpen, node)
  }

  /**
   * 打开动画结束执行的回调
   *
   * @param { Object } node 元素节点
   */
  const handleOpenEnd = (node: Element): void => {
    run(prop.onOpenEnd, node)
  }

  /**
   * 关闭动画开始执行的回调
   *
   * @param { Object } node 元素节点
   */
  const handleClose = (node: Element): void => {
    document.body.style.overflow = ''
    run(prop.onClose, node)
  }

  /**
   * 关闭动画结束执行的回调
   *
   * @param { Object } node 元素节点
   */
  const handleCloseEnd = (node: Element): void => {
    run(prop.onCloseEnd, node)
  }

  /** 样式列表 */
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
                  [`f-popup__wrapper-${direction}`]: direction,
                  'f-popup__fullscreen': fullscreen
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
