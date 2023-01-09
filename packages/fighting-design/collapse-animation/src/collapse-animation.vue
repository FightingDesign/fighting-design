<script lang="ts" setup name="FCollapseAnimation">
  import { Props } from './props'
  import { ref, onMounted, computed, watch } from 'vue'
  import type { Ref } from 'vue'

  const prop = defineProps(Props)

  /** 初始是否展开 */
  const isOpened = computed((): boolean => !!prop.opened)

  /** om 元素 */
  const collapseEl: Ref<HTMLDivElement | null> = ref(null)

  /** 需要展开的尺寸 */
  const defaultSize = ref<number>(null as unknown as number)

  /**
   * 获取折叠部分的尺寸
   *
   * 先将元素尺寸设置为 auto，再去获取元素具体像素高度
   */
  const getDefaultSize = (): void => {
    /** 如果 dom 元素存在 */
    if (collapseEl.value) {
      collapseEl.value.style.height = 'auto'
      /**
       * 将默认尺寸设置为元素的像素高度
       *
       * @see offsetHeight https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetHeight
       */
      defaultSize.value = collapseEl.value.offsetHeight

      /**
       * 如果开始是关闭状态，则设为 0
       *
       * 否则需要设置为有单位的数值，防止初次点击丢失过度动画
       */
      collapseEl.value.style.height = isOpened.value ? defaultSize.value + 'px' : '0'
    }
  }

  /** 监视绑定值发生改变的时候触发展开或折叠 */
  watch(
    (): boolean => isOpened.value,
    (newVal: boolean): void => {
      if (prop.disabled) return

      if (collapseEl.value) {
        if (newVal) {
          collapseEl.value.style.height = defaultSize.value + 'px'
        } else {
          collapseEl.value.style.height = '0'
        }
      }
    }
  )

  /** 挂载完成获取模式尺寸 */
  onMounted((): void => {
    getDefaultSize()
  })
</script>

<template>
  <div ref="collapseEl" class="f-collapse-animation">
    <slot />
  </div>
</template>
