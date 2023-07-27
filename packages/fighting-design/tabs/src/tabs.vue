<script lang="ts" setup>
  import { Props, TABS_PROPS_KEY } from './props'
  import { provide, getCurrentInstance, ref, isVNode } from 'vue'
  import { isObject, isArray } from '../../_utils'
  import type { TabsItemProps } from '../../tabs-item'
  import type {
    ComponentInternalInstance,
    VNode,
    Component,
    VNodeNormalizedChildren
  } from 'vue'
  import type { TabsOpts, TabsProvide, TabsChildrenItem } from './interface'

  defineOptions({ name: 'FTabs' })

  defineProps(Props)
  const modelValue = defineModel<number | string>({
    default: null,
    type: [Number, String]
  })

  /** 当前选中的 name */
  const activeName = ref<string | number>(0)

  const childrenMap = new Map<number, TabsOpts>()
  const children = ref<TabsChildrenItem[]>()

  const flattedChildren = (children: VNode | VNodeNormalizedChildren): VNode[] => {
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

  const registerChild = (opts: TabsOpts): void => {
    childrenMap.set(opts.uid, opts)

    const componentList: VNode[] = getChildrenComponent(root, component)

    const componentUid: number[] = componentList
      .map((item: VNode): number | null => {
        return item.component ? item.component.uid : null
      })
      .filter(Boolean) as number[]

    console.log(componentUid)

    children.value = (
      componentUid
        .map((e: number): TabsOpts | undefined => {
          return childrenMap.get(e)
        })
        .filter(Boolean) as TabsOpts[]
    ).map((item: TabsOpts, index: number): TabsChildrenItem => {
      item.activeName = item.activeName || index

      return {
        name: item.activeName || index,
        label: item.label
      } as const
    })

    if (modelValue.value) {
      activeName.value = modelValue.value
      return
    }

    if (children.value && children.value.length) {
      if (children.value[0].name) {
        activeName.value = children.value[0].name
      }
    }
  }

  /** 将信息传递给子组件 */
  provide<TabsProvide>(TABS_PROPS_KEY, {
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
    modelValue.value = name
  }
</script>

<template>
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
