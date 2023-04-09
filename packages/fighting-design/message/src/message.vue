<script lang="ts" setup name="FMessage">
  import { Props } from './props'
  import { computed, ref, getCurrentInstance, onMounted } from 'vue'
  import { isString } from '../../_utils'
  import { useList, remove } from '../../_hooks'
  import { FSvgIcon } from '../../svg-icon'
  import { FCloseBtn } from '../../close-btn'
  import type { ComponentInternalInstance, CSSProperties } from 'vue'

  const prop = defineProps(Props)

  /** 获取到当前组件实例 */
  const instance = getCurrentInstance() as ComponentInternalInstance

  const { classes } = useList(prop, 'message')

  /** 类名列表 */
  const classList = classes(['type', 'placement', 'round'], 'f-message')

  /** 控制显示隐藏 */
  const visible = ref<boolean>(false)

  /** 判断方位 */
  const isPosition = computed((): boolean => prop.placement.includes('top'))

  let timeout: NodeJS.Timeout | undefined

  const onClose = (): void => {
    visible.value = false
    clearTimeout(timeout)
  }

  onMounted((): void => {
    visible.value = true
  })

  const onBeforeLeave = (): void => {
    remove(instance)
  }

  const offsetVal = ref(prop.offset)

  const onAfterLeave = (): void => {
    if (instance.vnode.el) {
      instance.vnode.el.parentElement?.removeChild(instance.vnode.el)
    }
  }

  const delayClose = (): void => {
    if (prop.duration > 0) {
      timeout = setTimeout((): void => {
        onClose()
      }, prop.duration)
    }
  }

  delayClose()

  /** 位置偏移量样式列表 */
  const offsetStyle = computed((): CSSProperties => {
    /** 样式对象 */
    const styles: CSSProperties = {}

    if (prop.placement.includes('bottom')) {
      styles.bottom = offsetVal.value + 'px'
    } else {
      styles.top = offsetVal.value + 'px'
    }

    return styles
  })

  defineExpose({ offsetVal })
</script>

<template>
  <transition
    mode="out-in"
    :name="'f-message-fade' + (isPosition ? '-top' : '-bottom')"
    @before-leave="onBeforeLeave"
    @after-leave="onAfterLeave"
  >
    <div v-show="visible" :class="classList" :style="offsetStyle">
      <!-- 前缀 icon -->
      <div v-if="icon" class="f-message__before_icon">
        <f-svg-icon :icon="icon" :size="16" />
      </div>

      <!-- 提示信息 -->
      <div class="f-message__text">{{ message }}</div>

      <!-- 关闭按钮 -->
      <div v-if="close" class="f-message__close" @click="onClose">
        <template v-if="isString(closeBtn)">{{ closeBtn }}</template>
        <f-close-btn v-else :icon="closeBtn" :size="15" color="#a4a4a4" />
      </div>
    </div>
  </transition>
</template>
