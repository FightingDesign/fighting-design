<script lang="ts" setup name="FMessage">
  import { Props } from './props'
  import { computed, ref, getCurrentInstance } from 'vue'
  import { useMessage } from './hooks'
  import type { ComponentInternalInstance } from 'vue'

  const prop = defineProps(Props)

  const { remove } = useMessage()

  /** 控制显示隐藏 */
  const visible = ref<boolean>(true)

  /** 判断方位 */
  const isPosition = computed((): boolean => prop.placement.includes('top'))

  const close = (): void => {
    visible.value = false
  }

  /** 获取到当前组件实例 */
  const instance = getCurrentInstance() as ComponentInternalInstance

  const onRemove = (): void => {
    remove(prop.placement, instance.uid)
  }
</script>

<template>
  <transition
    mode="out-in"
    :name="`f-message-fade` + (isPosition ? '-top' : '-bottom')"
    @before-leave="onRemove"
  >
    <div v-if="visible" class="f-message">
      <span>{{ message }}</span>
      <button @click="close">关闭</button>
    </div>
  </transition>
</template>
