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

    const selectedRightValue: string = ((percent.value - min) * 100 / (max - min)) + '%'

    const cursorType = disabled ? 'not-allowed' : isDraging.value ? 'grabbing' : 'grab'

    const styles = {
      '--f-slider-selected-right-value': selectedRightValue,
      '--f-slider-cursor-type': cursorType
    } as CSSProperties

    return styles
  })
  
  // 动画百分比
  const percent = ref(prop.modelValue)
  // 是否开启滑动缓冲动画
  const isOpenAnimation = ref<'width .3s' | ''>('width .3s')
  // 是否正在拖动
  const isDraging = ref(false)

  const drag = (e): void => {
    const fSliderLeft = FSlider.value.offsetLeft
    const fSliderWidth = FSlider.value.clientWidth

    const {min, max} = prop

    let distanceX = e.pageX - fSliderLeft
    if(distanceX < 0) distanceX = 0
    if(distanceX > fSliderWidth) distanceX = fSliderWidth

    isOpenAnimation.value = ''
    percent.value = min + (max - min) * (distanceX / fSliderWidth)
  }

  const cancelDrag = (e): void => {
    if(!isDraging.value || prop.disabled) return

    // 卸载 拖动监听
    document.removeEventListener('mousemove', drag, true)
    document.body.style.cursor = ''
    
    const fSliderLeft = FSlider.value.offsetLeft
    const fSliderWidth = FSlider.value.clientWidth

    const {min, max, step} = prop

    let distanceX = e.pageX - fSliderLeft
    if(distanceX < 0) distanceX = 0
    if(distanceX > fSliderWidth) distanceX = fSliderWidth

    const stepWidth = fSliderWidth / ((max - min) / step)

    const stepNum = distanceX / stepWidth

    const decimal = (stepNum % 1) > 0.5 ? 1 : 0
    
    const newModelValue = min + (parseInt(stepNum + '') + decimal) * step
    
    isOpenAnimation.value = 'width .3s'
    percent.value = newModelValue

    isDraging.value = false

    emit('update:modelValue', newModelValue)
  }

  // 取消拖动监听
  onMounted(() => document.addEventListener('mouseup', cancelDrag, true))
    // 卸载 取消拖动监听
    onBeforeUnmount(() => document.removeEventListener('mouseup', cancelDrag, true))

  const onRightIconMousedown = (e): void => {
    if(prop.disabled) return

    isDraging.value = true
    document.body.style.cursor = 'grabbing'
    drag(e)
    // 拖动监听
    document.addEventListener('mousemove', drag, true)
  }

  const emit = defineEmits(['update:modelValue'])

</script>

<template>
  <div ref="FSlider" :class="classList" :style="styleList" @mousedown="onRightIconMousedown">
    <div class="f-slider__selected" :style="`transition: ${isOpenAnimation}`">
      <div class="selected-left-icon"></div>
      <div 
        class="selected-right-icon"
        @mousedown="onRightIconMousedown"
      ></div>
    </div>
  </div>
</template>
