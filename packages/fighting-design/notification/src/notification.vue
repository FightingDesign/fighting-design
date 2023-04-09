<script lang="ts" setup name="FNotification">
  import { Props } from './props'
  import { isString } from '../../_utils'
  import { useMessageWork } from '../../_hooks'
  import { FSvgIcon } from '../../svg-icon'
  import { FCloseBtn } from '../../close-btn'

  const prop = defineProps(Props)

  const {
    classList,
    styleList,
    visible,
    isPosition,
    offsetStyle,
    offsetVal,
    onBeforeLeave,
    onAfterLeave,
    clearTimer,
    startTime,
    handelClose
  } = useMessageWork(prop, 'notification')

  defineExpose({ offsetVal })
</script>

<template>
  <transition
    mode="out-in"
    :name="`f-notification-fade` + (isPosition ? '-right' : '-left')"
    @before-leave="onBeforeLeave"
    @after-leave="onAfterLeave"
  >
    <div
      v-show="visible"
      :class="classList"
      :style="[offsetStyle, styleList]"
      @mouseleave="startTime"
      @mouseenter="clearTimer"
    >
      <!-- 前缀 icon -->
      <div v-if="icon" class="f-notification__before_icon">
        <f-svg-icon :icon="icon" :size="16" />
      </div>

      <!-- 提示信息 -->
      <div class="f-notification__text">{{ message }}</div>

      <!-- 关闭按钮 -->
      <div v-if="close" class="f-notification__close" @click="handelClose">
        <template v-if="isString(closeBtn)">{{ closeBtn }}</template>
        <f-close-btn v-else :icon="closeBtn" :size="15" color="#a4a4a4" />
      </div>
    </div>
  </transition>
</template>
