<script lang="ts" setup>
  import { Props } from './props'
  import { FButton } from '../../button'
  import { FSpace } from '../../space'
  import { FCloseBtn } from '../../close-btn'
  import { ref } from 'vue'

  defineOptions({ name: 'FConfirmBox' })

  const prop = defineProps(Props)

  /** 是否展示确认框 */
  const isShow = ref(prop.show)

  /** 关闭确认框 */
  const handelClose = (): void => {
    isShow.value = false
  }
</script>

<template>
  <transition name="modal">
    <div v-if="isShow" class="f-confirm-box">
      <!-- 遮罩层 -->
      <div class="f-confirm-box__mask" />

      <!-- 容器 -->
      <div class="f-confirm-box__container">
        <!-- 头部 -->
        <div class="f-confirm-box__header">
          <div class="f-confirm-box__title">{{ title }}</div>

          <f-close-btn :on-click="handelClose" />
        </div>

        <!-- 身体 -->
        <div class="f-confirm-box__body">{{ content }}</div>

        <!-- 底部 -->
        <div class="f-confirm-box__footer">
          <f-space>
            <f-button :on-click="onCancel">取消</f-button>
            <f-button type="primary" :on-click="onConfirm">确定</f-button>
          </f-space>
        </div>
      </div>
    </div>
  </transition>
</template>
