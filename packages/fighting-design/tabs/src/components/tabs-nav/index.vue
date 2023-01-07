<script lang="ts" setup name="FTabsNav">
  import { Props } from './props'
  import { computed, watch } from 'vue'
  import { FIconPlusVue } from '../../../../_svg'
  import { isBoolean } from '../../../../_utils'
  import { FSvgIcon } from '../../../../svg-icon'
  import { FCloseBtn } from '../../../../close-btn'
  import { useTabsNavStyle, useRun } from '../../../../_hooks'
  import type { TabsPaneName, TabsPosition, TabsJustifyContent, TabsType } from '../../interface'

  const prop = defineProps(Props)

  const { setActiveLineStyle, currentIndex, activeLineStyle } = useTabsNavStyle(prop)

  /**
   * 点击切换标签执行
   *
   * @param name name
   */
  const clickSwitchNavItem = async (name: TabsPaneName): Promise<void> => {
    let res: boolean | void = true

    if (prop.onSwitch) {
      res = await prop.onSwitch(name)
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

  /**
   * line 风格样式调整
   *
   * 监视选中的标签，如果发生变化，处理底部选中条的位移
   *
   * 监视位置、类型、对齐方式发生变化时触发
   */
  watch(
    [
      (): TabsPosition => prop.position,
      (): TabsType => prop.type,
      (): TabsJustifyContent => prop.justifyContent,
      (): number => currentIndex.value
    ],
    (): void => {
      prop.type === 'line' && setActiveLineStyle()
    },
    { immediate: true }
  )

  /** 事件处理 */
  const trigger = computed((): 'click' | 'mouseenter' => {
    return prop.trigger === 'hover' ? 'mouseenter' : 'click'
  })
</script>

<template>
  <div :class="['f-tabs-nav', `f-tabs-nav__${type}`]">
    <!-- 前缀内容 -->
    <div v-if="$slots.prefix" class="f-tabs-nav__prefix">
      <slot name="prefix" />
    </div>

    <!-- 主要内容 -->
    <div class="f-tabs-nav__wrapper">
      <div class="f-tabs-nav__main" :style="{ justifyContent: type === 'line' ? justifyContent : '' }">
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
          @[trigger]="clickSwitchNavItem(item.name)"
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
      </div>

      <!-- 线性类型滑动的标签 -->
      <div v-if="type === 'line'" class="f-tabs-nav__line-active" :style="activeLineStyle" />
    </div>

    <!-- 后缀内容 -->
    <div v-if="$slots.suffix" class="f-tabs-nav__suffix">
      <slot name="suffix" />
    </div>
  </div>
</template>
