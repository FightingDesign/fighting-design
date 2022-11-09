<script lang="ts" setup name="FTabs">
  import { Props, Emits, TabsProvideKey } from './props'
  import type { TabsPropsType, TabsNavInstance, TabsProvide, TabsPaneName } from './interface'
  import { getCurrentInstance, onMounted, ref, VNode, ComponentInternalInstance, provide, computed } from 'vue'
  import { TabsNav } from './components'

  const prop: TabsPropsType = defineProps(Props)
  defineEmits(Emits)

  const currentName = ref<TabsPaneName>(prop.modelValue || 0)

  provide<TabsProvide>(TabsProvideKey, {
    currentName
  })
  /**
   * 需要从children中取得每个标签的属性
   */
  const instance:ComponentInternalInstance = getCurrentInstance()
  const navs = ref<TabsNavInstance[]>([])

  function getNavItem () {
    // 拿到用户传入的panes
    const panes = (instance.subTree.children as VNode[]).find(e => e.props && e.props.class === 'f-tabs-content')!.children[0].children as VNode[]
    navs.value = panes.map((e, i) => {
      if (!e.props.name) {
        e.component.ctx.name = i
        console.log(e)
      }
      return {
      name: e.props.name || (e.props.name = i), // name如果没填，用下标代替
      label: e.children['label'] || e.props.label
    }
   }) as TabsNavInstance[]

    currentName.value = navs.value[0].name
  }

  function setCurrentName(name: TabsPaneName) {
    currentName.value = name
  }

  const styleList = computed(() => {
    const { position } = prop

    return [
      `f-tabs__position_${position}`
    ]
  })

  onMounted(() => {
    getNavItem()
  })

  /**
   * 通过refs 抛出当前选中的值
   */
  defineExpose({
    currentName,
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
