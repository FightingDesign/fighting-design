<script lang="ts" setup>
  import { Props } from './props'
  import { onMounted, ref } from 'vue'
  import { useList, useSlider, useOffset } from '../../_hooks'

  defineOptions({ name: 'FSlider' })

  const prop = defineProps(Props)
  const modelValue = defineModel<number>({ default: 0, type: Number })

  const { styles, classes } = useList(prop, 'slider')

  /** 输入条元素 */
  const sliderEl = ref<HTMLDivElement>()

  /** 滑块小球 dom 元素 */
  const circleEl = ref<HTMLDivElement>()

  const { offset, offsetLeft, setPosition } = useOffset(sliderEl, prop, modelValue)

  onMounted((): void => {
    // 如果元素节点存在
    if (circleEl.value) {
      // 开始监听 dom 按下时的事件
      useSlider(circleEl.value, offsetLeft, (num: number): void => {
        if (prop.disabled) return

        /** 获取到当前拖动的占比 */
        const percentage: number =
          (num * 100) / (sliderEl.value as HTMLDivElement).clientWidth

        // 重新设置样式位置
        setPosition(percentage)
      })

      setPosition(((prop.modelValue - prop.min) * 100) / (prop.max - prop.min))
    }
  })

  /** 类名列表 */
  const classList = classes(['disabled'], 'f-slider')

  /** 样式列表 */
  const style = styles(['background', 'activeColor', 'width'])
</script>

<template>
  <div ref="sliderEl" role="slider" :class="classList" :style>
    <div class="f-slider__road">
      <!-- 进度条 -->
      <div class="f-slider__selected" :style="`width: ${offset}%`" />

      <!-- 拖动按钮 -->
      <div ref="circleEl" class="f-slider__icon" :style="`left: ${offset}%`" />
    </div>
  </div>
</template>
