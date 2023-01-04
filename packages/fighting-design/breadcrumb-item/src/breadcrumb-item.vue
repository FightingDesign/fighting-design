<script lang="ts" setup name="FBreadcrumbItem">
  import { Props } from './props'
  import { inject, computed, getCurrentInstance, reactive } from 'vue'
  import { BREADCRUMB_PROPS_KEY } from '../../breadcrumb/src/props'
  import { FSvgIcon } from '../../svg-icon'
  import { useList } from '../../_hooks'
  import { FIconChevronRightVue } from '../../_svg'
  import type { FightingIcon } from '../../_interface'
  import type { ComponentInternalInstance } from 'vue'
  import type { BreadcrumbProps } from '../../breadcrumb'

  const prop = defineProps(Props)

  /** 获取注入依赖项 */
  const parentInject = inject<BreadcrumbProps | null>(BREADCRUMB_PROPS_KEY, null)

  const { styles } = useList(
    reactive({
      iconColor: prop.iconColor || (parentInject && parentInject.iconColor),
      fontColor: prop.fontColor || (parentInject && parentInject.fontColor),
      fontSize: parentInject && parentInject.fontSize
    }),
    'breadcrumb-item'
  )

  /** 获取当前组件实例 */
  const instance = getCurrentInstance() as ComponentInternalInstance

  /** 计算当前需要展示的 svg */
  const svgIconComponent = computed((): FightingIcon => {
    if (prop.separator) return prop.separator

    if (parentInject && parentInject.separator) {
      return parentInject.separator
    }

    return FIconChevronRightVue
  })

  /** 样式列表 */
  const styleList = styles(['fontColor', 'iconColor', 'fontSize'])

  /** 点击触发 */
  const handelClick = (): void => {
    /** 获取到路由实例 */
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
