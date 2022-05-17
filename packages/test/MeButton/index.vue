<template>
  <!-- 按钮 -->
  <button
    :type="nativeType"
    :class="[
      'me-btn',
      `me-btn-${type}`,
      {
        'me-btn-plain': plain,
        disabled: disabled
      }
    ]"
    :style="`width:${width}; color:${type === 'default' || plain ? color : '#fff'}; background:${!plain ? color : '#fff'}; border-color:${color};`"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
  (event: 'click', e: MouseEvent): void
}>()

const props = defineProps({
  // 原生 button 标签的 type 属性
  nativeType: {
    type: String,
    default: 'button' // button|reset|submit
  },
  // 宽度
  width: {
    type: String,
    default: ''
  },
  // 类型
  type: {
    type: String,
    validator(val: string): boolean {
      return ['default', 'primary', 'success', 'info', 'warning', 'danger'].includes(val)
    },
    default: 'default'
  },
  // 朴素按钮
  plain: {
    type: Boolean
  },
  // 禁用状态
  disabled: {
    type: Boolean
  },
  // 图标按钮
  icon: {
    type: String,
    default: ''
  },
  // 自定义颜色
  color: {
    type: String,
    default: ''
  }
})

const onClick = (e: MouseEvent) => {
  emit('click', e)
}
</script>
