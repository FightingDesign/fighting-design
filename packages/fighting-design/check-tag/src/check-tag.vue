<script lang="ts" setup>
  import { Props } from './props'
  import { useGlobal, useList } from '../../_hooks'
  import { ref } from 'vue'

  defineOptions({ name: 'FCheckTag' })

  const prop = defineProps(Props)

  const { getProp } = useGlobal(prop)

  const { classes } = useList(getProp(['size', 'type']), 'check-tag')

  /** 类名列表 */
  const classList = classes(['size', 'type'], 'f-check-tag')
  /** 样式列表 */
  /* const styleList = styles(['color', 'background'])
  console.log(16, styleList)*/
  const change = () => {
    console.log('ss')
  }
</script>

<template>
  <div
    :class="[...classList, prop.checked ? null : 'f-check-tag__simple']"
    :on-click="change"
  >
    <slot />
  </div>
</template>
