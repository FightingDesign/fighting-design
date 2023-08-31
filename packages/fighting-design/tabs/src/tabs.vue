<script lang="ts" setup>
  import { Props, TABS_PROPS_KEY } from './props'
  import { provide, getCurrentInstance, ref, isVNode, computed } from 'vue'
  import { isObject, isArray, isBoolean } from '../../_utils'
  import { useList } from '../../_hooks'
  import { FIconCross, FIconChevronLeft, FIconChevronRight } from '../../_svg'
  import type { TabsItemProps } from '../../tabs-item'
  import type {
    ComponentInternalInstance,
    VNode,
    Component,
    VNodeNormalizedChildren
  } from 'vue'
  import type { TabsOpts, TabsProvide } from './interface'
  import { useEditableTabs } from './useEditableTabs'

  defineOptions({ name: 'FTabs' })

  const prop = defineProps(Props)
  const modelValue = defineModel<number | string>({
    default: null,
    type: [Number, String]
  })

  const { classes, styles } = useList(prop, 'tabs')

  /** 当前选中的 name */
  const activeName = ref<string | number>(0)

  const childrenMap = new Map<number, TabsOpts>()
  const children = ref<TabsOpts[]>()

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

  const unRegisterChild = (name: string | number): void => {
    if (!children.value) {
      return
    }
    // 当前索引
    const curIndex: number = children.value.findIndex(
      (e: TabsOpts): boolean => e.activeName === name
    )
    const [prevIndex, nextIndex] = [curIndex - 1, curIndex + 1]

    /**如果删除的是当前选中的项，跳转到前一个， 若前一个没有 跳转到后一个*/
    if (name === activeName.value) {
      // 如果前面有，跳转到前一个
      if (prevIndex !== -1) {
        activeName.value = children.value[prevIndex].activeName
      }
      // 如果前面没有 并且后面有
      else if (
        prevIndex === -1 &&
        nextIndex <= children.value.length &&
        children.value.length !== 1
      ) {
        activeName.value = children.value[nextIndex].activeName
      }
    }

    // 删除children
    children.value?.splice(
      children.value.findIndex((e: TabsOpts): boolean => e.activeName === name),
      1
    )
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
  /**tab删除事件*/
  const handleTabClose = (name: string | number): void => {
    prop.handleTabClose(name)
  }

  /** 将信息传递给子组件 */
  provide<TabsProvide>(TABS_PROPS_KEY, {
    activeName,
    registerChild,
    unRegisterChild
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
  /** 可编辑的tab */
  const { variables, tabRef, tabWrapperRef, handleMove } = useEditableTabs(navs)
</script>

<template>
  <div role="tab" :class="classList" :style="styleList">
    <!-- 头部内容 -->
    <div class="f-tabs__head" :class="variables.isCanMove ? 'f-tabs__move' : null">
      <!-- 前缀插槽 -->
      <div v-if="$slots.prefix" class="f-tabs__prefix">
        <slot name="prefix" />
      </div>

      <!--?可编辑移动icon-prev -->
      <f-svg-icon
        v-show="variables.isCanMove"
        v-if="prop.editable"
        :icon="FIconChevronLeft"
        class="f-tabs__prev--icon f-tabs__move-icon"
        @click="handleMove('prev')"
      />

      <div id="tabWrapperId" ref="tabWrapperRef" class="f-tabs__wrapper">
        <!-- 标签列表 -->
        <div
          ref="tabRef"
          class="f-tabs__navs"
          :class="prop.editable ? 'f-tabs__nav-editable' : null"
        >
          <div
            v-for="(item, index) in navs"
            :key="index"
            :class="[
              'f-tabs__nav-item',
              {
                'f-tabs__nav-active': item.name === activeName
              }
            ]"
            @[trigger]="changeNavs(item.name)"
          >
            {{ item.label }}
            <!--删除按钮-->
            <f-svg-icon
              v-if="prop.editable"
              class="f-tabs__nav-close"
              :icon="FIconCross"
              @click.stop="handleTabClose(item.name)"
            />
          </div>
        </div>
      </div>

      <!--?可编辑移动icon-next -->
      <f-svg-icon
        v-show="variables.isCanMove"
        v-if="prop.editable"
        :icon="FIconChevronRight"
        class="f-tabs__next--icon f-tabs__move-icon"
        @click="handleMove('next')"
      />

      <!-- 后缀插槽 -->
      <div v-if="$slots.suffix" class="f-tabs__suffix f-tabs__move-icon">
        <slot name="suffix" />
      </div>
    </div>

    <!-- 主要展示的内容 -->
    <div class="f-tabs__body">
      <slot />
    </div>
  </div>
</template>
