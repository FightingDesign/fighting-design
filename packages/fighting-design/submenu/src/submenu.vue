<script lang="ts" setup name="FSubmenu">
  import { Props } from './props'
  import { MENU_PROVIDE_KEY } from '../../menu/src/props'
  import { FDropdown } from '../../dropdown'
  import { FCollapseAnimation } from '../../collapse-animation'
  import { FSvgIcon } from '../../svg-icon'
  import { inject, ref } from 'vue'
  import { FIconChevronDown } from '../../_svg'
  import type { MenuProvide } from '../../menu'

  const prop = defineProps(Props)

  /** 注入父组件的模式依赖项 */
  const parentInject: MenuProvide | null = inject(MENU_PROVIDE_KEY, null)

  /** 初始是否展开 */
  const isOpened = ref<boolean>(prop.opened)

  /** 点击展开或折叠菜单 */
  const handelClick = (): void => {
    if (prop.disabled) return
    isOpened.value = !isOpened.value
  }
</script>

<template>
  <div
    role="menuitem"
    :class="[
      'f-submenu',
      {
        [`f-submenu__${parentInject && parentInject.mode}`]: parentInject && parentInject.mode,
        'f-submenu__disabled': disabled
      }
    ]"
  >
    <!-- 垂直或水平模式 -->
    <f-dropdown v-if="parentInject && parentInject.mode.value !== 'inline'" trigger="click" :spacing="5">
      <div class="f-submenu__title">
        <div class="f-submenu__title-text">
          <slot v-if="$slots.title" name="title" />
        </div>

        <f-svg-icon :icon="FIconChevronDown" />
      </div>

      <template #content>
        <slot />
      </template>
    </f-dropdown>

    <!-- 内联模式 -->
    <div v-else role="none" class="f-submenu__inline">
      <!-- 标题内容，用于点击触发 -->
      <div role="none" class="f-submenu__title" @click="handelClick">
        <!-- 标题内容 -->
        <div role="none" class="f-submenu__title-text">
          <slot name="title" />
        </div>

        <!-- 箭头图标 -->
        <f-svg-icon
          :class="['f-submenu__arrow-icon', { 'f-submenu__arrow-icon-animation': isOpened }]"
          :icon="FIconChevronDown"
        />
      </div>

      <!-- 主要的折叠菜单内容 -->
      <div role="none" class="f-submenu__content">
        <f-collapse-animation :opened="isOpened">
          <slot />
        </f-collapse-animation>
      </div>
    </div>
  </div>
</template>
