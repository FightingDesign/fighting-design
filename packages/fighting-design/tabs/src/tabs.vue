<script lang="ts" setup name="FTabs">
  import { Props, Emits, TabsProvideKey } from './props'
  import type { TabsPropsType, TabsNavInstance, TabsProvide, TabsPaneName } from './interface'
  import { onMounted, ref, provide, computed, ComponentInternalInstance, getCurrentInstance, watch, onBeforeUpdate, nextTick } from 'vue'
  import { TabsNav } from './components'
  import { debugWarn, __DEV__ } from '../../_utils'
  import { flattedChildren, getChildrenComponent } from './utils'
  const instance:ComponentInternalInstance = getCurrentInstance()


  const prop: TabsPropsType = defineProps(Props)
  const emits = defineEmits(Emits)
  /**
   * 当前选中的pane
   */
  const currentName = ref<TabsPaneName>(0)

  function setCurrentName(name: TabsPaneName) {
    emits('update:modelValue', name)
  }
  /**
   * panes集合
   */
  const panes = ref([])
  /**
   * 更新pane列表
   * @param pane 
   */
  function updatePaneList() {
    nextTick(() => {
      panes.value = getChildrenComponent(instance, 'FTabsPane').map(e => e.component)
    })
  }
  /**
   * nav列表
   */
  const navs = computed<TabsNavInstance[]>(() => {
    return panes.value.map((e, i) => {
      return {
        name: e.props.name || (e.props.name = i), // name如果没填，用下标代替
        label: e.slots['label'] || e.props.label
      }
    })
  })
  /**
   * 将prop.modelValue同步到currentName中
   */
   watch(() => prop.modelValue, (val) => {
    currentName.value = val

    if (__DEV__ && navs.value.length && navs.value.every(e => e.name !== val)) {
      debugWarn('FTabs', `未找到名为 ${val} 的标签`)
    }
  }, {
    immediate: true
  })

  onMounted(() => {
    currentName.value = prop.modelValue || navs.value[0].name // 如果没有传value，默认选中第一个
  })
  
  const styleList = computed(() => {
    const { position } = prop

    return [
      `f-tabs__position_${position}`
    ]
  })

  /**
   * 通过refs 抛出当前选中的值
   */
  defineExpose({
    currentName,
  })

  provide<TabsProvide>(TabsProvideKey, {
    currentName,
    updatePaneList
  })

</script>

<template>
  <div class="f-tabs" :class="styleList">
    <tabs-nav
      :navs="navs"
      :type="prop.type"
      :currentName="currentName"
      :position="position"
      @setCurrentName="setCurrentName"
    />
    <div class="f-tabs-content">
      <slot></slot>
    </div>
  </div>
</template>
