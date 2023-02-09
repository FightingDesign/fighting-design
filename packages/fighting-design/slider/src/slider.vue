<script lang="ts" setup name="FSlider">
  import { Props } from './props'
  import { onMounted, ref, computed, toRefs } from 'vue'
  import { isNumber } from '../../_utils'
  import { useList, useSlider } from '../../_hooks'
  import { FTooltip } from '../../tooltip'
  import { EMIT_UPDATE } from '../../_tokens'
  import type { Ref } from 'vue'

  const prop = defineProps(Props)
  const emit = defineEmits({
    [EMIT_UPDATE]: (val: number): boolean => isNumber(val)
  })

  const { styles, classes } = useList(prop, 'slider')

  /** dom 元素 */
  const sliderEl: Ref<HTMLDivElement | null> = ref(null)
  /** 滑块小球元素 */
  const sliderCircle: Ref<HTMLDivElement | null> = ref(null)

  /** 便宜距离 */
  const rightTx = ref<number>(0)

  /** 滑动条宽度 */
  const sliderWidth = computed((): number => {
    return parseInt((sliderEl.value as HTMLDivElement).offsetWidth + '')
  })

  /** 类名列表 */
  const classList = classes(['disabled'], 'f-slider')

  /** 样式列表 */
  const styleList = styles(['bgColor'])

  /**
   * 设置偏移量
   *
   * @param { number } dot 最新值
   */
  const setPosition = (dot: number): void => {
    const { min, max, step } = toRefs(prop)

    if (dot < 0) {
      dot = 0
    } else if (dot > 100) {
      dot = 100
    }

    const lengthPerStep: number = 100 / ((max.value - min.value) / step.value)
    const steps: number = Math.round(dot / lengthPerStep)
    const value: number = parseFloat((steps * lengthPerStep * (max.value - min.value) * 0.01 + min.value).toFixed(0))

    rightTx.value = (sliderWidth.value * (value - min.value)) / (max.value - min.value)

    emit(EMIT_UPDATE, value)
  }

  onMounted((): void => {
    /** 如果元素节点存在 */
    if (sliderCircle.value) {
      const startListen = useSlider(sliderCircle.value, (num: number) => {
        const percentDot = (num * 100) / sliderWidth.value

        setPosition(percentDot)
      })

      startListen()
      setPosition(((prop.modelValue - prop.min) * 100) / (prop.max - prop.min))
    }
  })
</script>

<template>
  <div ref="sliderEl" role="slider" :class="classList" :style="styleList">
    <div class="f-slider__selected" :style="`width: ${rightTx}px`" />
    <div ref="sliderCircle" class="f-slider__right__icon f-slider__icon" :style="`transform: translateX(${rightTx}px)`">
      <f-tooltip :content="modelValue.toString()" position="top" state="always">
        <div style="height: 25px" />
      </f-tooltip>
    </div>
  </div>
</template>
