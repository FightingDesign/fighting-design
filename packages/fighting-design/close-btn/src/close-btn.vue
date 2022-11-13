<script lang="ts" setup name="FCloseBtn">
  import { Props } from './props'
  import { FSvgIcon } from '../../svg-icon'
  import { computed } from 'vue'
  import { FIconCrossVue } from '../../_svg'
  import type { ComputedRef } from 'vue'
  import type {
    HandleMouseEventInterface,
    ClassListInterface
  } from '../../_interface'
  import type { CloseBtnPropsType } from './props'

  const prop: CloseBtnPropsType = defineProps(Props)

  /**
   * 点击触发
   */
  const handleClick: HandleMouseEventInterface = (evt: MouseEvent): void => {
    if (prop.disabled) return
    prop.click && prop.click(evt)
  }

  /**
   * 类名列表
   */
  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      return [
        {
          'f-close-btn': !prop.disabled,
          'f-close-btn__round': prop.round,
          'f-close-btn__disabled': prop.disabled,
          'f-close-btn__no-hover': prop.noHover
        } as const
      ] as const
    }
  )
</script>

<template>
  <div role="button" :class="classList" @click="handleClick">
    <f-svg-icon :size="size" :color="color">
      <component :is="icon" v-if="icon" />
      <slot v-else>
        <f-icon-cross-vue />
      </slot>
    </f-svg-icon>
  </div>
</template>
