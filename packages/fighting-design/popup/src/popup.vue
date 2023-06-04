<script lang="ts" setup>
  import { Props } from './props'
  import { useRun, useList } from '../../_hooks'
  import { EMIT_VISIBLE } from '../../_tokens'
  import type { FilterParamsList } from '../../_hooks'
  import type { PopupDirection } from './interface'

  defineOptions({ name: 'FPopup' })

  const prop = defineProps(Props)
  const emit = defineEmits([EMIT_VISIBLE])

  const { run } = useRun()
  const { classes, styles } = useList(prop, 'popup')

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

  /**
   * 计算尺寸抽离方法
   *
   * @param { string } actualKey 实际要转换成为的 key
   * @param { Array } directions 方向规则
   */
  const computedSize = (
    actualKey: string,
    directions: PopupDirection[]
  ): FilterParamsList => {
    return {
      key: 'popupSize',
      actualKey: actualKey,
      callback: (): boolean => directions.includes(prop.direction)
    }
  }

  /** 类名列表 */
  const classList = classes(['maskBlur', 'direction', 'fullscreen'], 'f-popup')

  /** 样式列表 */
  const styleList = styles(
    [
      'zIndex',
      'maskBackground',
      'maskOpacity',
      'padding',
      computedSize('height', ['top', 'bottom']),
      computedSize('width', ['left', 'right'])
    ],
    'zIndex'
  )
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
      <div v-show="visible" :class="classList" :style="styleList">
        <!-- 遮罩层 -->
        <div v-if="showMask" class="f-popup__mask" />

        <!-- 主容器 -->
        <div class="f-popup__container" @click.self="closePopup">
          <!-- 主内容 -->
          <transition name="f-popup__wrapper-transition">
            <div v-show="visible" class="f-popup__wrapper">
              <slot />
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </teleport>
</template>
