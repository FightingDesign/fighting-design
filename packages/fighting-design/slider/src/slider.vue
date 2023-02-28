<script lang="ts" setup name="FSlider">
  import { Props } from './props'
  import { onMounted, ref, computed } from 'vue'
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

  /** 便宜距离 */
  const offset = ref<number>(0)

  /**
   * 获取滑动条宽度和偏移量
   *
   * @see HTMLElement.offsetWidth https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetWidth
   * @see HTMLElement.offsetLeft https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetLeft
   */
  const sliderOffset = computed((): { offsetWidth: number; offsetLeft: number } => {
    /** 获取一个元素的布局宽度 */
    const offsetWidth: number = parseInt((sliderEl.value as HTMLDivElement).offsetWidth + '')
    /** 获取节点的左边界偏移的像素值 */
    const offsetLeft: number = parseInt((sliderEl.value as HTMLDivElement).offsetLeft + '')

    return { offsetWidth, offsetLeft } as const
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
          const percentage: number = (num * 100) / sliderOffset.value.offsetWidth

          /** 重新设置样式位置 */
          setPosition(percentage)
        },
        sliderOffset.value.offsetLeft
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
