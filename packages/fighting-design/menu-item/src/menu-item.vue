<script lang="ts" setup name="FMenuItem">
  import { Props } from './props'
  import { MENU_PROVIDE_KEY } from '../../menu/src/props'
  import { FSvgIcon } from '../../svg-icon'
  import { useList } from '../../_hooks'
  import { getCurrentInstance, computed, inject } from 'vue'
  import type {
    ComputedRef,
    CSSProperties,
    ComponentInternalInstance
  } from 'vue'
  import type { MenuItemPropsType } from './interface'
  import type { MenuProvideInterface } from '../../menu'

  const prop: MenuItemPropsType = defineProps(Props)

  const { styles } = useList('menu-item', prop)

  /**
   * 注入父组件的模式依赖项
   */
  const INJECT_DEPEND: MenuProvideInterface = inject<
    MenuProvideInterface | undefined
  >(MENU_PROVIDE_KEY, undefined) as MenuProvideInterface

  /**
   * 获取当前组件实例
   *
   * @see docs#590 https://github.com/vuejs/docs/pull/590
   * @see core https://github.com/vuejs/core/blob/d52907f/packages/runtime-core/src/component.ts#L561
   * @see stackOverflow https://stackoverflow.com/questions/72209080/vue-3-is-getcurrentinstance-deprecated
   * @see getCurrentInstance https://blog.tianyuhao.cn/docs/vue/vue3-router.html#%E6%B2%A1%E6%9C%89%E5%AE%89%E8%A3%85%E8%B7%AF%E7%94%B1
   */
  const instance: ComponentInternalInstance =
    getCurrentInstance() as ComponentInternalInstance
  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = styles(['fontSize', 'color'])

  /**
   * 点击触发
   */
  const handelClick = (): void => {
    /**
     * 获取到路由实例
     */
    const router = instance.appContext.config.globalProperties.$router

    INJECT_DEPEND.setActiveName(prop.name)

    if (router && prop.to) {
      try {
        router.push(prop.to)
      } catch (err: unknown) {
        console.warn(err)
      }
    }
  }

  /**
   * 当前是否呗选中
   */
  const isActive: ComputedRef<boolean> = computed((): boolean => {
    return prop.name === INJECT_DEPEND?.defaultActive
  })
</script>

<template>
  <li
    :class="['f-menu-item', { 'f-menu-item__active': isActive }]"
    :style="styleList"
    @click="handelClick"
  >
    <f-svg-icon v-if="icon" :icon="icon" />

    <span class="f-menu-item__text">
      <slot />
    </span>
  </li>
</template>
