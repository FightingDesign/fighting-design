<script lang="ts" setup name="FSlider">
  import { Props } from './props'
  import { computed, onMounted, ref } from 'vue'
  import { isNumber } from '../../_utils'
  import { FTooltip } from '../../tooltip'
  import dragDirective from './drag'
  import type { CSSProperties } from 'vue'
  import type { ClassList } from '../../_interface'

  const prop = defineProps(Props)
  const emit = defineEmits({
    'update:modelValue': (val: number): boolean => isNumber(val)
  })

  /**
   * 自定义指令
   */
  const vDrag = dragDirective
  /**
   * dom 元素
   */
  const FSlider = ref<HTMLDivElement>(null as unknown as HTMLDivElement)

  const sliderWidth = computed(() => {
    return parseInt(FSlider.value.offsetWidth + '')
  })

  onMounted(() => {
    const { min, max, modelValue } = prop
    if (
      typeof modelValue !== 'number' ||
      isNaN(modelValue) ||
      modelValue < min
    ) {
      emit('update:modelValue', min)
      return
    }

    if (modelValue > max) {
      emit('update:modelValue', max)
      return
    }

    setPosition('right', ((modelValue - min) * 100) / (max - min))
  })

  /**
   * 类名列表
   */
  const classList = computed((): ClassList => {
    return [
      'f-slider',
      {
        'f-slider__disabled': prop.disabled
      }
    ] as const
  })

  /**
   * style样式列表
   */
  const styleList = computed((): CSSProperties => {
    return {
      '--f-slider-bg-color': prop.bgColor
    } as CSSProperties
  })

  const setPosition = (position: 'left' | 'right', dot: number): void => {
    const { min, max, step } = prop
    if (position === 'left') {
      console.log('position')
    } else {
      if (dot < 0) {
        dot = 0
      } else if (dot > 100) {
        dot = 100
      }
      const lengthPerStep = 100 / ((max - min) / step)
      const steps = Math.round(dot / lengthPerStep)
      let value = steps * lengthPerStep * (max - min) * 0.01 + min

      value = parseFloat(value.toFixed(0))

      emit('update:modelValue', value)
      rightTx.value = (sliderWidth.value * (value - min)) / (max - min)
    }
  }

  // #region 右dot
  const rightTx = ref(0)

  const onRightDrag = (e, opt): void => {
    if (prop.disabled) return
    const { x } = opt
    const percentDot = (x * 100) / sliderWidth.value
    setPosition('right', percentDot)
  }
</script>

<template>
  <div ref="FSlider" class="f-slider" :class="classList" :style="styleList">
    <div class="f-slider__selected" :style="`width: ${rightTx}px`" />
    <div
      v-drag="onRightDrag"
      class="f-slider__right__icon f-slider__icon"
      :style="`transform:translateX(${rightTx}px)`"
    >
      <f-tooltip :content="modelValue" position="top" state="always">
        <div style="height: 25px" />
      </f-tooltip>
    </div>
  </div>
</template>
