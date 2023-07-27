<script lang="ts" setup>
  import { Props } from './props'
  import { TABS_PROPS_KEY } from '../../tabs/src/props'
  import { inject, computed, getCurrentInstance, ref, onMounted, reactive } from 'vue'
  import type { ComponentInternalInstance } from 'vue'

  defineOptions({ name: 'FTabsItem' })

  const prop = defineProps(Props)

  /** 获取当前组件实例 */
  const instance = getCurrentInstance() as ComponentInternalInstance

  const paneName = ref(prop.name)

  /** 获取父组件注入的依赖项 */
  const parentInject = inject(TABS_PROPS_KEY, null)

  const pane = reactive({
    paneName,
    label: prop.label,
    uid: instance.uid,
    prop
  })

  /** 该组件是否显示 */
  const isShow = computed(
    (): boolean | null => parentInject && parentInject.activeName.value === pane.paneName
  )

  /** 在组件插入及卸载时都要更新父级的 pane 列表 */
  onMounted((): void => {
    parentInject && parentInject.registerChild(pane)
  })

  // onBeforeUnmount((): void => {
  //   parentInject && parentInject.unRegisterChild(pane)
  // })
</script>

<template>
  <div
    v-show="isShow"
    :class="['f-tabs-item', { 'f-tabs-item__active': isShow }]"
    role="tabpanel"
  >
    <slot />
  </div>
</template>
