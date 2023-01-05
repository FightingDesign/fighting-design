<script lang="ts" setup name="FSwitch">
  import { Props } from './props'
  import { computed } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { useList, useRun } from '../../_hooks'
  import type { ClassList } from '../../_interface'

  const prop = defineProps(Props)
  const emit = defineEmits({
    'update:modelValue': (target: boolean): string => String(target)
  })

  const { styles } = useList(prop, 'switch')

  /** 样式列表 */
  const styleList = styles(['closeColor', 'activeColor'])

  /** 点击切换 */
  const handleClick = (): void => {
    if (prop.disabled) return
    emit('update:modelValue', !prop.modelValue)
    useRun(prop.onChange, !prop.modelValue)
  }

  /** 类名列表 */
  const classList = computed((): ClassList => {
    const { size, modelValue, square } = prop

    return [
      'f-switch__input',
      {
        [`f-switch__${size}`]: size,
        'f-switch__square': square,
        'f-switch__active': modelValue
      }
    ] as const
  })
</script>

<template>
  <div role="switch" :class="['f-switch', { 'f-switch__disabled': disabled }]" :style="styleList">
    <!-- 左侧文字描述 -->
    <span v-if="closeText" :class="['f-switch__right-text', { 'f-switch__text-active': !modelValue }]">
      {{ closeText }}
    </span>

    <!-- 主要内容 -->
    <div :class="classList" @click="handleClick">
      <span :class="['f-switch__roll', { 'f-switch__roll-active': modelValue }]">
        <f-svg-icon v-if="icon" :icon="icon" :size="iconSize" />
      </span>
    </div>

    <!-- 右侧文字描述 -->
    <span v-if="activeText" :class="['f-switch__left-text', { 'f-switch__text-active': modelValue }]">
      {{ activeText }}
    </span>
  </div>
</template>
