<script lang="ts" setup name="FMessage">
  import { computed, onMounted, ref, isVNode, nextTick } from 'vue'
  import FIcon from '../../icon'
  import { isString } from '../../_utils'
  import { Props, Emits } from './message'
  import { getSiblingOffset, removeInstance } from './instances'
  import type { CSSProperties, ComputedRef, Ref } from 'vue'
  import type { ordinaryFunctionInterface as a } from '../../_interface'
  import type { FPropsType } from './message'

  const prop: FPropsType = defineProps(Props)
  defineEmits(Emits)

  const messageRef = ref<HTMLDivElement>()
  const messageHeight: Ref<number> = ref<number>(0)
  const visible: Ref<boolean> = ref<boolean>(false)

  const isTop: ComputedRef<boolean> = computed((): boolean =>
    prop.placement.includes('top')
  )

  const siblingOffset: ComputedRef<number> = computed((): number =>
    getSiblingOffset(prop.placement, prop.id, !isTop.value)
  )

  const offset: ComputedRef<number> = computed(
    (): number => prop.offset + siblingOffset.value
  )

  const bottom: ComputedRef<number> = computed(
    (): number => messageHeight.value + offset.value
  )

  onMounted((): void => {
    nextTick((): void => {
      messageHeight.value = messageRef.value!.getBoundingClientRect().height
    })
  })

  const classList: ComputedRef<object | string[]> = computed(
    (): object | string[] => {
      const { type, round, close, placement } = prop

      return [
        'f-message',
        `f-message-${type}`,
        `f-message-${placement}`,
        {
          'f-message-round': round,
          'f-message-hasClose': close
        }
      ]
    }
  )

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
    removeInstance(prop.placement, prop.id)
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
    :name="`f-message-fade` + (isTop ? '-top' : '-bottom')"
    mode="out-in"
    @before-leave="closeMessageEnd"
    @after-leave="$emit('destroy')"
  >
    <div
      v-show="visible"
      ref="messageRef"
      :class="classList"
      :style="styleList"
      @mouseleave="startTime"
      @mouseenter="clearTimer"
    >
      <!-- icon -->
      <div v-if="icon" class="f-message--icon">
        <component :is="icon" v-if="isVNode(icon)" />
        <f-icon v-if="isString(icon)" size="24px" :icon="(icon as string)" />
      </div>
      <!-- 消息文本 -->
      <component :is="message" v-if="isVNode(message)" />
      <div v-else class="f-message--text">{{ message }}</div>
      <!-- 关闭按钮 -->
      <div v-if="close" class="f-message--close" @click="closeMessage">
        <component :is="closeBtn" v-if="isVNode(closeBtn)" />
        <span v-else-if="closeBtn && isString(closeBtn)">{{ closeBtn }}</span>
        <f-icon v-else size="16px" icon="f-icon-close" />
      </div>
    </div>
  </transition>
</template>
