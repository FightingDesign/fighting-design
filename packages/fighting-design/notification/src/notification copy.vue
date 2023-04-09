<script lang="ts" setup name="FNotification">
  import { Props } from './props'
  import { computed, ref, isVNode } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { FCloseBtn } from '../../close-btn'
  import { isString } from '../../_utils'
  import { useEject } from '../../_hooks'
  import {
    FIconSmileLineVue,
    FIconLightbulbVue,
    FIconThumbUpVue,
    FIconCircleCrossVue,
    FIconWarningVue
  } from '../../_svg'
  import type { FightingIcon } from '../../_interface'
  import type { Ref } from 'vue'

  const prop = defineProps(Props)
  const emit = defineEmits({
    destroy: (): boolean => true
  })

  /** 元素节点 */
  const FNotificationEl = ref<HTMLDivElement>()

  const {
    classList,
    styleList,
    bottom,
    offsetStyle,
    visible,
    isPosition,
    clearTimer,
    closeMessage,
    closeMessageEnd,
    startTime
  } = useEject(prop, 'notification', FNotificationEl as Ref<HTMLDivElement>)

  /** 默认 icon */
  const _icon = computed((): FightingIcon | null => {
    if (prop.icon) {
      return prop.icon
    } else if (prop.type) {
      /** 默认 icon 列表 */
      const icons = {
        default: FIconSmileLineVue,
        primary: FIconLightbulbVue,
        success: FIconThumbUpVue,
        danger: FIconCircleCrossVue,
        warning: FIconWarningVue,
        info: null
      } as const

      return icons[prop.type]
    }

    return null
  })

  defineExpose({
    visible,
    bottom,
    close: closeMessage
  })
</script>

<template>
  <transition
    mode="out-in"
    :name="`f-notification-fade` + (isPosition ? '-right' : '-left')"
    @before-leave="closeMessageEnd"
    @after-leave="emit('destroy')"
  >
    <div
      v-show="visible"
      ref="FNotificationEl"
      :class="classList"
      :style="[offsetStyle, styleList]"
      @mouseleave="startTime"
      @mouseenter="clearTimer"
    >
      <!-- icon -->
      <div v-if="showIcon && _icon" class="f-notification__icon">
        <f-svg-icon :icon="_icon" :size="28" />
      </div>

      <!-- 主体内容 -->
      <div class="f-notification__info">
        <!-- 标题 -->
        <div class="f-notification__title">
          <component :is="title" v-if="isVNode(title)" />
          <h3 v-else class="f-notification__title-text">
            {{ title }}
          </h3>
        </div>

        <!-- 消息文本 -->
        <component :is="message" v-if="isVNode(message)" />
        <div v-else class="f-notification__text">
          {{ message }}
        </div>
      </div>

      <!-- 关闭按钮 -->
      <div v-if="prop.close" class="f-notification__close" @click="closeMessage">
        <template v-if="isString(closeBtn)">{{ closeBtn }}</template>
        <f-close-btn v-else :size="16" />
      </div>
    </div>
  </transition>
</template>
