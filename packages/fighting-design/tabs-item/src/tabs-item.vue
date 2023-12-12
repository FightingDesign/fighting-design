<script lang="ts" setup>
  import { Props } from './props'
  import { TABS_PROPS_KEY } from '../../tabs/src/props'
  import { inject, computed, getCurrentInstance, ref, onMounted, reactive } from 'vue'
  import type { ComponentInternalInstance } from 'vue'

  defineOptions({ name: 'FTabsItem' })

  const prop = defineProps(Props)

  /** 获取当前组件实例 */
  const instance = getCurrentInstance() as ComponentInternalInstance

  /** 当前选中的 name */
  const activeName = ref(prop.name)

  /** 获取父组件注入的依赖项 */
  const parentInject = inject(TABS_PROPS_KEY, null)

  const options = reactive({
    activeName,
    uid: instance.uid,
    label: prop.label
  })

  /** 该组件是否加载 */
  const isLoad = computed((): boolean => {
    if (!parentInject) return false
    if (parentInject.activeName.value === activeName.value) {
      return true
    }
    return !prop.lazy
  })

  /** 该组件是否显示 */
  const isActive = computed((): boolean | null => {
    if (!parentInject) {
      return false
    }

    return parentInject.activeName.value === options.activeName
  })

  /** 在组件插入及卸载时都要更新父级的 nav 列表 */
  onMounted((): void => {
    parentInject && parentInject.registerChild(options)
  })
</script>

<template>
  <div
    v-if="isLoad"
    v-show="isActive"
    :class="['f-tabs-item', { 'f-tabs-item__active': isActive }]"
    role="tabpanel"
  >
    <slot />
  </div>
</template>
