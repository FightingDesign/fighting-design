<script lang="ts" setup name="FSlider">
  import { Props } from './props'
  import { computed, onMounted, ref } from 'vue'
  import dragDirective from './drag'
  import type { CSSProperties } from 'vue'
  import type { ClassList } from '../../_interface'
  // import { FSvgIcon } from '../../svg-icon'

  const prop = defineProps(Props)

  // 自定义指令
  const vDrag = dragDirective

  /**
   * dom 元素
   */
  const FSlider = ref<HTMLDivElement>(null as unknown as HTMLDivElement)

  const sliderWidth = computed(() => {
    return parseInt(FSlider.value.offsetWidth + '')
  })

  // watch(() => prop.modelValue, (newValue) => {

  // })
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
    const { disabled } = prop
    return [
      'f-slider',
      {
        'f-slider__disabled': disabled
      }
    ] as const
  })

  /**
   * style样式列表
   */
  const styleList = computed((): CSSProperties => {
    const { bgColor } = prop
    const styles = {
      '--f-slider-bg-color': bgColor
    } as CSSProperties
    return styles
  })

  function setPosition(position: 'left' | 'right', dot: number) {
    const { min, max, step } = prop
    if (position === 'left') {
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

  function onRightDrag(e, npos, { end }) {
    if (prop.disabled) return
    const { x, y } = npos
    const percentDot = (x * 100) / sliderWidth.value
    setPosition('right', percentDot)
  }

  // #endregion

  const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div ref="FSlider" class="f-slider" :class="classList" :style="styleList">
    <div class="f-slider__selected" :style="`width: ${rightTx}px`"></div>
    <div
      v-drag="onRightDrag"
      class="f-slider__right__icon f-slider__icon"
      :style="`transform:translateX(${rightTx}px)`"
    >
      <f-tooltip :content="modelValue" position="top" state="always">
        <div style="height: 25px"></div>
      </f-tooltip>
    </div>
  </div>
</template>
