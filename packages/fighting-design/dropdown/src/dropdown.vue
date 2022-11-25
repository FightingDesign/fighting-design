<script lang="ts" setup name="FDropdown">
  import { Props } from './props'
  import { ref, computed, onMounted } from 'vue'
  import { sizeChange } from '../../_utils'
  import type { Ref, ComputedRef, CSSProperties } from 'vue'
  import type { DropdownPropsType } from './interface'
  import type { OrdinaryFunctionInterface } from '../../_interface'

  const prop: DropdownPropsType = defineProps(Props)

  /**
   * 是否展示主内容
   */
  const showContent: Ref<boolean> = ref<boolean>(false)

  /**
   * 打开
   */
  const handelOpen: OrdinaryFunctionInterface = (): void => {
    if (prop.trigger === 'hover') {
      showContent.value = true
    }

    if (prop.trigger === 'click') {
      showContent.value = !showContent.value
    }
  }

  /**
   * 关闭
   */
  const handelClose: OrdinaryFunctionInterface = (): void => {
    showContent.value = false
  }

  /**
   * 打开事件
   */
  const openEvent: ComputedRef<'mouseover' | 'click'> = computed(
    (): 'mouseover' | 'click' => {
      return prop.trigger === 'hover' ? 'mouseover' : 'click'
    }
  )

  /**
   * 关闭事件
   */
  const closeEvent: ComputedRef<'mouseleave' | ''> = computed(
    (): 'mouseleave' | '' => {
      return prop.trigger === 'hover' ? 'mouseleave' : ''
    }
  )

  /**
   * 样式列表
   */
  const classList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { spacing } = prop

    return {
      '--f-dropdown-spacing-size': sizeChange(spacing)
    } as CSSProperties
  })

  onMounted((): void => {
    /**
     * 给 document 注册点击事件，如果点击的是其它地方则隐藏
     */
    document.addEventListener('click', (): void => {
      if (prop.trigger === 'click' && showContent.value) {
        handelClose()
      }
    })
  })
</script>

<template>
  <div
    class="f-dropdown"
    :style="classList"
    @[openEvent].stop="handelOpen"
    @[closeEvent].stop="handelClose"
  >
    <!-- 触发器 -->
    <div class="f-dropdown__trigger">
      <slot />
    </div>

    <!-- 展示的内容 -->
    <transition name="f-dropdown">
      <div v-show="showContent" class="f-dropdown__content">
        <slot name="content" />
      </div>
    </transition>
  </div>
</template>
