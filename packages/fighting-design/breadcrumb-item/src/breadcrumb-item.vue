<script lang="ts" setup name="FBreadcrumbItem">
  import { Props } from './props'
  import { inject, computed } from 'vue'
  import { BREADCRUMB_PROPS_KEY } from '../../breadcrumb/src/props'
  import { FSvgIcon } from '../../svg-icon'
  import { FIconChevronRightVue } from '../../_svg'
  import type { VNode, Component, ComputedRef, CSSProperties } from 'vue'
  import type { BreadcrumbPropsType } from '../../breadcrumb'
  import type { BreadcrumbItemPropsType } from './interface'

  const prop: BreadcrumbItemPropsType = defineProps(Props)

  /**
   * 获取注入依赖项
   */
  const INJECT_DEPEND: BreadcrumbPropsType | undefined = inject<
    BreadcrumbPropsType | undefined
  >(BREADCRUMB_PROPS_KEY, undefined)

  /**
   * 计算当前需要展示的 svg
   */
  const svgIconComponent: ComputedRef<VNode | Component> = computed(
    (): VNode | Component => {
      if (INJECT_DEPEND && INJECT_DEPEND.separator) {
        return INJECT_DEPEND.separator
      }
      return prop.separator || FIconChevronRightVue
    }
  )

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    return {
      '--f-breadcrumb-item-text-color':
        (INJECT_DEPEND && INJECT_DEPEND.itemColor) || prop.color,
      '--f-breadcrumb-item-icon-color':
        (INJECT_DEPEND && INJECT_DEPEND.iconColor) || prop.iconColor
    } as CSSProperties
  })
</script>

<template>
  <div class="f-breadcrumb-item" :style="styleList">
    <span class="f-breadcrumb-item__text">
      <slot />
    </span>

    <f-svg-icon :icon="svgIconComponent" :size="16" />
  </div>
</template>
