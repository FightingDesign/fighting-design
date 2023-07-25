<script lang="ts" setup>
  import { Props, TABS_PROPS_KEY } from './props'
  import { provide, getCurrentInstance, computed } from 'vue'
  import type { TabsItemProps, TabsItemInstance } from '../../tabs-item'
  import type { ComponentInternalInstance } from 'vue'

  defineOptions({ name: 'FTabs' })

  defineProps(Props)
  const modelValue = defineModel<number | string>({
    default: null,
    type: [Number, String]
  })

  /** 将信息传递给子组件 */
  provide(TABS_PROPS_KEY, { activeName: modelValue })

  /**
   * 切换页
   *
   * @param { string } name 页的名字
   */
  const changeNavs = (name: TabsItemProps['name']): void => {
    modelValue.value = name
  }

  /** 获取当前组件实例 */
  const instance: ComponentInternalInstance | null = getCurrentInstance()

  /** 获取菜单列表 */
  const navs = computed((): TabsItemProps[] => {
    if (!instance || !instance.slots.default) {
      return []
    }

    return instance.slots.default().map((e: TabsItemInstance): TabsItemProps => {
      return e.props
    })
  })
</script>

<template>
  <div role="tab" class="f-tabs">
    <!-- 标签列表 -->
    <div class="f-tabs__navs">
      <div
        v-for="(item, index) in navs"
        :key="index"
        class="f-tabs__nav-item"
        @click="changeNavs(item.name)"
      >
        {{ item.label }}
      </div>
    </div>

    <!-- 主要展示的内容 -->
    <div class="f-tabs__content">
      <slot />
    </div>
  </div>
</template>
