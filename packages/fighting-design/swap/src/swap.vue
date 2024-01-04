<script lang="ts" setup>
  import { Props } from './props'
  import { FSvgIcon } from '../../svg-icon'
  import { useRun, useList } from '../../_hooks'

  defineOptions({ name: 'FSwap' })

  const prop = defineProps(Props)
  const modelValue = defineModel<boolean>({ default: false, type: Boolean })

  const { run } = useRun()
  const { classes } = useList(prop, 'swap')

  /**
   * 点击切换时执行
   *
   * @param { Object } evt 事件对象
   */
  const handelClick = (evt: MouseEvent): void => {
    modelValue.value = !modelValue.value
    run(prop.onChange, !prop.modelValue, evt)
  }

  /** 类名列表 */
  const classList = classes(['type', 'modelValue'], 'f-swap')
</script>

<template>
  <div role="switch" :class="classList" @click="handelClick">
    <f-svg-icon :icon="modelValue ? iconOn : iconOff" :size />
  </div>
</template>
