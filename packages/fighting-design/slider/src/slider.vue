<script lang="ts" setup name="FSlider">
  import { Props } from './props'
  import { computed, ref } from 'vue'
  import dragDirective from './drag'
  import { FSvgIcon } from '../../svg-icon'
  import type { SliderPropsType } from './interface'
  import type { ComputedRef, CSSProperties, Ref } from 'vue'
  import type { ClassListInterface } from '../../_interface'

  const prop: SliderPropsType = defineProps(Props)

  // 是否范围取值
  const isRange = computed((): boolean => {
    const {modelValue} = prop
    return Array.isArray(modelValue)
  })

  // dom 元素
  const FSlider: Ref<HTMLDivElement> = ref<HTMLDivElement>(
    null as unknown as HTMLDivElement
  )
  const width = ref(0)

  // 步长宽度
  const stepWidth = computed(() => {
    const { min, max, step } = prop
    return width.value / ((max - min) / step)
  })

  // 自定义指令
  const vDrag = dragDirective
  /**
   * 类名列表
   */
  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      const {disabled} = prop
      return [
        'f-slider',
        {
          'f-slider__disabled': disabled
        }
      ] as const
    }
  )
  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { bgColor,disabled } = prop

    const styles = {
      '--f-slider-bg-color': bgColor,
      '--f-slideer-disabled': disabled ? 'not-allowed' : null
    } as CSSProperties

    return styles
  })

  const leftTx = computed({
    get () {
      const {min, max, modelValue} = prop
      updateSiderWidth()
     
      return  Array.isArray(modelValue) ? (width.value * modelValue[0] / (max - min)) : 0
    },
    set (newValue) {
      // modelValue[0]
      notify({newLeftTx: newValue})
    }
  })

  const rightTx = computed({
    get () {
      const {min, max, modelValue} = prop
      updateSiderWidth()
      return isRange.value ? (width.value * modelValue[1] / (max -min)) : (width.value * modelValue / (max -min))
    },
    set (newValue) {
      // modelValue[0]
      notify({newRightTx: newValue})
    }
  })

  const updateSiderWidth = (): void => {
    const rect = FSlider?.value?.getBoundingClientRect()
    if (!rect) return
    if (width.value != rect.width) width.value = rect.width
  }

  // 正在拽动左边的按钮
  const onLeftDrag = (e: EventTarget, {x}: {x: number, y: number}, {end}): void => {
    if(prop.disabled) return
    document.documentElement.style.cursor = 'grabbing'
    if(x < 0) x = 0
    if(x > rightTx.value - stepWidth.value ) x = rightTx.value - stepWidth.value
    if(end) {
      endNotify(x)
      document.documentElement.style.cursor = ''
      return
    }
    leftTx.value  = x
  }

  // 正在拽动右边的按钮
  const onRightDrag = (e: EventTarget, {x}: {x: number, y: number}, {end}): void => {
    if(prop.disabled) return
    document.documentElement.style.cursor = 'grabbing'
    if(isRange.value && x < leftTx.value + stepWidth.value) x = leftTx.value + stepWidth.value
    if(!isRange.value && x < 0) x = 0
    if(x > width.value ) x = width.value
    if(end) {
      endNotify(undefined,x)
      document.documentElement.style.cursor = ''
      return
    }
    rightTx.value  = x
  }

  const notify = (params: {newLeftTx?: number, newRightTx?: number}): void => {
    animationTxt.value = ''
    if(!isRange.value) {
      const right = params.newRightTx as number
      const {min, max} = prop
      const rightValue = (max - min) * right / width.value
      emit('update:modelValue', rightValue)
      return
    }
    const left = params.newLeftTx ?? leftTx.value
    const right = params.newRightTx ?? rightTx.value
    const {min, max} = prop
    const leftValue = (max - min) * left / width.value
    const rightValue = (max - min) * right / width.value
    emit('update:modelValue', [leftValue, rightValue])
  }

  const animationTxt = ref<'transition: all .3s' | ''>('')

  const endNotify = (newLeftTx?: number, newRightTx?: number): void => {
    animationTxt.value = 'transition: all .3s'
    // debugger
    const left = newLeftTx ?? leftTx.value
    const right = newRightTx ?? rightTx.value
    const {min, max, step} = prop
    if(!isRange.value) {
      let rightValue = (max - min) * right / width.value
      // 余数
      let value = rightValue % step
      rightValue = (value > (step / 2)) ? (rightValue - value + step) : (rightValue - value)
      rightValue = rightValue > max ? rightValue - step : rightValue
      emit('update:modelValue', rightValue)
    
      return
    }
    if(newLeftTx) {
      let leftValue = (max - min) * left / width.value
      // 余数
      let value = leftValue % step
      leftValue = (value > (step / 2)) ? (leftValue - value + step) : (leftValue - value)
      const rightValue = (max - min) * right / width.value
      leftValue = leftValue > rightValue ? leftValue - step : leftValue
      emit('update:modelValue', [leftValue, rightValue])
    } else {
      let rightValue = (max - min) * right / width.value
      // 余数
      let value = rightValue % step
      rightValue = (value > (step / 2)) ? (rightValue - value + step) : (rightValue - value)
      const leftValue = (max - min) * left / width.value
      rightValue = rightValue > max ? rightValue - step : rightValue
      rightValue = rightValue < leftValue ? (rightValue - value + step) : rightValue
      emit('update:modelValue', [leftValue, rightValue])
    }
  }

  const selectedStyle = computed(() => {
    const { color } = prop
    return `
      transform: translateX(${leftTx.value ?? 0}px);
      width: ${rightTx.value - leftTx.value ?? 0}px;
      background-color: ${color};
      ${animationTxt.value}
    `
  })

  // nextTick(() => updateSiderWidth())

  const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div ref="FSlider" :class="classList" :style="styleList">
    <div 
      v-if="isRange"
      v-drag="onLeftDrag"
      class="f-slider__left__icon f-slider__icon"
      :style="`transform: translateX(${leftTx}px);${animationTxt}`"
    >
      <f-svg-icon v-if="icon" size="20px" :icon="icon" />
    </div>
    <div class="f-slider__selected" :style="selectedStyle"></div>
    <div
      v-drag="onRightDrag"
      class="f-slider__right__icon f-slider__icon"
      :style="`transform: translateX(${rightTx}px);${animationTxt}`"
    >
      <f-svg-icon v-if="icon" size="20px" :icon="icon" />
    </div>
  </div>
</template>
