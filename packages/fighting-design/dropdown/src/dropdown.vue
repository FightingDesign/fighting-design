<script lang="ts" setup name="FDropdown">
  import { Props } from './props'
  import { ref } from 'vue'
  import type { Ref } from 'vue'
  import type { DropdownPropsType } from './interface'

  const prop: DropdownPropsType = defineProps(Props)

  const showContent: Ref<boolean> = ref<boolean>(false)

  /**
   * 鼠标移入
   */
  const handleMouseover = (): void => {
    showContent.value = true
  }

  /**
   * 鼠标移出
   */
  const handleMouseleave = (): void => {
    showContent.value = false
  }
</script>

<template>
  <div
    class="f-dropdown"
    @mouseover="handleMouseover"
    @mouseleave="handleMouseleave"
  >
    <!-- 触发器 -->
    <div class="f-dropdown__trigger">
      <slot name="default" />
    </div>

    <!-- 展示的内容 -->
    <transition name="f-dropdown">
      <ul v-show="showContent" class="f-dropdown__content">
        <slot name="content" />
      </ul>
    </transition>
  </div>
</template>
