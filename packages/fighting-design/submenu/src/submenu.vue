<script lang="ts" setup name="FSubmenu">
  import { Props } from './props'
  import { MENU_PROVIDE_KEY } from '../../menu/src/props'
  import { FDropdown } from '../../dropdown'
  import { FText } from '../../text'
  import { FCollapseAnimation } from '../../collapse-animation'
  import { FSvgIcon } from '../../svg-icon'
  import { inject, ref } from 'vue'
  import { FIconChevronDown } from '../../_svg'
  import type { Ref } from 'vue'
  import type { MenuProvideInterface } from '../../menu'
  import type { SubmenuPropsType } from './interface'

  const prop: SubmenuPropsType = defineProps(Props)

  /**
   * 注入父组件的模式依赖项
   */
  const INJECT_DEPEND: MenuProvideInterface = inject<
    MenuProvideInterface | undefined
  >(MENU_PROVIDE_KEY, undefined) as MenuProvideInterface

  /**
   * 初始是否展开
   */
  const isOpened: Ref<boolean> = ref<boolean>(prop.opened)

  /**
   * 点击展开或折叠菜单
   */
  const handelClick = (): void => {
    if (prop.disabled) return
    isOpened.value = !isOpened.value
  }
</script>

<template>
  <li
    :class="[
      'f-submenu',
      {
        [`f-submenu__${INJECT_DEPEND.mode}`]: INJECT_DEPEND.mode,
        'f-submenu__disabled': disabled
      }
    ]"
  >
    <!-- 垂直或水平模式 -->
    <f-dropdown
      v-if="INJECT_DEPEND?.mode !== 'inline'"
      :spacing="24"
      trigger="click"
    >
      <div class="f-submenu__title">
        <f-text>
          <slot v-if="$slots.title" name="title" />
        </f-text>

        <f-svg-icon :icon="FIconChevronDown" />
      </div>

      <template #content>
        <slot />
      </template>
    </f-dropdown>

    <!-- 内联模式 -->
    <ul v-else class="f-submenu__inline">
      <!-- 标题内容，用于点击触发 -->
      <li class="f-submenu__title" @click="handelClick">
        <!-- 标题内容 -->
        <f-text class="f-submenu__title-text" :bold="isOpened">
          <slot name="title" />
        </f-text>

        <!-- 箭头图标 -->
        <f-svg-icon
          :class="[
            'f-submenu__arrow-icon',
            { 'f-submenu__arrow-icon-animation': isOpened }
          ]"
          :icon="FIconChevronDown"
        />
      </li>

      <!-- 主要的折叠菜单内容 -->
      <ul class="f-submenu__content">
        <f-collapse-animation :opened="isOpened">
          <slot />
        </f-collapse-animation>
      </ul>
    </ul>
  </li>
</template>
