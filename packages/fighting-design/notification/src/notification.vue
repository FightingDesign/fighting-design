<script lang="ts" setup>
  import { Props } from './props'
  import { isString } from '../../_utils'
  import { useMessageWork } from '../../_hooks'
  import { computed, isVNode } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { FCloseBtn } from '../../close-btn'
  import {
    FIconSmileLine,
    FIconLightbulb,
    FIconThumbUp,
    FIconCircleCross,
    FIconWarning,
    FIconBell
  } from '../../_svg'
  import type { FightingIcon } from '../../_interface'

  defineOptions({ name: 'FNotification' })

  const prop = defineProps(Props)

  const {
    classList,
    styleList,
    visible,
    offsetStyle,
    offsetVal,
    onBeforeLeave,
    onAfterLeave,
    clearTimer,
    startTime,
    handelClose
  } = useMessageWork(prop, 'notification')

  /** 默认 icon */
  const beforeIcon = computed((): FightingIcon | undefined => {
    if (prop.icon) {
      return prop.icon
    }

    /** 默认 icon 列表 */
    const icons = {
      default: FIconSmileLine,
      primary: FIconLightbulb,
      success: FIconThumbUp,
      danger: FIconCircleCross,
      warning: FIconWarning,
      info: FIconBell
    } as const

    return icons[prop.type]
  })

  /** 是否为右侧弹出 */
  const isRight = computed((): boolean => prop.placement.includes('right'))

  defineExpose({ offsetVal })
</script>

<template>
  <transition
    mode="out-in"
    appear
    :name="`f-notification-fade` + (isRight ? '-right' : '-left')"
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
      <div v-if="beforeIcon" class="f-notification__icon">
        <f-svg-icon :icon="beforeIcon" :size="25" />
      </div>

      <!-- 提示信息 -->
      <div class="f-notification__content">
        <!-- 标题 -->
        <template v-if="title">
          <component :is="title" v-if="isVNode(title)" />
          <h3 v-else class="f-notification__title">{{ title }}</h3>
        </template>

        <!-- 主内容 -->
        <component :is="message" v-if="isVNode(message)" />
        <div v-else class="f-notification__message">{{ message }}</div>
      </div>

      <!-- 关闭按钮 -->
      <div v-if="close" class="f-notification__close" @click="handelClose">
        <template v-if="isString(closeBtn)">{{ closeBtn }}</template>
        <f-close-btn v-else :icon="closeBtn" :size="15" color="#a4a4a4" />
      </div>
    </div>
  </transition>
</template>
