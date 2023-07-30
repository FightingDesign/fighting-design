<script lang="ts" setup>
  import { Props, TABS_PROPS_KEY } from './props'
  import { provide, getCurrentInstance, ref, isVNode, computed, shallowRef } from 'vue'
  import { isObject, isArray, isBoolean } from '../../_utils'
  import { useList, useRun } from '../../_hooks'
  import { FCloseBtn } from '../../close-btn'
  import { FIconPlus } from '../../_svg'
  import { FSvgIcon } from '../../svg-icon'
  import type { TabsItemProps } from '../../tabs-item'
  import type {
    ComponentInternalInstance,
    VNode,
    Component,
    VNodeNormalizedChildren
  } from 'vue'
  import type {
    TabsOpts,
    TabsProvide,
    // TabsChildrenItem,
    TabsModelValue
  } from './interface'

  defineOptions({ name: 'FTabs' })

  const prop = defineProps(Props)
  const modelValue = defineModel<number | string>({
    default: null,
    type: [Number, String]
  })

  const { classes, styles } = useList(prop, 'tabs')
  const { run } = useRun()

  /** 当前选中的 name */
  const activeName = ref<string | number>(0)

  const childrenMap = new Map<number, TabsOpts>()
  const children = shallowRef<TabsOpts[]>()

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

    children.value = componentUid
      .map((e: number): TabsOpts | undefined => childrenMap.get(e))
      .filter(Boolean) as TabsOpts[]

    if (modelValue.value) {
      activeName.value = modelValue.value
      return
    }

    if (children.value && children.value.length) {
      if (children.value[0].activeName) {
        activeName.value = children.value[0].activeName
      }
    }
  }

  /** nav 列表 */
  const navs = computed(() => {
    return (
      children.value &&
      children.value.map((item: TabsOpts, index: number) => {
        item.activeName = item.activeName || index

        return {
          /** name 如果没有传递 则用索引代替 */
          name: item.activeName,
          label: item.label
        } as const
      })
    )
  })

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
  const changeNavs = async (name: TabsItemProps['name']): Promise<void> => {
    let result: boolean | void = true

    if (prop.onSwitch) {
      result = await prop.onSwitch(name)
    }

    if (isBoolean(result) && !result) return

    activeName.value = name
    modelValue.value = name
  }

  /** 类名列表 */
  const classList = classes(['position', 'type'], 'f-tabs')

  /** 样式列表 */
  const styleList = styles(['justifyContent'])

  /** 事件处理 */
  const trigger = computed((): 'click' | 'mouseenter' => {
    return prop.trigger === 'hover' ? 'mouseenter' : 'click'
  })

  /**
   * 添加或删除卡片
   *
   * @param { 'remove' | 'add' } action 添加或删除
   * @param { string | number } [name] 标签 name
   * @param { number } [index] 索引
   */
  const editItem = (
    action: 'remove' | 'add',
    name?: TabsModelValue,
    index?: number
  ): void => {
    run(prop.onEdit, action, name, index)
  }
</script>

<template>
  <div role="tab" :class="classList" :style="styleList">
    <!-- 头部内容 -->
    <div class="f-tabs__head">
      <!-- 前缀插槽 -->
      <div v-if="$slots.prefix" class="f-tabs__prefix">
        <slot name="prefix" />
      </div>

      <!-- 标签列表 -->
      <div class="f-tabs__navs">
        <div
          v-for="(item, index) in navs"
          :key="index"
          :class="[
            'f-tabs__nav-item',
            { 'f-tabs__nav-active': item.name === activeName }
          ]"
          @[trigger]="changeNavs(item.name)"
        >
          {{ item.label }}

          <!-- 关闭按钮 -->
          <f-close-btn
            v-if="type === 'card' && editStatus"
            round
            @click.stop="editItem('remove', item.name, index)"
          />
        </div>

        <!-- 卡片样式编辑状态下的添加按钮 -->
        <div
          v-if="type === 'card' && editStatus"
          class="f-tabs__nav-item"
          @click="editItem('add')"
        >
          <f-svg-icon :icon="FIconPlus" color="#666" />
        </div>
      </div>

      <!-- 后缀插槽 -->
      <div v-if="$slots.suffix" class="f-tabs__suffix">
        <slot name="suffix" />
      </div>
    </div>

    <!-- 主要展示的内容 -->
    <div class="f-tabs__body">
      <slot />
    </div>
  </div>
</template>
