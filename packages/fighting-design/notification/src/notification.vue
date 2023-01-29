<script lang="ts" setup name="FNotification">
  import { Props } from './props'
  import { computed, onMounted, ref, isVNode, nextTick } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { FCloseBtn } from '../../close-btn'
  import { isString } from '../../_utils'
  import { useTips, useList } from '../../_hooks'
  import {
    FIconSmileLineVue,
    FIconLightbulbVue,
    FIconThumbUpVue,
    FIconCircleCrossVue,
    FIconWarningVue
  } from '../../_svg'
  import type { CSSProperties } from 'vue'
  import type { FightingIcon } from '../../_interface'

  const prop = defineProps(Props)
  const emit = defineEmits({
    destroy: (): boolean => true
  })

  const { getSiblingOffset, removeInstance } = useTips()
  const { classes, styles } = useList(prop, 'notification')

  /** 默认 icon 列表 */
  const notificationDefaultIcon = {
    default: FIconSmileLineVue,
    primary: FIconLightbulbVue,
    success: FIconThumbUpVue,
    danger: FIconCircleCrossVue,
    warning: FIconWarningVue
  } as const

  /** 默认 icon */
  const _icon = computed((): FightingIcon | null => {
    if (prop.icon) {
      return prop.icon
    } else if (prop.type) {
      return notificationDefaultIcon[prop.type]
    }
    return null
  })

  const FNotificationEl = ref<HTMLDivElement>()
  const notificationHeight = ref<number>(0)
  const visible = ref<boolean>(false)

  // const isTop = computed((): boolean => prop.placement.includes('top'))
  /** 判断是否为上面方位的 */
  // const isTop = computed((): boolean => prop.placement === 'top')

  const isRight = computed((): boolean => prop.placement.includes('right'))

  const siblingOffset = computed((): number => getSiblingOffset(prop.placement, prop.id, false))

  const offset = computed((): number => prop.offset + siblingOffset.value)

  const bottom = computed((): number => notificationHeight.value + offset.value)

  onMounted((): void => {
    nextTick((): void => {
      notificationHeight.value = (FNotificationEl.value as HTMLDivElement).getBoundingClientRect().height
    })
  })

  /** 类名列表 */
  const classList = classes(['type', 'placement', 'round'], 'f-notification')

  /** 样式列表 */
  const styleList = styles(['color', 'background', 'zIndex'], 'zIndex')

  /** 位置偏移量样式列表 */
  const offsetStyle = computed((): CSSProperties => {
    const styles: CSSProperties = {}

    if (prop.placement.includes('bottom')) {
      styles.bottom = offset.value + 'px'
    } else {
      styles.top = offset.value + 'px'
    }

    return styles
  })

  /** 计时器 */
  const timer = ref<NodeJS.Timeout>()

  /** 清除计时器 */
  const clearTimer = (): void => {
    if (!timer.value) return
    clearTimeout(timer.value)
  }

  /** 关闭提示框 */
  const closeMessage = (): void => {
    clearTimer()
    visible.value = false
  }

  /**
   * 关闭提示框之后的回调
   *
   * 移除组件实例
   */
  const closeMessageEnd = (): void => {
    removeInstance(prop.placement, prop.id)
  }

  /**
   * 开始计时
   *
   * 到时间隐藏提示框
   */
  const startTime = (): void => {
    if (!prop.duration) return
    timer.value = setTimeout((): void => {
      closeMessage()
    }, prop.duration)
  }

  /** 初始化之后开始计时 并且展示提示 */
  onMounted((): void => {
    startTime()
    visible.value = true
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
    :name="`f-notification-fade` + (isRight ? '-right' : '-left')"
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
