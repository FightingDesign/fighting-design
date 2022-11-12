<script lang="ts" setup name="FDropdown">
  import { Props } from './props'
  import { ref, computed } from 'vue'
  import { sizeChange } from '../../_utils'
  import type { Ref, ComputedRef, CSSProperties } from 'vue'
  import type { DropdownPropsType } from './interface'
  import type { OrdinaryFunctionInterface } from '../../_interface'

  const prop: DropdownPropsType = defineProps(Props)

  // 是否展示主内容
  const showContent: Ref<boolean> = ref<boolean>(false)

  /**
   * 计算当前的所触发的事件对象
   */
  const eventTrigger: ComputedRef<'click' | 'mouseover'> = computed(
    (): 'click' | 'mouseover' => {
      return prop.trigger === 'click' ? 'click' : 'mouseover'
    }
  )

  /**
   * 展示内容
   */
  const contentShow: OrdinaryFunctionInterface = (): void => {
    if (prop.disabled) return
    showContent.value = true
  }

  /**
   * 隐藏内容
   */
  const contentHidden: OrdinaryFunctionInterface = (): void => {
    showContent.value = false
  }

  /**
   * 样式列表
   */
  const classList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { spacing } = prop

    return {
      '--f-dropdown-spacing-size': sizeChange(spacing)
    } as CSSProperties
  })
</script>

<template>
  <div
    class="f-dropdown"
    :style="classList"
    @[eventTrigger]="contentShow"
    @mouseleave="contentHidden"
  >
    <!-- 触发器 -->
    <div class="f-dropdown__trigger">
      <slot />
    </div>

    <!-- 展示的内容 -->
    <transition name="f-dropdown">
      <div
        v-show="showContent"
        class="f-dropdown__content"
        @click.stop="contentHidden"
      >
        <slot name="content" />
      </div>
    </transition>
  </div>
</template>
