<template>
  <!-- 图标 -->
  <i class="iconfont me-icon" :class="name" :style="`color:${color};font-size:${size};`" @click="onClick"></i>
</template>

<script lang="ts" setup>
const emit = defineEmits(['click'])

const props = defineProps({
  name: String, // class 名称
  color: String, // 图标颜色
  size: String // 图标大小
})

const onClick = (e: MouseEvent) => {
  emit('click', e)
}
</script>
