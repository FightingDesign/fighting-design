<script lang="ts" setup>
  import { Props } from './props'
  import { FSvgIcon } from '../../svg-icon'
  import { FButton } from '../../button'
  import { FSwap } from '../../swap'
  import { ref, toRefs, computed, watchEffect } from 'vue'
  import { FIconCross, FIconEyeOffOutline, FIconEyeOutline } from '../../_svg'
  import { useInput, useRun, useList, useGlobal } from '../../_hooks'
  import type { InputType } from './interface'
  import type { UseGlobalProp } from '../../_hooks'

  defineOptions({ name: 'FInput' })

  const prop = defineProps(Props)
  const modelValue = defineModel<string | number>({
    default: '',
    type: [String, Number]
  })

  const { run } = useRun()
  const { getLang, getProp } = useGlobal(prop as unknown as UseGlobalProp)
  const { styles, classes } = useList(getProp(['size']), 'input')
  const { handleInput, handleClear, handleChange } = useInput(prop, modelValue)

  /** 是否展示密码 */
  const showPass = ref<boolean>(false)
  /** type 类型 */
  const inputType = ref<InputType>(prop.type)

  watchEffect(() => {
    inputType.value = prop.type
  })

  /** 主要的描述文字内容 */
  const searchText = computed((): string => getLang('input').value.search)

  /**
   * 点击搜索
   *
   * @see KeyboardEvent https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent
   * @param { Object } evt 事件对象
   */
  const handleSearch = (evt: MouseEvent | KeyboardEvent): void => {
    run(prop.onSearch, modelValue.value, evt)
  }

  /**
   * 按下回车
   *
   * @param { Object } evt 事件对象
   */
  const handleEnter = (evt: KeyboardEvent): void => {
    const { search, enterSearch, onEnter } = toRefs(prop)

    if (search.value && enterSearch.value) {
      handleSearch(evt)
    }

    run(onEnter.value, modelValue.value, evt)
  }

  /** 查看密码 */
  const handleShowPassword = (): void => {
    if (showPass.value) {
      inputType.value = 'text'
      showPass.value = true
      return
    }
    inputType.value = 'password'
    showPass.value = false
  }

  /** 样式列表 */
  const style = styles(['placeholderColor', 'textColor', 'width', 'height', 'fontSize'])

  /** 类名列表 */
  const classList = classes(['size', 'disabled', 'search'], 'f-input')
</script>

<template>
  <div role="input" :class="classList" :style>
    <!-- 容器盒子 -->
    <div class="f-input__wrapper">
      <!-- 前缀插槽 -->
      <slot name="before" />

      <!-- 前缀 icon -->
      <f-svg-icon v-if="icon" class="f-input__icon" :icon="icon" :size="13" />

      <!-- 输入框 -->
      <input
        v-model="modelValue"
        class="f-input__input"
        :type="inputType"
        :max
        :min
        :disabled
        :readonly
        :autofocus
        :name
        :autocomplete
        :placeholder
        :maxlength="maxLength"
        @input="handleInput"
        @change="handleChange"
        @keyup.enter="handleEnter"
        @blur="onBlur"
        @focus="onFocus"
      />

      <!-- 清除 icon -->
      <f-svg-icon
        v-if="clear"
        class="f-input__clear-btn"
        :icon="FIconCross"
        :size="14"
        :on-click="handleClear"
      />

      <!-- 左侧 icon -->
      <f-svg-icon v-if="afterIcon" :icon="afterIcon" :size="14" />

      <!-- 查看密码 -->
      <f-swap
        v-if="showPassword"
        v-model="showPass"
        class="f-input__show-password"
        type="swap"
        :icon-on="FIconEyeOutline"
        :icon-off="FIconEyeOffOutline"
        :size="14"
        :on-change="handleShowPassword"
      />

      <!-- 后缀插槽 -->
      <slot name="after" />
    </div>

    <!-- 搜索框 -->
    <div v-if="search" class="f-input__search" @click="handleSearch">
      <slot name="searchBtn">
        <f-button type="primary" :size>{{ searchText }}</f-button>
      </slot>
    </div>
  </div>
</template>
