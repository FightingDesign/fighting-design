<script lang="ts" setup name="FMessage">
  import { computed, onMounted, ref, isVNode, nextTick, VNode } from 'vue'
  import FIcon from '../../icon'
  import { isString } from '../../_utils'
  import { Props, Emits, notificationDefaultIcon } from './notification'
  import type { CSSProperties, ComputedRef, Ref } from 'vue'
  import type {
    ordinaryFunctionInterface as a,
    classListInterface as b
  } from '../../_interface'
  import type { FPropsType } from './notification'
  import { massageManage } from './method'

  const prop: FPropsType = defineProps(Props)
  defineEmits(Emits)

  /**
   * 默认icon
   */
  const _icon: ComputedRef<String | null | VNode> = computed(() => {
    if (prop.icon) {
      return prop.icon
    } else if (prop.type) {
      return notificationDefaultIcon[prop.type]
    } else {
      return null
    }
  })

  const notificationRef = ref<HTMLDivElement>()
  const notificationHeight: Ref<number> = ref<number>(0)
  const visible: Ref<boolean> = ref<boolean>(false)

  const isTop: ComputedRef<boolean> = computed((): boolean =>
    prop.placement.includes('top')
  )

  const isRight: ComputedRef<boolean> = computed((): boolean =>
    prop.placement.includes('right')
  )

  const siblingOffset: ComputedRef<number> = computed((): number =>
    massageManage.getSiblingOffset(prop.placement, prop.id, !isTop.value)
  )

  const offset: ComputedRef<number> = computed(
    (): number => prop.offset + siblingOffset.value
  )

  const bottom: ComputedRef<number> = computed(
    (): number => notificationHeight.value + offset.value
  )

  onMounted((): void => {
    nextTick((): void => {
      notificationHeight.value = (
        notificationRef.value as HTMLDivElement
      ).getBoundingClientRect().height
    })
  })

  const classList: ComputedRef<b> = computed((): b => {
    const { type, round, close, placement } = prop

    return [
      'f-notification',
      `f-notification-${type}`,
      `f-notification-${placement}`,
      {
        'f-notification-round': round,
        'f-notification-hasClose': close
      }
    ]
  })

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { color, background, zIndex } = prop

    const styles: CSSProperties = {
      color,
      background,
      zIndex
    } as const

    if (prop.placement.includes('bottom')) {
      styles.bottom = offset.value + 'px'
    } else {
      styles.top = offset.value + 'px'
    }

    return styles
  })

  // eslint-disable-next-line no-undef
  const timer = ref<NodeJS.Timeout>()

  const clearTimer: a = (): void => {
    if (!timer.value) return
    clearTimeout(timer.value)
  }

  const closeMessage: a = (): void => {
    clearTimer()
    visible.value = false
  }
  const closeMessageEnd: a = (): void => {
    massageManage.removeInstance(prop.placement, prop.id)
  }

  const startTime: a = (): void => {
    if (!prop.duration) return
    timer.value = setTimeout((): void => {
      closeMessage()
    }, prop.duration)
  }

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
    :name="`f-notification-fade` + (isRight ? '-right' : '-left')"
    mode="out-in"
    @before-leave="closeMessageEnd"
    @after-leave="$emit('destroy')"
  >
    <div
      v-show="visible"
      ref="notificationRef"
      :class="classList"
      :style="styleList"
      @mouseleave="startTime"
      @mouseenter="clearTimer"
    >
      <!-- icon -->
      <div v-if="showIcon && _icon" class="f-notification--icon">
        <component :is="_icon" v-if="isVNode(_icon)" />
        <f-icon v-if="isString(_icon)" size="24px" :icon="(_icon as string)" />
      </div>
      <!-- 主体内容 -->
      <div class="f-notification--info">
        <!-- 标题 -->
        <div class="f-notification--title">
          <component :is="title" v-if="isVNode(title)" />
          <h3 v-else class="f-notification--title-text">
            {{ title }}
          </h3>
        </div>
        <!-- 消息文本 -->
        <component :is="message" v-if="isVNode(message)" />
        <div v-else class="f-notification--text">
          {{ message }}
        </div>
      </div>
      <!-- 关闭按钮 -->
      <div
        v-if="prop.close"
        class="f-notification--close"
        @click="closeMessage"
      >
        <component :is="closeBtn" v-if="isVNode(closeBtn)" />
        <span v-else-if="closeBtn && isString(closeBtn)">{{ closeBtn }}</span>
        <f-icon v-else size="16px" icon="f-icon-close" />
      </div>
    </div>
  </transition>
</template>
