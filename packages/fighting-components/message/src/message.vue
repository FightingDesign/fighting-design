<script lang="ts" setup name="FMessage">
  import { computed, onMounted, ref, isVNode, nextTick } from 'vue'
  import { FIcon } from '@fighting-design/fighting-components'
  import { isString } from '@fighting-design/fighting-utils'
  import { Props, Emits } from './message'
  import { getSiblingOffset, removeInstance } from './instances'

  const props = defineProps(Props)
  defineEmits(Emits)

  const isTop = computed(() => props.placement.includes('top'))

  const messageRef = ref<HTMLDivElement>()
  const siblingOffset = computed(() =>
    getSiblingOffset(props.placement, props.id, !isTop.value)
  )
  const offset = computed(() => props.offset + siblingOffset.value)
  const messageHeight = ref(0)
  const bottom = computed(() => messageHeight.value + offset.value)

  const visible = ref(false)

  onMounted(() => {
    nextTick(() => {
      messageHeight.value = messageRef.value!.getBoundingClientRect().height
    })
  })

  const classList = computed(() => {
    const { type, round, close } = props

    return [
      'f-message',
      `f-message-${type}`,
      `f-message-${props.placement}`,
      {
        'f-message-round': round,
        'f-message-hasClose': close
      }
    ]
  })

  const styleList = computed(() => {
    const { color, background } = props

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const styles: any = {
      color,
      background
    }

    if (props.placement.includes('bottom')) {
      styles.bottom = offset.value + 'px'
    } else {
      styles.top = offset.value + 'px'
    }

    return styles
  })

  // eslint-disable-next-line no-undef
  const timer = ref<NodeJS.Timeout | null>(null)

  const clearTimer = () => {
    if (!timer.value) return
    clearTimeout(timer.value)
  }

  const closeMessage = () => {
    clearTimer()
    visible.value = false
    // removeInstance(props.placement, props.id)
  }
  const closeMessageEnd = () => {
    removeInstance(props.placement, props.id)
  }

  const startTime = () => {
    // 如果 duration 设置为0，则不会自动关闭
    if (!props.duration) return
    timer.value = setTimeout(() => {
      closeMessage()
    }, props.duration)
  }

  onMounted(() => {
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
        <component :is="closeBtn" v-if="isVNode(icon)" />
        <f-icon v-if="isString(icon)" size="24px" :icon="icon" />
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
