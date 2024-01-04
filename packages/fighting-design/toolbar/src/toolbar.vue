<script lang="ts" setup>
  import { Props } from './props'
  import { useSlots } from 'vue'
  import { useList, useRun } from '../../_hooks'
  import { TOOLBAR_INDEX, TOOLBAR_ITEM_CLASS_NAME } from '../../_tokens'

  defineOptions({ name: 'FToolbar' })

  const prop = defineProps(Props)
  const slot = useSlots()

  const { run } = useRun()
  const { classes, styles } = useList(prop, 'toolbar')

  /**
   * 点击触发
   *
   * @param { Object } evt 事件对象
   */
  const handleClick = (evt: MouseEvent): void => {
    if (!slot.default) return

    /** 获取到元素节点 */
    const target: HTMLElement = evt.target as HTMLElement

    /**
     * 判断当前点击元素的类名是否是子元素的类名
     *
     * 类名抽离，拒绝硬编码
     */
    if (target.className === TOOLBAR_ITEM_CLASS_NAME) {
      /**
       * 当前元素的唯一值
       *
       * 使用 target.dataset.index 属性也可以获取到，但是 dataset 兼容部分浏览器不兼容
       *
       * @see HTMLElement.dataset https://caniuse.com/?search=HTMLElement.dataset
       * @see HTMLElement.dataset https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/dataset
       *
       * 所以改为使用 getAttribute
       *
       * @see Element.getAttribute() https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getAttribute
       */
      const index: string | null = target.getAttribute(TOOLBAR_INDEX)

      run(prop.onClick, index, evt)
    }
  }

  /** 类名列表 */
  const classList = classes(['size', 'round', 'fixed'], 'f-toolbar')

  /** 样式列表 */
  const style = styles(['textColor', 'background', 'width', 'height'])
</script>

<template>
  <div role="toolbar" :class="classList" :style @click="handleClick">
    <slot />
  </div>
</template>
