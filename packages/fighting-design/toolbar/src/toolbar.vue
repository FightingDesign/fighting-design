<script lang="ts" setup name="FToolbar">
  import { Props, Emits } from './toolbar'
  import { computed } from 'vue'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type {
    ClassListInterface as a,
    HandleEventInterface as b
  } from '../../_interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const classList: ComputedRef<a> = computed((): a => {
    const { size, round, fixed } = prop

    return [
      'f-toolbar',
      {
        [`f-toolbar__${size}`]: size,
        'f-toolbar__round': round,
        'f-toolbar__fixed': fixed
      }
    ] as const
  })

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { textColor, background, width, height } = prop

    return {
      color: textColor,
      background,
      width,
      height
    } as const
  })

  const handleClick: b = (evt: Event): void => {
    // 针对 Safari 点击事件 event.path 为 undefined 不存在做兼容
    // https://blog.csdn.net/weixin_43388844/article/details/120002440
    const path: HTMLElement[] =
      (evt as unknown as { path: HTMLElement[] }).path ||
      (evt.composedPath && evt.composedPath()) ||
      []
    const node: HTMLElement | undefined = path.find(
      (item: HTMLElement): boolean => {
        return item.className === 'f-toolbar-item'
      }
    )
    const key: string | undefined = node ? node.dataset.key : ''
    emit('click', { evt, key })
  }
</script>

<template>
  <div :class="classList" :style="styleList" @click="handleClick">
    <slot />
  </div>
</template>
