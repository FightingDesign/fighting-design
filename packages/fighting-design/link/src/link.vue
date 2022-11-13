<script lang="ts" setup name="FLink">
  import { Props } from './props'
  import { FSvgIcon } from '../../svg-icon'
  import { computed } from 'vue'
  import { sizeChange } from '../../_utils'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type {
    HandleMouseEventInterface,
    ClassListInterface
  } from '../../_interface'
  import type { LinkPropsType } from './props'

  const prop: LinkPropsType = defineProps(Props)

  // 点击
  const handleClick: HandleMouseEventInterface = (evt: MouseEvent): void => {
    if (prop.prohibit || prop.noLink) {
      evt.preventDefault()
      return
    }
    prop.click && prop.click(evt)
  }

  /**
   * 类名列表
   */
  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      const { type, state, prohibit, noCopy } = prop

      return [
        'f-link',
        {
          [`f-link__${state}`]: state,
          [`f-link__${type}`]: type,
          'f-link__prohibit': prohibit,
          'f-link__no-copy': noCopy
        }
      ] as const
    }
  )

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { size, color } = prop

    return {
      color,
      fontSize: sizeChange(size)
    } as const
  })
</script>

<template>
  <a
    role="link"
    :class="classList"
    :style="styleList"
    :href="href"
    :target="target"
    @click="handleClick"
  >
    <f-svg-icon
      v-if="$slots.beforeIcon || beforeIcon"
      :icon="beforeIcon"
      :size="size || 16"
    >
      <slot name="beforeIcon" />
    </f-svg-icon>

    <slot />

    <f-svg-icon
      v-if="$slots.afterIcon || afterIcon"
      :icon="afterIcon"
      :size="size"
    >
      <slot name="afterIcon" />
    </f-svg-icon>
  </a>
</template>
