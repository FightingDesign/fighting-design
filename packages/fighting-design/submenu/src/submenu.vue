<script lang="ts" setup name="FSubmenu">
  import { Props } from './props'
  import { MENU_MODE_KEY } from '../../menu/src/props'
  import { FDropdown } from '../../dropdown'
  import { FSvgIcon } from '../../svg-icon'
  import { inject, ref } from 'vue'
  import { FIconChevronUp } from '../../_svg'
  import type { Ref } from 'vue'
  import type { MenuModeType } from '../../menu'
  import type { SubmenuPropsType } from './interface'

  const prop: SubmenuPropsType = defineProps(Props)

  /**
   * 初始是否展开
   */
  const isOpened: Ref<boolean> = ref<boolean>(prop.opened)

  /**
   * 点击展开或折叠菜单
   */
  const handelClick = (): void => {
    isOpened.value = !isOpened.value
  }

  /**
   * 注入父组件的模式依赖项
   */
  const INJECT_DEPEND: MenuModeType = inject<MenuModeType | undefined>(
    MENU_MODE_KEY,
    undefined
  ) as MenuModeType
</script>

<template>
  <li class="f-submenu">
    <!-- 垂直或水平模式 -->
    <f-dropdown v-if="INJECT_DEPEND !== 'inline'" :spacing="24" trigger="click">
      <slot name="title" />

      <template #content>
        <slot />
      </template>
    </f-dropdown>

    <!-- 内联模式 -->
    <ul v-else class="f-submenu__inline">
      <!-- 标题内容，用于点击触发 -->
      <li class="f-submenu__title" @click="handelClick">
        <div class="f-submenu__title-text">
          <slot name="title" />
        </div>

        <f-svg-icon
          :class="[
            'f-submenu__arrow-icon',
            { 'f-submenu__arrow-icon-animation': isOpened }
          ]"
          :icon="FIconChevronUp"
        />
      </li>

      <!-- 主要的折叠菜单内容 -->
      <transition name="f-submenu-content">
        <ul v-show="isOpened" class="f-submenu__content">
          <slot />
        </ul>
      </transition>
    </ul>
  </li>
</template>
