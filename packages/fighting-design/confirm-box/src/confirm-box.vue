<script lang="ts" setup>
  import { Props } from './props'
  import { FButton } from '../../button'
  import { FSpace } from '../../space'
  import { FCloseBtn } from '../../close-btn'
  import { ref } from 'vue'
  import { useRun } from '../../_hooks'
  import { isFunction } from '../../_utils'

  defineOptions({ name: 'FConfirmBox' })

  const prop = defineProps(Props)

  const { run } = useRun()

  /** 是否展示确认框 */
  const isShow = ref(prop.show)
  /** button loading */
  const isLoading = ref(false)

  /** 关闭确认框 */
  const handleClose = (): void => {
    isShow.value = false
  }

  /** 开启之后执行的回调方法 */
  const handleOpenEnd = (): void => {
    run(prop.onOpen, isShow.value)
  }

  /** 关闭之后执行的回调方法 */
  const handleCloseEnd = (): void => {
    run(prop.onClose, isShow.value)
  }

  /**
   * 点击确认执行的回调方法
   *
   * @param { Object } evt 事件对象
   */
  const handleConfirm = async (evt: MouseEvent): Promise<void> => {
    isLoading.value = true

    if (isFunction(prop.onConfirm)) {
      await prop.onConfirm(evt)
    }

    handleClose()
  }

  /**
   * 点击取消执行的回调方法
   *
   * @param { Object } evt 事件对象
   */
  const handleCancel = async (evt: MouseEvent): Promise<void> => {
    isLoading.value = true

    if (isFunction(prop.onCancel)) {
      await prop.onCancel(evt)
    }

    handleClose()
  }
</script>

<template>
  <teleport to="body">
    <transition
      name="f-confirm-box__trans"
      appear
      @after-enter="handleOpenEnd"
      @after-leave="handleCloseEnd"
    >
      <div v-if="isShow" class="f-confirm-box">
        <!-- 遮罩层 -->
        <div class="f-confirm-box__mask" />

        <!-- 容器 -->
        <div class="f-confirm-box__container">
          <!-- 头部 -->
          <div class="f-confirm-box__header">
            <div class="f-confirm-box__title">{{ title }}</div>

            <f-close-btn :disabled="isLoading" :on-click="handleClose" />
          </div>

          <!-- 身体 -->
          <div class="f-confirm-box__body">{{ content }}</div>

          <!-- 底部 -->
          <div class="f-confirm-box__footer">
            <f-space>
              <f-button :loading="isLoading" :on-click="handleCancel">
                {{ cancelText || '取消' }}
              </f-button>
              <f-button :loading="isLoading" type="primary" :on-click="handleConfirm">
                {{ confirmText || '确定' }}
              </f-button>
            </f-space>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>
