<script lang="ts" setup>
import { ref, computed, watch, onUnmounted } from 'vue'
import { Props } from './props'

defineOptions({ name: 'FColorPicker' })

const props = defineProps(Props)
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'active-change', value: string): void
  (e: 'change', value: string): void
}>()

// 状态管理
const isVisible = ref(false)
const hue = ref(0)
const saturation = ref(100)
const value = ref(100)
const alpha = ref(100)

// DOM引用
const hueSlider = ref<HTMLElement | null>(null)
const saturationPanel = ref<HTMLElement | null>(null)
const alphaSlider = ref<HTMLElement | null>(null)

// 计算属性
const currentColor = computed(() => {
  const hsva = {
    h: hue.value,
    s: saturation.value,
    v: value.value,
    a: alpha.value / 100
  }
  return hsvaToRgba(hsva)
})

const colorFormats = computed(() => {
  const rgba = currentColor.value
  return {
    hex: rgbaToHex(rgba),
    rgb: `rgb(${rgba.r}, ${rgba.g}, ${rgba.b})`,
    rgba: `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`
  }
})

const saturationPanelBackground = computed(() => {
  return `hsl(${hue.value}, 100%, 50%)`
})

// 事件处理
const handleHueChange = (event: MouseEvent): void => {
  if (!hueSlider.value) return
  const { left, width } = hueSlider.value.getBoundingClientRect()
  const position = Math.max(0, Math.min(width, event.clientX - left))
  const percentage = position / width
  // 使用 toFixed(3) 限制小数位数，避免过度精确导致的抖动
  hue.value = Math.round(Number((percentage * 360).toFixed(3)))
  updateColor()
}

const handleSaturationValueChange = (event: MouseEvent): void => {
  event.stopPropagation()
  if (!saturationPanel.value) return
  const { left, top, width, height } = saturationPanel.value.getBoundingClientRect()
  
  const newSaturation = Math.round(((event.clientX - left) / width) * 100)
  const newValue = Math.round((1 - (event.clientY - top) / height) * 100)
  
  saturation.value = Math.max(0, Math.min(100, newSaturation))
  value.value = Math.max(0, Math.min(100, newValue))
  updateColor()
}

const handleAlphaChange = (event: MouseEvent): void => {
  if (!alphaSlider.value) return
  const { left, width } = alphaSlider.value.getBoundingClientRect()
  const newAlpha = Math.round(((event.clientX - left) / width) * 100)
  alpha.value = Math.max(0, Math.min(100, newAlpha))
  updateColor()
}

const handleMouseMove = (event: MouseEvent): void => {
  event.preventDefault()
  event.stopPropagation()
  
  // 确保只处理当前激活的控制器
  if (activeControl.value === 'hue') {
    handleHueChange(event)
  } else if (activeControl.value === 'saturation') {
    handleSaturationValueChange(event)
  } else if (activeControl.value === 'alpha') {
    handleAlphaChange(event)
  }
}

const handleMouseUp = (): void => {
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
  activeControl.value = null
}

const activeControl = ref<'hue' | 'saturation' | 'alpha' | null>(null)

const initDrag = (type: 'hue' | 'saturation' | 'alpha', event: MouseEvent): void => {
  event.preventDefault()
  event.stopPropagation()
  activeControl.value = type
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
  
  // Handle the initial click
  if (type === 'hue') {
    handleHueChange(event)
  } else if (type === 'saturation') {
    handleSaturationValueChange(event)
  } else {
    handleAlphaChange(event)
  }
}

const updateColor = (): void => {
  // 根据 showAlpha 选择颜色格式
  const color = props.showAlpha 
    ? colorFormats.value.rgba 
    : colorFormats.value.hex
  emit('update:modelValue', color)
  emit('active-change', color)
  inputColor.value = color
}

// 颜色转换工具函数
const hsvaToRgba = (hsva: { h: number; s: number; v: number; a: number }): { r: number; g: number; b: number; a: number } => {
  const { h, s, v, a } = hsva
  const f = (n: number): number => {
    const k = (n + h / 60) % 6
    return v / 100 * (1 - (s / 100) * Math.max(0, Math.min(k, 4 - k, 1)))
  }
  
  return {
    r: Math.round(f(5) * 255),
    g: Math.round(f(3) * 255),
    b: Math.round(f(1) * 255),
    a
  }
}

const rgbaToHex = (rgba: { r: number; g: number; b: number; a: number }): string => {
  const toHex = (n: number): string => n.toString(16).padStart(2, '0')
  return `#${toHex(rgba.r)}${toHex(rgba.g)}${toHex(rgba.b)}`
}

const parseColor = (color: string): { r: number; g: number; b: number; a: number } | null => {
  // 处理 hex 颜色
  if (color.startsWith('#')) {
    const hex = color.substring(1)
    if (hex.length === 3) {
      // 处理 #RGB 格式
      return {
        r: parseInt(hex[0] + hex[0], 16),
        g: parseInt(hex[1] + hex[1], 16),
        b: parseInt(hex[2] + hex[2], 16),
        a: 1
      }
    }
    if (hex.length === 6) {
      return {
        r: parseInt(hex.substring(0, 2), 16),
        g: parseInt(hex.substring(2, 4), 16),
        b: parseInt(hex.substring(4, 6), 16),
        a: 1
      }
    }
    return null
  }

  // 处理 rgb/rgba 颜色
  const rgbaMatch = color.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+))?\s*\)$/)
  if (rgbaMatch) {
    const [, r, g, b, a = '1'] = rgbaMatch
    return {
      r: parseInt(r),
      g: parseInt(g),
      b: parseInt(b),
      a: parseFloat(a)
    }
  }

  return null
}

const rgbaToHsva = (rgba: { r: number; g: number; b: number; a: number }): { h: number; s: number; v: number; a: number } => {
  const r = rgba.r / 255
  const g = rgba.g / 255
  const b = rgba.b / 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const delta = max - min
  
  let h = 0
  if (delta > 0) {
    if (max === r) {
      h = 60 * (((g - b) / delta) % 6)
    } else if (max === g) {
      h = 60 * ((b - r) / delta + 2)
    } else {
      h = 60 * ((r - g) / delta + 4)
    }
  }
  
  h = h < 0 ? h + 360 : h
  const s = max === 0 ? 0 : (delta / max) * 100
  const v = max * 100
  
  return {
    h: Math.round(h),
    s: Math.round(s),
    v: Math.round(v),
    a: rgba.a
  }
}

const inputColor = ref(props.modelValue || '')

// 添加一个变量存储打开弹窗时的初始值
const initialColor = ref('')
const isValidColorFn = (color: string): boolean => {
    // Regex for #RRGGBB
    const hexRegex = /^#([0-9A-Fa-f]{6})$/;
 
    // Regex for rgba(r, g, b, a)
    const rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0|1|0?\.\d+)\s*\)$/;
 
    if (hexRegex.test(color)) {
        return true;
    }
 
    if (rgbaRegex.test(color)) {
        const match = color.match(rgbaRegex);
        if (!match) return false;
        const [, r, g, b, a] = match;
        // Check if RGB values are within 0-255
        if (parseInt(r) > 255 || parseInt(g) > 255 || parseInt(b) > 255) {
            return false;
        }
        // Check if alpha is between 0 and 1
        if (parseFloat(a) < 0 || parseFloat(a) > 1) {
            return false;
        }
        return true;
    }
 
    return false;
}
const handleConfirm = (): void => {
  if (!isValidColorFn(inputColor.value)) {
    // 恢复为初始颜色
    inputColor.value = initialColor.value
    const parsed = parseColor(initialColor.value)
    if (parsed) {
      const hsva = rgbaToHsva(parsed)
      hue.value = hsva.h
      saturation.value = hsva.s
      value.value = hsva.v
      alpha.value = Math.round(hsva.a * 100)
      emit('change', initialColor.value)
      emit('update:modelValue', initialColor.value)
    }
    isVisible.value = false
    return
  }

  // 如果是有效的颜色值
  const parsed = parseColor(inputColor.value)
  if (parsed) {
    const hsva = rgbaToHsva(parsed)
    hue.value = hsva.h
    saturation.value = hsva.s
    value.value = hsva.v
    alpha.value = Math.round(parsed.a * 100)
    updateColor()
    isVisible.value = false
    emit('change', inputColor.value)
  }
}

const handleCancel = (): void => {
  // 点击取消时恢复到初始值
  inputColor.value = initialColor.value
  const parsed = parseColor(initialColor.value)
  if (parsed) {
    const hsva = rgbaToHsva(parsed)
    hue.value = hsva.h
    saturation.value = hsva.s
    value.value = hsva.v
    alpha.value = Math.round(hsva.a * 100)
    emit('update:modelValue', initialColor.value)
  }
  isVisible.value = false
}

// 修改触发显示的点击事件处理
const handleTriggerClick = (): void => {
  if (!props.disabled) {
    isVisible.value = !isVisible.value
    if (isVisible.value) {
      // 打开弹窗时保存当前值
      initialColor.value = props.modelValue
    }
  }
}

const handleInputChange = (): void => {
  const parsed = parseColor(inputColor.value)
  if (parsed) {
    const hsva = rgbaToHsva(parsed)
    hue.value = hsva.h
    saturation.value = hsva.s
    value.value = hsva.v
    alpha.value = Math.round(hsva.a * 100)
    updateColor()
  } else {
    // 恢复为打开弹窗时的初始值
    inputColor.value = initialColor.value
    const parsed = parseColor(initialColor.value)
    if (parsed) {
      const hsva = rgbaToHsva(parsed)
      hue.value = hsva.h
      saturation.value = hsva.s
      value.value = hsva.v
      alpha.value = Math.round(hsva.a * 100)
    }
  }
}

// 修改 watch，添加对当前拖动状态的判断
watch(
  () => props.modelValue,
  (newValue) => {
    // 如果正在拖动，不要更新颜色值
    if (activeControl.value) return

    if (newValue) {
      const parsed = parseColor(newValue)
      if (parsed) {
        const hsva = rgbaToHsva(parsed)
        hue.value = hsva.h
        saturation.value = hsva.s
        value.value = hsva.v
        alpha.value = Math.round(hsva.a * 100)
        inputColor.value = newValue
      }
    } else {
      // Reset values when modelValue is empty/null
      inputColor.value = ''
      hue.value = 0
      saturation.value = 100
      value.value = 100
      alpha.value = 100
    }
  },
  { immediate: true }
)

// 修改 handleClickOutside 函数
const handleClickOutside = (event: MouseEvent): void => {
  const target = event.target as HTMLElement
  const currentPicker = target.closest('.f-color-picker')
  const thisPicker = saturationPanel.value?.closest('.f-color-picker')
  
  // 如果点击的元素不在当前颜色选择器内，则关闭弹窗并恢复初始值
  if (thisPicker && currentPicker !== thisPicker) {
    handleCancel() // 使用取消逻辑来处理点击外部
  }
}

// Watch isVisible to add/remove event listener
watch(isVisible, (newValue) => {
  if (newValue) {
    document.addEventListener('click', handleClickOutside)
  } else {
    document.removeEventListener('click', handleClickOutside)
  }
})

// Clean up event listener when component is unmounted
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div 
    class="f-color-picker"
    :class="[
      { 'is-disabled': props.disabled },
      `f-color-picker--${props.size}`
    ]"
  >
    <div 
      class="f-color-picker__trigger"
      @click="handleTriggerClick"
    >
      <div 
        class="f-color-picker__preview"
        :style="{ backgroundColor: colorFormats.rgba }"
      />
    </div>

    <div 
      v-if="isVisible"
      class="f-color-picker__dropdown"
    >
      <!-- 饱和度/明度面板 -->
      <div 
        ref="saturationPanel"
        class="f-color-picker__saturation"
        :style="{ backgroundColor: saturationPanelBackground }"
        @mousedown="(e) => initDrag('saturation', e)"
      >
        <div 
          class="f-color-picker__saturation-pointer"
          :style="{
            left: `${saturation}%`,
            top: `${100 - value}%`
          }"
        />
      </div>

      <!-- 色相滑块 -->
      <div 
        ref="hueSlider"
        class="f-color-picker__hue"
        @mousedown="(e) => initDrag('hue', e)"
      >
        <div 
          class="f-color-picker__hue-slider"
          :style="{ left: `${(hue / 360) * 100}%` }"
        />
      </div>

      <!-- 只在 showAlpha 为 true 时显示透明度滑块 -->
      <div 
        v-if="props.showAlpha"
        ref="alphaSlider"
        class="f-color-picker__alpha"
        @mousedown="(e) => initDrag('alpha', e)"
      >
        <div 
          class="f-color-picker__alpha-slider"
          :style="{ left: `${alpha}%` }"
        />
      </div>

      <!-- 颜色值显示和输入区域 -->
      <div class="f-color-picker__footer">
        <div class="f-color-picker__controls">
          <f-input v-model="inputColor" type="text" placeholder="请输入颜色值" @change="handleInputChange" />
          <div class="f-color-picker__buttons">
            <f-button type="default" @click="handleCancel">取消</f-button>
            <f-button type="primary" @click="handleConfirm">确认</f-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
