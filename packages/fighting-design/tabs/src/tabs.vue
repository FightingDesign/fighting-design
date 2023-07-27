<script lang="ts" setup>
  import { Props, TABS_PROPS_KEY } from './props'
  import { provide, getCurrentInstance, ref, isVNode } from 'vue'
  import { isObject, isArray } from '../../_utils'
  import type { TabsItemProps } from '../../tabs-item'
  import type { ComponentInternalInstance, VNode, Component } from 'vue'

  defineOptions({ name: 'FTabs' })

  defineProps(Props)
  const modelValue = defineModel<number | string>({
    default: null,
    type: [Number, String]
  })

  /** 获取当前组件实例 */
  const activeName = ref<string | number>(0)

  const childrenMap = new Map<number, any>()
  const children = ref()

  const flattedChildren = (children): VNode[] => {
    const vNodes = isArray(children) ? children : [children]
    const result: VNode[] = []

    vNodes.forEach((child): void => {
      if (isArray(child)) {
        result.push(...flattedChildren(child))
      } else if (isVNode(child) && isArray(child.children)) {
        result.push(...flattedChildren(child.children))
      } else {
        if (isVNode(child) && child.component) {
          result.push(child)
        }
      }
    })
    return result
  }

  const getChildrenComponent = (
    root: ComponentInternalInstance,
    component: string
  ): VNode[] => {
    if (!root.subTree) return []
    const flaChildren = flattedChildren(root.subTree.children)
    return flaChildren.filter(
      e => isObject(e.type) && (e.type as Component).name === component
    )
  }

  const root = getCurrentInstance() as ComponentInternalInstance
  const component = 'FTabsItem'

  const registerChild = (child): void => {
    childrenMap.set(child.uid, child)

    const componentList: VNode[] = getChildrenComponent(root, component)

    const componentUid: number[] = componentList
      .map((item: VNode): number | null => {
        return item.component ? item.component.uid : null
      })
      .filter(Boolean) as number[]

    children.value = componentUid
      .map((e: number): TabsPane | undefined => childrenMap.get(e))
      .filter(Boolean)
      .map((item, index) => {
        item.paneName = item.paneName || index

        return {
          name: item.paneName || index,
          label: item.prop.label
        }
      })
  }

  /** 将信息传递给子组件 */
  provide(TABS_PROPS_KEY, {
    activeName,
    registerChild
  })

  /**
   * 切换页
   *
   * @param { string } name 页的名字
   */
  const changeNavs = (name: TabsItemProps['name']): void => {
    activeName.value = name
    console.log(name)
  }
</script>

<template>
  {{ activeName }}
  <div role="tab" class="f-tabs">
    <!-- 标签列表 -->
    <div class="f-tabs__navs">
      <div
        v-for="(item, index) in children"
        :key="index"
        :class="['f-tabs__nav-item', { 'f-tabs__nav-active': item.name === activeName }]"
        @click="changeNavs(item.name)"
      >
        {{ item.label }}
      </div>
    </div>

    <!-- 主要展示的内容 -->
    <div class="f-tabs__content">
      <slot />
    </div>
  </div>
</template>
