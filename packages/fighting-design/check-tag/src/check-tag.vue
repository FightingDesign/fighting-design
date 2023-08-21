<script lang="ts" setup>
  import { Props } from './props'
  import { useGlobal, useList } from '../../_hooks'

  defineOptions({ name: 'FCheckTag' })

  const prop = defineProps(Props)

  const { getProp } = useGlobal(prop)

  const { classes } = useList(getProp(['size', 'type']), 'check-tag')

  /** 类名列表 */
  const classList = classes(['size', 'type'], 'f-check-tag')
  /** 样式列表 */
  //
  const handleClick = (): void => {
    prop.onChange(!prop.checked)
  }
</script>

<template>
  <div
    :class="[...classList, checked ? null : 'f-check-tag__simple']"
    @click="handleClick"
  >
    <slot />
  </div>
</template>
