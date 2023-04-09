<script lang="ts" setup name="FMessage">
  import { Props } from './props'
  import { computed, ref, getCurrentInstance, onMounted } from 'vue'
  import { remove } from './hooks'
  import { useList } from '../../_hooks'
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

  const close = (): void => {
    visible.value = false
    clearTimeout(timeout)
  }

  onMounted((): void => {
    visible.value = true
  })

  const onRemove = (): void => {
    remove(instance)
  }

  const offsetVal = ref(prop.offset)

  defineExpose({ offsetVal })

  const afterLeave = (): void => {
    if (instance.vnode.el) {
      instance.vnode.el.parentElement?.removeChild(instance.vnode.el)
    }
  }

  const delayClose = (): void => {
    if (prop.duration > 0) {
      timeout = setTimeout((): void => {
        close()
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
</script>

<template>
  <transition
    mode="out-in"
    :name="`f-message-fade` + (isPosition ? '-top' : '-bottom')"
    @before-leave="onRemove"
    @after-leave="afterLeave"
  >
    <div v-show="visible" :class="classList" :style="offsetStyle">
      <span>{{ message }}</span>
      <button @click="close">关闭</button>
    </div>
  </transition>
</template>
