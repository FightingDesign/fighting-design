<script lang="ts" setup name="FSlider">
  import { Props } from './props'
  import { computed,onMounted, onBeforeUnmount, ref } from 'vue'
  import type { SliderPropsType } from './interface'
  import type { ComputedRef, CSSProperties, Ref } from 'vue';
  import type { ClassListInterface } from '../../_interface';

  const prop: SliderPropsType = defineProps(Props)

  // dom 元素
  const FSlider: Ref<HTMLDivElement> = ref<HTMLDivElement>(
    null as unknown as HTMLDivElement
  )

  /**
   * 类名列表
   */
  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      const {
        step,
        min,
        max,
        disabled,
        range,
        color,
        bgColor,
        vertical,
        icon
      } = prop

      // if(Array.isArray(modelValue)) {

      // } else {

      // }

      return [
        'f-slider',
        {
          'f-slider__vertical': vertical,
          'f-slider__horizontal': !vertical
        }
      ] as const
    }
  )

  // 样式列表
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { min, max, disabled} = prop

    const leftIconPercent = percent.value[0] * 100 + '%'
    const rightIconPercent = percent.value[1] * 100 + '%'

    const cursorType = disabled ? 'not-allowed' : isDraging.value ? 'grabbing' : 'grab'

    const styles = {
      '--f-slider-left-icon-percent': leftIconPercent,
      '--f-slider-right-icon-percent': rightIconPercent,
      '--f-slider-cursor-type': cursorType
    } as CSSProperties

    return styles
  })

  // 动画百分比
  const percent = ref([0, 0])
  onMounted(() => {
    const { min, max, modelValue} = prop
    const leftIconPercent = ((modelValue[0] - min) / (max - min))
    const rightIconPercent = ((modelValue[1] - min) / (max - min))

    percent.value = [leftIconPercent, rightIconPercent]
  })
  // 是否开启滑动缓冲动画
  const isOpenAnimation = ref<'width .3s' | ''>('width .3s')
  // 是否正在拖动
  const isDraging = ref(false)

  const drag = (e): void => {
    const fSliderLeft = FSlider.value.offsetLeft
    const fSliderWidth = FSlider.value.clientWidth

    let distanceX = e.pageX - fSliderLeft
    const rightIconLeft = fSliderWidth * percent.value[1]

    if(distanceX < 0) distanceX = 0
    if(distanceX > (rightIconLeft)) distanceX = rightIconLeft

    isOpenAnimation.value = ''
    percent.value[0] = (distanceX / fSliderWidth)

  }

  const cancelDrag = (e): void => {
    if(!isDraging.value || prop.disabled) return
    /**
     0. 左控件的offsetLeft，是相对它的定位父元素的。
     1. 相对原先滑块，移动的距离是多少？
     2. 一个步长的宽度是多少？
     3. 相对原先滑块，移动的步长是多少？
     4. 移动后的滑块占百分比多少？
     */
    document.removeEventListener('mousemove', drag, true)
    document.body.style.cursor = ''
    const fSliderLeft = FSlider.value.offsetLeft
    const fSliderWidth = FSlider.value.clientWidth
    const rightIconLeft = fSliderWidth * percent.value[1]
    let distanceX = e.pageX - fSliderLeft
    if(distanceX < 0) distanceX = 0
    if(distanceX > (rightIconLeft)) distanceX = rightIconLeft
    const {min, max, step} = prop
    const stepWidth = fSliderWidth * (step / (max - min))
    const rightIconStepNum = rightIconLeft / stepWidth
    let stepNum = distanceX / stepWidth
    let decimal = stepNum % 1
    stepNum = parseInt(stepNum + '') + (decimal > 0.5 ? 1 : 0)
    if(stepNum >= rightIconStepNum) stepNum -= 1
    const newPercent = stepNum / ((max - min))
    console.log(newPercent);
    
    percent.value[0] = newPercent
    // console.log(stepNum, '移动步长');
    
  }

  // 取消拖动监听
  onMounted(() => document.addEventListener('mouseup', cancelDrag, true))
    // 卸载 取消拖动监听
    onBeforeUnmount(() => document.removeEventListener('mouseup', cancelDrag, true))

  const onLeftIconMousedown = (): void => {
    if(prop.disabled) return

    isDraging.value = true
    document.body.style.cursor = 'grabbing'
    // 拖动监听
    document.addEventListener('mousemove', drag, true)
  }

  const emit = defineEmits(['update:modelValue'])

</script>

<template>
  <div ref="FSlider" :class="classList" :style="styleList">
    <div 
      class="f-slider__left__icon"
      @mousedown="onLeftIconMousedown"
    ></div>
    <div class="f-slider__selected"></div>
    <div 
      class="f-slider__right__icon"
    ></div>
  </div>
</template>
