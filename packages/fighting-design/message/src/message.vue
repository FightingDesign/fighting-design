<script lang="ts" setup name="FMessage">
  import { Props } from './props'
  import { computed, onMounted, ref, isVNode, nextTick } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { FCloseBtn } from '../../close-btn'
  import { isString } from '../../_utils'
  import { massageManage, useList } from '../../_hooks'
  import type { CSSProperties } from 'vue'

  const prop = defineProps(Props)
  const emit = defineEmits({
    destroy: (): boolean => true
  })

  const { classes, styles } = useList(prop, 'message')

  const messageRef = ref<HTMLDivElement>()
  const messageHeight = ref<number>(0)
  const visible = ref<boolean>(false)

  /** 判断是否为上面方位的 */
  const isTop = computed((): boolean => prop.placement === 'top')

  const siblingOffset = computed((): number => massageManage.getSiblingOffset(prop.placement, prop.id, !isTop.value))

  /** 计算偏移量 */
  const offset = computed((): number => prop.offset + siblingOffset.value)

  const bottom = computed((): number => messageHeight.value + offset.value)

  onMounted((): void => {
    nextTick((): void => {
      messageHeight.value = (messageRef.value as HTMLDivElement).getBoundingClientRect().height
    })
  })

  /** 类名列表 */
  const classList = classes(['type', 'placement', 'round'], 'f-message')

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
    console.log('移除')
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
    massageManage.removeInstance(prop.placement, prop.id)
  }

  /**
   * 开始计时
   *
   * 到时间隐藏提示框
   */
  const startTime = (): void => {
    console.log('移入')
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
    mode="out-in"
    :name="`f-message-fade` + (isTop ? '-top' : '-bottom')"
    @before-leave="closeMessageEnd"
    @after-leave="emit('destroy')"
  >
    <div
      v-show="visible"
      ref="messageRef"
      :class="classList"
      :style="[styleList, offsetStyle]"
      @mouseleave="startTime"
      @mouseenter="clearTimer"
    >
      <!-- icon -->
      <f-svg-icon v-if="isVNode(icon)" :size="24" class="f-message__icon">
        <component :is="icon" />
      </f-svg-icon>

      <!-- 消息文本 -->
      <component :is="message" v-if="isVNode(message)" />
      <div v-else class="f-message__text">
        {{ message }}
      </div>

      <!-- 关闭按钮 -->
      <div v-if="prop.close" class="f-message__close" @click="closeMessage">
        <template v-if="isString(closeBtn)">{{ closeBtn }}</template>
        <f-close-btn v-else :size="16">
          <component :is="closeBtn" />
        </f-close-btn>
      </div>
    </div>
  </transition>
</template>
