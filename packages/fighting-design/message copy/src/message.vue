<script lang="ts" setup name="FMessage">
  import { Props } from './props'
  import { ref, isVNode } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { FCloseBtn } from '../../close-btn'
  import { isString } from '../../_utils'
  import { useEject } from '../../_hooks'
  import type { Ref } from 'vue'

  const prop = defineProps(Props)
  const emit = defineEmits({
    destroy: (): boolean => true
  })

  /** 元素节点 */
  const FMessageEl = ref<HTMLDivElement>()

  const {
    classList,
    styleList,
    bottom,
    offsetStyle,
    isPosition,
    visible,
    clearTimer,
    closeMessage,
    closeMessageEnd,
    startTime
  } = useEject(prop, 'message', FMessageEl as Ref<HTMLDivElement>)

  defineExpose({
    visible,
    bottom,
    close: closeMessage
  })
</script>

<template>
  <transition
    mode="out-in"
    :name="`f-message-fade` + (isPosition ? '-top' : '-bottom')"
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
