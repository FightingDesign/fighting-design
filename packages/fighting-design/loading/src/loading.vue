<script setup lang="ts">
  import { Props } from './props'
  import { FSvgIcon } from '../../svg-icon'
  import { FIconLoadingA } from '../../_svg'
  import { useList } from '../../_hooks'

  defineOptions({ name: 'FLoading' })

  const prop = defineProps(Props)

  const { styles, classes } = useList(prop, 'loading')

  /** 样式列表 */
  const style = styles(['background', 'color'])

  /** 类名列表 */
  const classList = classes(['fullscreen'], 'f-loading')
</script>

<template>
  <div v-if="visible" :class="classList" :style>
    <f-svg-icon :size="20" class="f-loading__animation" :icon>
      <slot name="icon">
        <f-icon-loading-a />
      </slot>
    </f-svg-icon>

    <span v-if="text" class="f-loading__title">
      {{ text }}
    </span>
  </div>
</template>
