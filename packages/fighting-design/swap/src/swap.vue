<script lang="ts" setup>
  import { Props } from './props'
  import { FSvgIcon } from '../../svg-icon'
  import { useRun, useList } from '../../_hooks'
  import { EMIT_UPDATE } from '../../_tokens'

  defineOptions({ name: 'FSwap' })

  const prop = defineProps(Props)
  const emit = defineEmits([EMIT_UPDATE])

  const { run } = useRun()
  const { classes } = useList(prop, 'swap')

  /**
   * 点击切换时执行
   *
   * @param { Object } evt 事件对象
   */
  const handelClick = (evt: MouseEvent): void => {
    emit(EMIT_UPDATE, !prop.modelValue)
    run(prop.onChange, evt, !prop.modelValue)
  }

  /** 类名列表 */
  const classList = classes(['type', 'modelValue'], 'f-swap')
</script>

<template>
  <div role="switch" :class="classList" @click="handelClick">
    <f-svg-icon :icon="modelValue ? iconOn : iconOff" :size="size" />
  </div>
</template>
