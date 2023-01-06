<script lang="ts" setup name="FTabsNav">
  import { Props } from './props'
  import { isBoolean } from '../../../../_utils'
  import { computed, watch } from 'vue'
  import { FIconPlusVue } from '../../../../_svg'
  import { FSvgIcon } from '../../../../svg-icon'
  import { FCloseBtn } from '../../../../close-btn'
  import { useTabsNaStyle, useRun } from '../../../../_hooks'
  import type { ClassList } from '../../../../_interface'
  import type { TabsPaneName, TabsPosition, TabsJustifyContent, TabsType } from '../../interface'

  const prop = defineProps(Props)

  const { setCardStyle, setActiveLineStyle, wrapperStyle, currentIndex, activeLineStyle } = useTabsNaStyle(prop)

  /**
   * 上方切换方法
   *
   * @param name name
   */
  const clickNavItem = async (name: TabsPaneName): Promise<void> => {
    let res: boolean | void = true

    if (prop.onBeforeEnter) {
      res = await prop.onBeforeEnter(name)
    }

    if (isBoolean(res) && !res) return

    useRun(prop.setCurrentName, name)
  }

  /**
   * 添加或删除卡片
   *
   * @param action 添加或删除
   * @param name 标签 name
   * @param index 索引
   */
  const editItem = (action: 'remove' | 'add', name?: TabsPaneName, index?: number): void => {
    useRun(prop.setEdit, action, name, index)
  }

  /** 风格样式调整 */
  watch([currentIndex], (): void => {
    if (prop.type === 'line') {
      setActiveLineStyle()
    }
  })

  /** 监视位置、类型、对齐方式发生变化时触发 */
  watch(
    [(): TabsPosition => prop.position, (): TabsType => prop.type, (): TabsJustifyContent => prop.justifyContent],
    (): void => {
      wrapperStyle.value = {}
      if (prop.type === 'card') {
        setCardStyle()
      }

      if (prop.type === 'line') {
        setActiveLineStyle()
        if (prop.position === 'top' || prop.position === 'bottom') {
          wrapperStyle.value = {
            justifyContent: prop.justifyContent
          }
        }
      }
    },
    { immediate: true }
  )

  /** 样式列表 */
  const classList = computed((): ClassList => {
    const { type, position } = prop
    return [`f-tabs-nav__type_${type}`, `f-tabs-nav__type_${type}_${position}`] as const
  })

  /** 事件处理 */
  const trigger = computed((): 'click' | 'mouseenter' => {
    return prop.trigger === 'hover' ? 'mouseenter' : 'click'
  })
</script>

<template>
  <div class="f-tabs-nav" :class="classList">
    <!-- 前缀内容 -->
    <div v-if="$slots.prefix" class="f-tabs-nav__prefix">
      <slot name="prefix" />
    </div>

    <!-- 主要内容 -->
    <div class="f-tabs-nav__main">
      <div class="f-tabs-nav__wrapper" :style="wrapperStyle">
        <!-- 选项列表 -->
        <div
          v-for="(item, index) in navs"
          :key="index"
          :class="[
            'f-tabs-nav__item',
            {
              'f-tabs-nav__item-active': item.name === currentName
            }
          ]"
          @[trigger]="clickNavItem(item.name)"
        >
          <!-- 标签展示的内容 -->
          <span class="f-tabs-nav__item-label">{{ item.label || `标签 ${index}` }}</span>

          <!-- 关闭按钮 -->
          <f-close-btn v-if="type === 'card' && editStatus" round @click.stop="editItem('remove', item.name, index)" />
        </div>

        <!-- 卡片样式编辑状态下的添加按钮 -->
        <div v-if="type === 'card' && editStatus" class="f-tabs-nav__item" @click="editItem('add')">
          <f-svg-icon :icon="FIconPlusVue" color="#666" />
        </div>

        <!-- 线性类型滑动的标签 -->
        <div v-if="type === 'line'" class="f-tabs-nav__line-active" :style="activeLineStyle" />
      </div>
    </div>

    <!-- 后缀内容 -->
    <div v-if="$slots.suffix" class="f-tabs-nav__suffix">
      <slot name="suffix" />
    </div>
  </div>
</template>
