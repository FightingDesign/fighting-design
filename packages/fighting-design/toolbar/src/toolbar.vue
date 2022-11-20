<script lang="ts" setup name="FToolbar">
  import { Props } from './props'
  import { computed } from 'vue'
  import { runCallback } from '../../_utils'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type {
    ClassListInterface,
    HandleMouseEventInterface
  } from '../../_interface'
  import type { ToolbarPropsType, ToolbarClickEmitInterface } from './interface'

  const prop: ToolbarPropsType = defineProps(Props)

  /**
   * 类名列表
   */
  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      const { size, round, fixed } = prop

      return [
        'f-toolbar',
        {
          [`f-toolbar__${size}`]: size,
          'f-toolbar__round': round,
          'f-toolbar__fixed': fixed
        }
      ] as const
    }
  )

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { textColor, background, width, height } = prop

    return {
      color: textColor,
      background,
      width,
      height
    } as const
  })

  /**
   * 点击触发
   *
   * @param evt 事件对象
   */
  const handleClick: HandleMouseEventInterface = (evt: MouseEvent): void => {
    // 获取内部的元素节点列表
    const path: HTMLElement[] = evt.composedPath() as HTMLElement[]

    // 过滤出自己的亲孩子组件
    const node: HTMLElement | undefined = path.find(
      (item: HTMLElement): boolean => item.className === 'f-toolbar-item'
    )

    const key: string | undefined = node ? node.dataset.key : ''

    runCallback(prop.click, { evt, key } as ToolbarClickEmitInterface)
  }
</script>

<template>
  <div :class="classList" :style="styleList" @click="handleClick">
    <slot />
  </div>
</template>
