<script lang="ts" setup>
  import { Props } from './props'
  import { MENU_PROVIDE_KEY } from '../../menu/src/props'
  import { FDropdown } from '../../dropdown'
  import { useRun } from '../../_hooks'
  import { FSvgIcon } from '../../svg-icon'
  import { inject, ref } from 'vue'
  import { FIconChevronDown } from '../../_svg'
  import type { MenuProvide } from '../../menu'

  defineOptions({ name: 'FSubmenu' })

  const prop = defineProps(Props)

  const { run } = useRun()

  /** 注入父组件的模式依赖项 */
  const parentInject: MenuProvide | null = inject(MENU_PROVIDE_KEY, null)

  /** 初始是否展开 */
  const isOpened = ref<boolean>(prop.opened)

  /**
   * 点击展开或折叠菜单
   *
   * @param { Object } evt 事件对象
   */
  const changeInline = (evt: MouseEvent): void => {
    if (prop.disabled) return
    isOpened.value = !isOpened.value

    /**
     * 执行点击 submenu 的回调
     *
     * 传入 evt 和展示状态两个参数
     */
    parentInject && run(parentInject.onSubmenuClick, isOpened.value, evt)
  }
</script>

<template>
  <div
    role="menuitem"
    :class="[
      'f-submenu',
      {
        [`f-submenu__${parentInject && parentInject.mode.value}`]:
          parentInject && parentInject.mode.value,
        'f-submenu__disabled': disabled
      }
    ]"
  >
    <!-- 垂直或水平模式 -->
    <f-dropdown
      v-if="parentInject && parentInject.mode.value !== 'inline'"
      trigger="click"
      :spacing="5"
    >
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
      <div role="none" class="f-submenu__title" @click="changeInline">
        <!-- 标题内容 -->
        <div role="none" class="f-submenu__title-text">
          <slot name="title" />
        </div>

        <!-- 箭头图标 -->
        <f-svg-icon
          :class="[
            'f-submenu__arrow-icon',
            { 'f-submenu__arrow-icon-animation': isOpened }
          ]"
          :icon="FIconChevronDown"
        />
      </div>

      <!-- 主要的折叠菜单内容 -->
      <div role="none" class="f-submenu__content">
        <f-collapse-animation :opened="isOpened" :animation-time="0.27">
          <slot />
        </f-collapse-animation>
      </div>
    </div>
  </div>
</template>
