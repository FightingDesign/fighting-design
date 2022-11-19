<script lang="ts" setup name="FInput">
  import { Props } from './props'
  import { FSvgIcon } from '../../svg-icon'
  import { FButton } from '../../button'
  import { FSwap } from '../../swap'
  import { ref } from 'vue'
  import {
    FIconCrossVue,
    FIconEyeOffOutlineVue,
    FIconEyeOutlineVue
  } from '../../_svg'
  import { isString } from '../../_utils'
  import { useUpdateInput, useFilterProps } from '../../_hooks'
  import type { Ref } from 'vue'
  import type { InputType } from './interface'
  import type { InputPropsType } from './props'
  import type {
    HandleEventInterface,
    OrdinaryFunctionInterface
  } from '../../_interface'
  import type { UseUpdateInputPropsInterface } from '../../_hooks/use-update-input/interface'

  const prop: InputPropsType = defineProps(Props)
  const emit = defineEmits({
    'update:modelValue': (val: string): boolean => isString(val)
  })

  // type 类型
  const inputType: Ref<InputType> = ref<InputType>(prop.type)
  // 是否展示密码
  const showPass: Ref<boolean> = ref<boolean>(false)
  /**
   * 使用 useUpdateInput hook 实现同步数据
   *
   * useFilterProps 过滤出需要的参数
   */
  const { onInput, onClear } = useUpdateInput(
    useFilterProps<InputPropsType, UseUpdateInputPropsInterface>(prop, [
      'onChange',
      'disabled'
    ]),
    emit
  )

  /**
   * 文本输入
   *
   * @param evt 事件对象
   */
  const handleInput: HandleEventInterface = (evt: Event): void => {
    onInput(evt)
  }

  /**
   * 点击搜索
   *
   * @param evt 事件对象
   */
  const handleSearch: HandleEventInterface = (evt: Event): void => {
    if (prop.onSearch) {
      prop.onSearch({ evt, value: prop.modelValue })
    }
  }

  /**
   * 按下回车
   *
   * @param evt 事件对象
   */
  const handleEnter: HandleEventInterface = (evt: Event): void => {
    const { search, enterSearch, onEnter } = prop

    if (search && enterSearch) {
      handleSearch(evt)
    }

    if (onEnter) {
      onEnter(evt)
    }
  }

  /**
   * 查看密码
   */
  const handleShowPassword: OrdinaryFunctionInterface = (): void => {
    if (showPass.value) {
      inputType.value = 'text'
      showPass.value = true
      return
    }
    inputType.value = 'password'
    showPass.value = false
  }
</script>

<template>
  <div :class="['f-input', { [`f-input__${size}`]: size }]">
    <div :class="['f-input__wrapper', { 'f-input__disabled': disabled }]">
      <f-svg-icon v-if="icon" class="f-input__icon" :icon="icon" :size="13" />

      <input
        class="f-input__input"
        :type="inputType"
        :max="max"
        :min="min"
        :maxlength="maxLength"
        :value="modelValue"
        :disabled="disabled"
        :readonly="readonly"
        :autofocus="autofocus"
        :name="name"
        :placeholder="placeholder"
        @input="handleInput"
        @keyup.enter="handleEnter"
        @blur="onBlur"
        @focus="onFocus"
      />

      <!-- 清楚 icon -->
      <f-svg-icon
        v-if="clear"
        class="f-input__clear-btn"
        :icon="FIconCrossVue"
        :size="14"
        @click="onClear"
      />

      <!-- 左侧 icon -->
      <f-svg-icon v-if="afterIcon" :icon="afterIcon" :size="14" />

      <!-- 查看密码 -->
      <f-swap
        v-if="showPassword"
        v-model="showPass"
        class="f-input__show-password"
        type="swap"
        :icon-on="FIconEyeOutlineVue"
        :icon-off="FIconEyeOffOutlineVue"
        :size="14"
        :on-change="handleShowPassword"
      />
    </div>

    <!-- 搜索框 -->
    <div v-if="search" class="f-input__search" @click="handleSearch">
      <slot name="searchBtn">
        <f-button type="primary" :size="size">搜索</f-button>
      </slot>
    </div>
  </div>
</template>
