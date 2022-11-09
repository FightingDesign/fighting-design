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
   * 鼠标移入
   */
  const handleMouseover: OrdinaryFunctionInterface = (): void => {
    if (prop.disabled) return
    showContent.value = true
  }

  /**
   * 鼠标移出
   */
  const handleMouseleave: OrdinaryFunctionInterface = (): void => {
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
    @mouseover="handleMouseover"
    @mouseleave="handleMouseleave"
  >
    <!-- 触发器 -->
    <div class="f-dropdown__trigger">
      <slot />
    </div>

    <!-- 展示的内容 -->
    <transition name="f-dropdown">
      <ul v-show="showContent" class="f-dropdown__content">
        <slot name="content" />
      </ul>
    </transition>
  </div>
</template>
