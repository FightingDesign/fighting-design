<script lang="ts" setup name="FMessage">
  import { Props } from './props'
  import { computed, onMounted, ref, isVNode, nextTick } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { FCloseBtn } from '../../close-btn'
  import { isString } from '../../_utils'
  import { useList, useTips } from '../../_hooks'
  import type { CSSProperties, Ref } from 'vue'

  const prop = defineProps(Props)
  const emit = defineEmits({
    destroy: (): boolean => true
  })

  const { getSiblingOffset, removeInstance } = useTips()
  const { classes, styles } = useList(prop, 'message')

  /** 元素节点 */
  const FMessageEl: Ref<HTMLDivElement | null> = ref<HTMLDivElement | null>(null)
  /** message 元素的高度 */
  const messageHeight = ref<number>(0)
  /** 是否展示 */
  const visible = ref<boolean>(false)

  /** 判断是否为上面方位的 */
  const isTop = computed((): boolean => prop.placement === 'top')

  /** 计算组件之间偏移量 */
  const siblingOffset = computed((): number => getSiblingOffset(prop.placement, prop.id, !isTop.value))

  /** 计算偏移量 */
  const offset = computed((): number => prop.offset + siblingOffset.value)

  /** 底部偏移量 */
  const bottom = computed((): number => messageHeight.value + offset.value)

  onMounted((): void => {
    nextTick((): void => {
      /**
       * 设置元素的高度
       *
       * @see getBoundingClientRec https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRec
       */
      messageHeight.value = FMessageEl.value ? FMessageEl.value.getBoundingClientRect().height : 0
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
    :name="`f-message-fade` + (isTop ? '-top' : '-bottom')"
    @before-leave="closeMessageEnd"
    @after-leave="emit('destroy')"
  >
    <div
      v-show="visible"
      ref="FMessageEl"
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
