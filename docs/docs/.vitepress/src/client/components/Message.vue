<template>
  <transition-group name="demoblock-fade" tag="div" class="demoblock-message-wrap">
    <div
      v-for="item in messages"
      :key="item.name"
      :class="['demoblock-message', item.type ? `demoblock-message-${item.type}` : '']"
    >
      <div class="demoblock-message-content">{{ item.content }}</div>
    </div>
  </transition-group>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

let seed = 0
function getUuid() {
  return 'message_' + seed++
}

export default defineComponent({
  setup() {
    const messages = ref([])

    function add(props) {
      const name = getUuid()

      const _message = { name, ...props }

      messages.value.push(_message)

      // 定时移除，单位：秒
      const duration = props.duration
      setTimeout(() => {
        remove(name)
      }, duration * 1000)
    }

    function remove(name) {
      for (const [i, v] of messages.value.entries()) {
        if (v.name === name) {
          messages.value.splice(i, 1)
          break
        }
      }
    }

    return { messages, add, remove }
  }
})
</script>

<style scoped>
.demoblock-message-wrap {
  position: fixed;
  width: 100%;
  top: 16px;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
}

.demoblock-message-content {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 2px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin-bottom: 8px;
  color: #fff;
  background: var(--vp-c-brand);
  border-color: var(--vp-c-brand);
}

.demoblock-message-error .demoblock-message-content {
  background: #d03050;
  border-color: #d03050;
}

.demoblock-message {
  font-size: 14px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.demoblock-fade-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.demoblock-fade-leave-active {
  position: absolute;
}

.demoblock-fade-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
