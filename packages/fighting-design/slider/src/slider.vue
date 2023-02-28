<script lang="ts" setup name="FSlider">
  import { Props } from './props'
  import { onMounted, ref, onUnmounted } from 'vue'
  import { isNumber } from '../../_utils'
  import { useList, useSlider } from '../../_hooks'
  import { EMIT_UPDATE } from '../../_tokens'

  const prop = defineProps(Props)
  const emit = defineEmits({
    [EMIT_UPDATE]: (val: number): boolean => isNumber(val)
  })

  const { styles, classes } = useList(prop, 'slider')

  /** dom 元素 */
  const sliderEl = ref<HTMLDivElement>()

  /** 滑块小球 dom 元素 */
  const sliderCircle = ref<HTMLDivElement>()

  /** 偏移距离 */
  const offset = ref<number>(0)

  const offsetLeft = ref<number>(0)

  /**
   * 获取当前节点距离左侧的偏移量
   *
   * @see HTMLElement.offsetParent https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetParent
   * @see HTMLElement.offsetLeft https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetLeft
   * @param { Object } el 元素节点
   * @returns { number } 偏移距离
   */
  const getElementLeft = (el: HTMLDivElement): number => {
    /** 当前元素左边距 */
    let left: number = el.offsetLeft
    /** 当前元素的父级元素 */
    let parent: Element | null = el.offsetParent

    while (parent !== null) {
      /** 累加左边距 */
      left += (parent as HTMLElement).offsetLeft
      /** 依次获取父元素 */
      parent = (parent as HTMLElement).offsetParent
    }

    offsetLeft.value = left
    return left
  }

  const windowResize = (): void => {
    offsetLeft.value = getElementLeft(sliderEl.value as HTMLDivElement)
  }

  onMounted((): void => {
    offsetLeft.value = getElementLeft(sliderEl.value as HTMLDivElement)
    window.addEventListener('load', windowResize)
    window.addEventListener('resize', windowResize)
  })

  /** 组件实例被卸载之后调用 */
  onUnmounted((): void => {
    window.removeEventListener('resize', windowResize)
  })

  /** 类名列表 */
  const classList = classes(['disabled'], 'f-slider')

  /** 样式列表 */
  const styleList = styles(['background', 'activeColor', 'width'])

  /**
   * 设置偏移量
   *
   * @param { number } dot 最新值
   */
  const setPosition = (dot: number): void => {
    if (dot < 0) {
      dot = 0
    } else if (dot > 100) {
      dot = 100
    }

    /**
     * 当前长度 / 步长 = 当前走了多少步
     *
     * 并四舍五入获得整数
     *
     * @see Math.round() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/round
     */
    const steps: number = Math.round(dot / prop.step)

    /** 单步的步长 * 当前步数 = 当前走的百分比 */
    const value: number = steps * prop.step

    offset.value = value

    emit(EMIT_UPDATE, value)
  }

  onMounted((): void => {
    /** 如果元素节点存在 */
    if (sliderCircle.value) {
      /** 开始监听 dom 按下时的事件 */
      const startListen = useSlider(
        sliderCircle.value,
        (num: number): void => {
          if (prop.disabled) return

          /** 获取到当前拖动的占比 */
          const percentage: number = (num * 100) / (sliderEl.value as HTMLDivElement).clientWidth

          /** 重新设置样式位置 */
          setPosition(percentage)
        },
        offsetLeft
      )

      startListen()
      setPosition(((prop.modelValue - prop.min) * 100) / (prop.max - prop.min))
    }
  })
</script>

<template>
  <div ref="sliderEl" role="slider" :class="classList" :style="styleList">
    <div class="f-slider__road">
      <!-- 进度条 -->
      <div class="f-slider__selected" :style="`width: ${offset}%`" />

      <!-- 拖动按钮 -->
      <div ref="sliderCircle" class="f-slider__icon" :style="`left: ${offset}%`" />
    </div>
  </div>
</template>
