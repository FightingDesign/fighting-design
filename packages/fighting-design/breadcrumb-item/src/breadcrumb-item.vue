<script lang="ts" setup name="FBreadcrumbItem">
  import { Props } from './props'
  import { inject, computed, getCurrentInstance, reactive } from 'vue'
  import { BREADCRUMB_PROPS_KEY } from '../../breadcrumb/src/props'
  import { FSvgIcon } from '../../svg-icon'
  import { useList } from '../../_hooks'
  import { FIconChevronRightVue } from '../../_svg'
  import type {
    VNode,
    Component,
    ComputedRef,
    CSSProperties,
    ComponentInternalInstance
  } from 'vue'
  import type { BreadcrumbPropsType } from '../../breadcrumb'
  import type { BreadcrumbItemPropsType } from './interface'

  const prop: BreadcrumbItemPropsType = defineProps(Props)

  /**
   * 获取注入依赖项
   */
  const INJECT_DEPEND: BreadcrumbPropsType | undefined = inject<
    BreadcrumbPropsType | undefined
  >(BREADCRUMB_PROPS_KEY, undefined)

  const { styles } = useList(
    reactive({
      iconColor: prop.iconColor || (INJECT_DEPEND && INJECT_DEPEND.iconColor),
      fontColor: prop.fontColor || (INJECT_DEPEND && INJECT_DEPEND.fontColor),
      fontSize: INJECT_DEPEND && INJECT_DEPEND.fontSize
    }),
    'breadcrumb-item'
  )

  /**
   * 获取当前组件实例
   */
  const instance: ComponentInternalInstance =
    getCurrentInstance() as ComponentInternalInstance

  /**
   * 计算当前需要展示的 svg
   */
  const svgIconComponent: ComputedRef<VNode | Component> = computed(
    (): VNode | Component => {
      if (prop.separator) return prop.separator

      if (INJECT_DEPEND && INJECT_DEPEND.separator) {
        return INJECT_DEPEND.separator
      }

      return FIconChevronRightVue
    }
  )

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = styles([
    'fontColor',
    'iconColor',
    'fontSize'
  ])

  /**
   * 点击触发
   */
  const handelClick = (): void => {
    /**
     * 获取到路由实例
     */
    const router = instance.appContext.config.globalProperties.$router

    if (router && prop.to) {
      try {
        router.push(prop.to)
      } catch (err: unknown) {
        console.warn(err)
      }
    }
  }
</script>

<template>
  <div class="f-breadcrumb-item" :style="styleList" @click="handelClick">
    <span class="f-breadcrumb-item__text">
      <slot />
    </span>

    <f-svg-icon :icon="svgIconComponent" :size="16" />
  </div>
</template>
