<script lang="ts" setup name="FTag">
  import { Props } from './props'
  import { ref } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { FCloseBtn } from '../../close-btn'
  import { runCallback } from '../../_utils'
  import { useList } from '../../_hooks'
  import type { ComputedRef, Ref } from 'vue'
  import type { TagPropsType } from './interface'
  import type { ClassListInterface } from '../../_interface'
  import type { HandleMouseEventInterface } from '../../_interface'

  const prop: TagPropsType = defineProps(Props)

  const { classes } = useList(prop, 'tag')

  /**
   * 是否展示
   */
  const isShow: Ref<boolean> = ref<boolean>(true)

  /**
   * 类名列表
   */
  const classList: ComputedRef<ClassListInterface> = classes(
    ['simple', 'type', 'size', 'block', 'round', 'line'],
    'f-tag'
  )

  /**
   * 点击关闭按钮
   *
   * @param evt 事件对象
   */
  const handleClose: HandleMouseEventInterface = (evt: MouseEvent): void => {
    isShow.value = false
    runCallback(prop.onClose, evt)
  }
</script>

<template>
  <transition name="f-tag">
    <div v-if="isShow" :class="classList" :style="{ background, color }">
      <f-svg-icon v-if="beforeIcon">
        <component :is="beforeIcon" />
      </f-svg-icon>

      <slot />

      <f-svg-icon v-if="afterIcon">
        <component :is="afterIcon" />
      </f-svg-icon>

      <f-close-btn v-if="close" no-hover :size="14" @click.stop="handleClose" />
    </div>
  </transition>
</template>
