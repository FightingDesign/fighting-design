<script lang="ts" setup name="FMenuItem">
  import { Props } from './props'
  import { FSvgIcon } from '../../svg-icon'
  import { useList } from '../../_hooks'
  import { getCurrentInstance } from 'vue'
  import type {
    ComputedRef,
    CSSProperties,
    ComponentInternalInstance
  } from 'vue'
  import type { MenuItemPropsType } from './interface'

  const prop: MenuItemPropsType = defineProps(Props)

  const { styles } = useList('menu-item', prop)

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
    const router = instance.appContext.config.globalProperties.$router
    router.push('/home')
  }
</script>

<template>
  <li class="f-menu-item" :style="styleList" @click="handelClick">
    <f-svg-icon v-if="icon" :icon="icon" />

    <span class="f-menu-item__text">
      <slot />
    </span>
  </li>
</template>
