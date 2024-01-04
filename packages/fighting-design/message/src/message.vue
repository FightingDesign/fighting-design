<script lang="ts" setup>
  import { Props } from './props'
  import { isString } from '../../_utils'
  import { useMessageWork } from '../../_hooks'
  import { FSvgIcon } from '../../svg-icon'
  import { isVNode } from 'vue'
  import { FCloseBtn } from '../../close-btn'

  defineOptions({ name: 'FMessage' })

  const prop = defineProps(Props)

  const {
    classList,
    style,
    visible,
    isPosition,
    offsetStyle,
    offsetVal,
    onBeforeLeave,
    onAfterLeave,
    clearTimer,
    startTime,
    handelClose
  } = useMessageWork(prop, 'message')

  defineExpose({ offsetVal })
</script>

<template>
  <transition
    mode="out-in"
    appear
    :name="'f-message-fade' + (isPosition ? '-top' : '-bottom')"
    @before-leave="onBeforeLeave"
    @after-leave="onAfterLeave"
  >
    <div
      v-show="visible"
      :class="classList"
      :style="[offsetStyle, style]"
      @mouseleave="startTime"
      @mouseenter="clearTimer"
    >
      <!-- 前缀 icon -->
      <div v-if="icon" class="f-message__before_icon">
        <f-svg-icon :icon="icon" :size="16" />
      </div>

      <!-- 提示信息 -->
      <component :is="message" v-if="isVNode(message)" />
      <div v-else class="f-message__text">{{ message }}</div>

      <!-- 关闭按钮 -->
      <div v-if="close" class="f-message__close" @click="handelClose">
        <template v-if="isString(closeBtn)">{{ closeBtn }}</template>
        <f-close-btn v-else :icon="closeBtn" :size="15" color="#a4a4a4" />
      </div>
    </div>
  </transition>
</template>
