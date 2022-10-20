<script lang="ts" setup name="FMessage">
  import { computed, onMounted, ref, isVNode, nextTick } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { FCloseBtn } from '../../close-btn'
  import { Props, Emits } from './message'
  import { isString } from '../../_utils'
  import { massageManage } from '../../_model/message/method'
  import type { CSSProperties, ComputedRef, Ref } from 'vue'
  import type {
    OrdinaryFunctionInterface as a,
    ClassListInterface as b
  } from '../../_interface'

  const prop = defineProps(Props)
  defineEmits(Emits)

  const messageRef = ref<HTMLDivElement>()
  const messageHeight: Ref<number> = ref<number>(0)
  const visible: Ref<boolean> = ref<boolean>(false)

  const isTop: ComputedRef<boolean> = computed((): boolean =>
    prop.placement.includes('top')
  )

  const siblingOffset: ComputedRef<number> = computed((): number =>
    massageManage.getSiblingOffset(prop.placement, prop.id, !isTop.value)
  )

  const offset: ComputedRef<number> = computed(
    (): number => prop.offset + siblingOffset.value
  )

  const bottom: ComputedRef<number> = computed(
    (): number => messageHeight.value + offset.value
  )

  onMounted((): void => {
    nextTick((): void => {
      messageHeight.value = (
        messageRef.value as HTMLDivElement
      ).getBoundingClientRect().height
    })
  })

  const classList: ComputedRef<b> = computed((): b => {
    const { type, round, placement } = prop

    return [
      'f-message',
      {
        [`f-message__${type}`]: type,
        [`f-message__${placement}`]: placement,
        'f-message__round': round
      }
    ] as const
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
    mode="out-in"
    :name="`f-message-fade` + (isTop ? '-top' : '-bottom')"
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
