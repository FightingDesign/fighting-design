<script setup lang="ts" name="FLoading">
  import { Props } from './props'
  import { FSvgIcon } from '../../svg-icon'
  import { FIconLoadingAVue } from '../../_svg'
  import { useList } from '../../_hooks'

  const prop = defineProps(Props)

  const { styles, classes } = useList(prop, 'loading')

  /** 样式列表 */
  const styleList = styles(['background', 'color'])

  const classList = classes(['fullscreen'], 'f-loading')
</script>

<template>
  <div v-if="visible" :class="classList" :style="styleList">
    <f-svg-icon :size="20" class="f-loading__animation" :icon="icon">
      <slot name="icon">
        <f-icon-loading-a-vue />
      </slot>
    </f-svg-icon>

    <span v-if="text" class="f-loading__title">
      {{ text }}
    </span>
  </div>
</template>
