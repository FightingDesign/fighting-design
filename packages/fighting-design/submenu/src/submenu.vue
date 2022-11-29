<script lang="ts" setup name="FSubmenu">
  import { Props } from './props'
  import { MENU_MODE_KEY } from '../../menu/src/props'
  import { FDropdown } from '../../dropdown'
  import { FText } from '../../text'
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
   * 主要的折叠内容
   */
  const content: Ref<HTMLDivElement> = ref(null as unknown as HTMLDivElement)

  /**
   * 点击展开或折叠菜单
   */
  const handelClick = (): void => {
    if (!isOpened.value) {
      content.value.style.height = 'auto'
      const height: number = content.value.offsetHeight
      content.value.style.height = '0'
      content.value.offsetHeight
      content.value.style.transition = '0.33s'
      content.value.style.height = height + 'px'
      isOpened.value = true
    } else {
      content.value.style.height = '0'
      isOpened.value = false
    }
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
  <li
    :class="['f-submenu', { [`f-submenu__${INJECT_DEPEND}`]: INJECT_DEPEND }]"
  >
    <!-- 垂直或水平模式 -->
    <f-dropdown v-if="INJECT_DEPEND !== 'inline'" :spacing="24" trigger="click">
      <div class="f-submenu__title">
        <f-text>
          <slot name="title" />
        </f-text>

        <f-svg-icon :icon="FIconChevronUp" />
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
          :icon="FIconChevronUp"
        />
      </li>

      <!-- 主要的折叠菜单内容 -->
      <ul ref="content" class="f-submenu__content">
        <slot />
      </ul>
    </ul>
  </li>
</template>
