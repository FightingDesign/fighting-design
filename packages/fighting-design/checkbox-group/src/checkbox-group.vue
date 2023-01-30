<script lang="ts" setup name="FCheckboxGroup">
  import { Props, CHECKBOX_GROUP_PROPS_KEY } from './props'
  import { provide, reactive, toRefs, computed } from 'vue'
  import { sizeChange, isArray } from '../../_utils'
  import { useRun } from '../../_hooks'
  import { EMIT_UPDATE } from '../../_tokens'
  import type { CSSProperties } from 'vue'
  import type { ClassList } from '../../_interface'

  const prop = defineProps(Props)
  const emit = defineEmits({
    [EMIT_UPDATE]: (val: string[]): boolean => isArray(val)
  })

  /**
   * 绑定值发生改变时候触
   *
   * @param { string[] } val 最新值
   */
  const setChange = (val: string[]): void => {
    emit(EMIT_UPDATE, val)
    useRun(prop.onChange, val)
  }

  /** 获取需要注入的依赖项 */
  provide(
    CHECKBOX_GROUP_PROPS_KEY,
    reactive({
      ...toRefs(prop),
      setChange
    })
  )

  /** 样式列表 */
  const styleList = computed((): CSSProperties => {
    const { columnGap, rowGap } = prop

    return {
      columnGap: sizeChange(columnGap),
      rowGap: sizeChange(rowGap)
    } as const
  })

  /** 类名列表 */
  const classList = computed((): ClassList => {
    const { border, vertical, size } = prop

    return [
      'f-checkbox-group',
      {
        'f-checkbox-group__border': border,
        'f-checkbox-group__vertical': vertical,
        [`f-checkbox-group__${size}`]: size && border
      }
    ] as const
  })
</script>

<template>
  <div role="group" aria-label="checkbox-group" :class="classList" :style="styleList">
    <slot />
  </div>
</template>
