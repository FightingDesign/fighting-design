<script lang="ts" setup name="FMessage">
  import { Props } from './props'
  import { computed, ref, getCurrentInstance, onMounted } from 'vue'
  import { remove } from './hooks'
  import { useList } from '../../_hooks'
  import type { ComponentInternalInstance } from 'vue'

  const prop = defineProps(Props)

  const messageEl = ref<HTMLDivElement>()

  // const { remove } = useMessage()

  /** 获取到当前组件实例 */
  const instance = getCurrentInstance() as ComponentInternalInstance

  // const {} =
  // const { offsetStyle } = useOffset(messageEl, prop, instance)

  const { classes } = useList(prop, 'message')

  /** 类名列表 */
  const classList = classes(['type', 'placement', 'round'], 'f-message')

  /** 控制显示隐藏 */
  const visible = ref<boolean>(false)

  /** 判断方位 */
  const isPosition = computed((): boolean => prop.placement.includes('top'))

  const close = (): void => {
    visible.value = false
  }

  onMounted((): void => {
    visible.value = true
    // console.log(messageEl)
  })

  const onRemove = (): void => {
    remove(instance)
  }

  const offsetVal = ref(prop.offset)

  console.log(offsetVal.value)

  // console.log(offsetStyle.value)
</script>

<template>
  <transition
    mode="out-in"
    :name="`f-message-fade` + (isPosition ? '-top' : '-bottom')"
    @before-leave="onRemove"
  >
    <div
      v-show="visible"
      ref="messageEl"
      class="f-message"
      :class="classList"
      :style="{ top: offsetVal + 'px' }"
    >
      <span>{{ message }}</span>
      <button @click="close">关闭</button>
    </div>
  </transition>
</template>
