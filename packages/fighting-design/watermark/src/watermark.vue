<script lang="ts" setup>
  import { Props } from './props'
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useWatermark } from '../../_hooks'

  defineOptions({ name: 'FWatermark' })

  const prop = defineProps(Props)

  const bg = useWatermark(prop)
  /** 水印外层容器节点 */
  const watermarkRef = ref<HTMLDivElement | undefined>()
  /** 水印元素 */
  let div: HTMLDivElement | undefined

  /** 渲染水印 */
  const renderWatermark = (): void => {
    if (!watermarkRef.value) {
      return
    }

    if (div) {
      div.remove()
    }

    const { base64, size } = bg.value

    div = document.createElement('div')

    div.style.position = 'absolute'
    div.style.backgroundImage = `url(${base64})`
    div.style.backgroundSize = `${size}px ${size}px`
    div.style.zIndex = prop.zIndex.toString()
    div.style.inset = '0'

    watermarkRef.value.appendChild(div)
  }

  /**
   * 元素挂载之后生成水印元素
   */
  onMounted(renderWatermark)

  /**
   * @see MutationObserver https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver
   */
  const ob = new MutationObserver((entries: MutationRecord[]): void => {
    for (const entrie of entries) {
      if (entrie.removedNodes && entrie.removedNodes.length) {
        /** 被删除的元素结合 */
        const removedNodesArray: Node[] = Array.from(entrie.removedNodes)

        // 删除了水印元素
        for (const dom of removedNodesArray) {
          if (dom === div) {
            renderWatermark()
            return
          }
        }
      }

      // 修改了水印元素
      if (entrie.target === div) {
        renderWatermark()
        return
      }
    }
  })

  /**
   * 开始监视水印的变化
   */
  onMounted(() => {
    if (watermarkRef.value) {
      /**
       * @see MutationObserver.observe() https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver/observe
       */
      ob.observe(watermarkRef.value, {
        /**
         * 监控子节点
         */
        childList: true,
        /**
         * 监控子树
         */
        subtree: true,
        /**
         * 监控属性
         */
        attributes: true
      })
    }
  })

  /**
   * 如何卸载之后停止监听
   *
   * @see onUnmounted() https://cn.vuejs.org/api/composition-api-lifecycle.html#onunmounted
   */
  onUnmounted(ob.disconnect)
</script>

<template>
  <div ref="watermarkRef" class="f-watermark">
    <slot />
  </div>
</template>
