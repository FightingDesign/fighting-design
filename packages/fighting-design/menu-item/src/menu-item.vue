<script lang="ts" setup>
  import { Props } from './props'
  import { MENU_PROVIDE_KEY } from '../../menu/src/props'
  import { FSvgIcon } from '../../svg-icon'
  import { warning } from '../../_utils'
  import { useList, useRun } from '../../_hooks'
  import { getCurrentInstance, computed, inject } from 'vue'
  import type { ComponentInternalInstance } from 'vue'
  import type { MenuProvide } from '../../menu'

  defineOptions({ name: 'FMenuItem' })

  const prop = defineProps(Props)

  const { run } = useRun()
  const { styles } = useList(prop, 'menu-item')

  /** 注入父组件的模式依赖项 */
  const parentInject: MenuProvide | null = inject(MENU_PROVIDE_KEY, null)

  /**
   * 获取当前组件实例
   *
   * @see docs#590 https://github.com/vuejs/docs/pull/590
   * @see core https://github.com/vuejs/core/blob/d52907f/packages/runtime-core/src/component.ts#L561
   * @see stackOverflow https://stackoverflow.com/questions/72209080/vue-3-is-getcurrentinstance-deprecated
   * @see getCurrentInstance https://blog.tianyuhao.cn/docs/vue/vue3-router.html#%E6%B2%A1%E6%9C%89%E5%AE%89%E8%A3%85%E8%B7%AF%E7%94%B1
   */
  const instance = getCurrentInstance() as ComponentInternalInstance

  /** 点击触发 */
  const handelClick = (evt: MouseEvent): void => {
    if (prop.disabled) return

    if (parentInject) {
      /**
       * 执行 menu-item 回调
       *
       * 传入事件对象和当前 name两个参数
       */
      run(parentInject.onMenuItemClick, prop.name, evt)

      /**
       * 设置当前选中的 name，传入当前组件的 name
       */
      run(parentInject.setActiveName, prop.name)
    }

    /** 获取到路由实例 */
    const router = instance.appContext.config.globalProperties.$router

    if (router && prop.to) {
      try {
        router.push(prop.to)
      } catch (err: any) {
        warning('f-menu-item', err as string)
      }
    }
  }

  /**
   * 判断当前是否呗选中
   *
   * 如果父组件的 name 和子组件的 name 想等代表呗选中
   */
  const isActive = computed((): boolean => {
    if (!parentInject || !parentInject.defaultActive) return false
    return prop.name === parentInject.defaultActive.value
  })

  /** 样式列表 */
  const style = styles(['fontSize', 'color'])
</script>

<template>
  <div
    role="menuitem"
    :class="[
      'f-menu-item',
      { 'f-menu-item__active': isActive, 'f-menu-item__disabled': disabled }
    ]"
    :style
    @click="handelClick"
  >
    <f-svg-icon v-if="icon" :icon="icon" />

    <span class="f-menu-item__text">
      <slot />
    </span>
  </div>
</template>
