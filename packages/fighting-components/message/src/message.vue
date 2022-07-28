<script lang="ts" setup name="FMessage">
  import { computed, onMounted, ref, isVNode } from 'vue'
  import { FIcon } from '@fighting-design/fighting-components'
  import { isString } from '@fighting-design/fighting-utils'
  import { Props, Emits } from './message'

  const props = defineProps(Props)
  defineEmits(Emits)

  const classList = computed(() => {
    const { type, round, close } = props

    return [
      'f-message',
      `f-message-${type}`,
      {
        'f-message-round': round,
        'f-message-hasClose': close
      }
    ]
  })

  const styleList = computed(() => {
    const { color, background, offset } = props

    return {
      color,
      background,
      top: offset
    }
  })

  const visible = ref(false)

  // eslint-disable-next-line no-undef
  const timer = ref<NodeJS.Timeout | null>(null)

  const clearTimer = () => {
    if (!timer.value) return
    clearTimeout(timer.value)
  }

  const closeMessage = () => {
    clearTimer()
    visible.value = false
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
    close: closeMessage
  })
</script>

<template>
  <transition
    name="f-message-fade"
    mode="out-in"
    @after-leave="$emit('destroy')"
  >
    <div
      v-show="visible"
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
