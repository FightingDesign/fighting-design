<script lang="ts" setup name="FMessage">
  import { computed, onMounted, ref } from 'vue'
  import { FIcon } from '@fighting-design/fighting-components'
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
    timer.value = setTimeout(() => {
      closeMessage()
    }, props.duration)
  }

  onMounted(() => {
    startTime()
    visible.value = true
  })
</script>

<template>
  <transition name="f-message-fade" mode="out-in" @after-leave="$emit('close')">
    <div v-show="visible" :class="classList" :style="styleList">
      <div v-if="icon" class="f-message--icon">
        <f-icon size="24px" :icon="icon" />
      </div>
      {{ message }}
      <div v-if="close" class="f-message--close" @click="closeMessage">
        <f-icon size="16px" icon="f-icon-close" />
      </div>
    </div>
  </transition>
</template>
