<script lang="ts" setup name="FSwitch">
  import { Props } from './props'
  import { computed } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { runCallback } from '../../_utils'
  import { useList } from '../../_hooks'
  import type {
    OrdinaryFunctionInterface,
    ClassListInterface
  } from '../../_interface'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { SwitchPropsType } from './props'

  const prop: SwitchPropsType = defineProps(Props)
  const emit = defineEmits({
    'update:modelValue': (target: boolean): string => String(target)
  })

  const { styles } = useList(prop, 'switch')

  const styleList: ComputedRef<CSSProperties> = styles([
    'closeColor',
    'activeColor'
  ])

  /**
   * 点击切换
   */
  const handleClick: OrdinaryFunctionInterface = (): void => {
    if (prop.disabled) return
    emit('update:modelValue', !prop.modelValue)
    runCallback(prop.onChange, !prop.modelValue)
  }

  /**
   * 类名列表
   */
  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      const { size, modelValue, square } = prop

      return [
        'f-switch__input',
        {
          [`f-switch__${size}`]: size,
          'f-switch__square': square,
          'f-switch__active': modelValue
        }
      ] as const
    }
  )
</script>

<template>
  <div
    role="switch"
    :class="['f-switch', { 'f-switch__disabled': disabled }]"
    :style="styleList"
  >
    <!-- 左侧文字描述 -->
    <span
      v-if="closeText"
      :class="[
        'f-switch__right-text',
        { 'f-switch__text-active': !modelValue }
      ]"
    >
      {{ closeText }}
    </span>

    <!-- 主要内容 -->
    <div :class="classList" @click="handleClick">
      <span
        :class="['f-switch__roll', { 'f-switch__roll-active': modelValue }]"
      >
        <f-svg-icon v-if="icon" :icon="icon" :size="iconSize" />
      </span>
    </div>

    <!-- 右侧文字描述 -->
    <span
      v-if="openText"
      :class="['f-switch__left-text', { 'f-switch__text-active': modelValue }]"
    >
      {{ openText }}
    </span>
  </div>
</template>
