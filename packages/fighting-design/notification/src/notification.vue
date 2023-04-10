<script lang="ts" setup name="FNotification">
  import { Props } from './props'
  import { isString } from '../../_utils'
  import { useMessageWork } from '../../_hooks'
  import { computed } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { FCloseBtn } from '../../close-btn'
  import {
    FIconSmileLineVue,
    FIconLightbulbVue,
    FIconThumbUpVue,
    FIconCircleCrossVue,
    FIconWarningVue,
    FIconBell
  } from '../../_svg'
  import type { FightingIcon } from '../../_interface'

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

  /** 默认 icon */
  const beforeIcon = computed((): FightingIcon | undefined => {
    if (prop.icon) {
      return prop.icon
    }

    /** 默认 icon 列表 */
    const icons = {
      default: FIconSmileLineVue,
      primary: FIconLightbulbVue,
      success: FIconThumbUpVue,
      danger: FIconCircleCrossVue,
      warning: FIconWarningVue,
      info: FIconBell
    } as const

    return icons[prop.type]
  })

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
      <div v-if="beforeIcon" class="f-notification__icon">
        <f-svg-icon :icon="beforeIcon" :size="25" />
      </div>

      <!-- 提示信息 -->
      <div class="f-notification__content">
        <h3 v-if="title" class="f-notification__title">{{ title }}</h3>
        <div class="f-notification__message">{{ message }}</div>
      </div>

      <!-- 关闭按钮 -->
      <div v-if="close" class="f-notification__close" @click="handelClose">
        <template v-if="isString(closeBtn)">{{ closeBtn }}</template>
        <f-close-btn v-else :icon="closeBtn" :size="15" color="#a4a4a4" />
      </div>
    </div>
  </transition>
</template>
