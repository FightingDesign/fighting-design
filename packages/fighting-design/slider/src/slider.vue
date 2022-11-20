<script lang="ts" setup name="FSlider">
  import { Props } from './props'
  import { computed,onMounted, ref, nextTick } from 'vue'
  import dragDirective from './drag'
  import { FSvgIcon } from '../../svg-icon'
  import type { SliderPropsType } from './interface'
  import type { ComputedRef, CSSProperties, Ref } from 'vue';
  import type { ClassListInterface } from '../../_interface';

  const prop: SliderPropsType = defineProps(Props)

  // dom 元素
  const FSlider: Ref<HTMLDivElement> = ref<HTMLDivElement>(
    null as unknown as HTMLDivElement
  )
  const width = ref(0)

  // 步长宽度
  const stepWidth = computed(() => {
    const {min, max, step} = prop
    return width.value / ((max - min) / step)
  })

  // 自定义指令
  const vDrag = dragDirective
  /**
   * 类名列表
   */
  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      return [
        'f-slider'
      ] as const
    }
  )
  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { bgColor } = prop

    const styles = {
      '--f-slider-bg-color': bgColor
    } as CSSProperties

    return styles
  })

  // 
  const leftTx = ref(0)
  const rightTx = ref(0)

  onMounted(() => {
    const {min, max, modelValue} = prop
    updateSiderWidth()
    leftTx.value = width.value * modelValue[0] / (max - min)
    rightTx.value = width.value * modelValue[1] / (max -min)
  })

  const updateSiderWidth = (): void=>{
      const rect = FSlider?.value?.getBoundingClientRect()
      if(!rect)return
      if(width.value != rect.width)
          width.value = rect.width
  }

  // 正在拽动左边的按钮
  const onLeftDrag = (e: EventTarget, {x}: {x: number, y: number}): void => {
    if(x < 0) x = 0
    if(x > rightTx.value - stepWidth.value ) x = rightTx.value - stepWidth.value
    
    leftTx.value  = x
    notify()
  }

  // 正在拽动右边的按钮
  const onRightDrag = (e: EventTarget, {x}: {x: number, y: number}): void => {
    if(x < leftTx.value + stepWidth.value) x = leftTx.value + stepWidth.value
    if(x > width.value ) x = width.value

    rightTx.value  = x
    notify()
  }

  const notify = (): void => {
    const {min, max} = prop

    const leftValue = Math.round((max - min) * leftTx.value / width.value)
    const rightValue = Math.round((max - min) * rightTx.value / width.value)
    
    emit('update:modelValue', [leftValue, rightValue])
  }

  const selectedStyle = computed(() => {
    const {color} = prop
    return `
      transform: translateX(${leftTx.value}px);
      width: ${rightTx.value - leftTx.value}px;
      background-color: ${color};
    `
  })

  // nextTick(() => updateSiderWidth())

  const emit = defineEmits(['update:modelValue'])

</script>

<template>
  <div ref="FSlider" :class="classList" :style="styleList">
    <div 
      v-drag="onLeftDrag"
      class="f-slider__left__icon f-slider__icon"
      :style="`transform: translateX(${leftTx}px)`"
    >
      <f-svg-icon v-if="icon" size="20px" :icon="icon" />
    </div>
    <div 
      class="f-slider__selected"
      :style="selectedStyle"
    ></div>
    <div 
      v-drag="onRightDrag"
      class="f-slider__right__icon f-slider__icon"
      :style="`transform: translateX(${rightTx}px)`"
    >
      <f-svg-icon v-if="icon" size="20px" :icon="icon" />
    </div>
  </div>
</template>
