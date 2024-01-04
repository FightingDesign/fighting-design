<script lang="ts" setup>
  import { Props, CHECKBOX_GROUP_PROPS_KEY } from './props'
  import { provide, reactive, toRefs } from 'vue'
  import { useRun, useList } from '../../_hooks'
  import type { CheckboxGroupProvide } from './interface'
  import type { CheckboxLabel } from '../../checkbox'

  defineOptions({ name: 'FCheckboxGroup' })

  const prop = defineProps(Props)
  const modelValue = defineModel<string[] | CheckboxLabel>({
    default: [],
    type: [Boolean, Array, String, Number]
  })

  const { run } = useRun()
  const { classes, styles } = useList(prop, 'checkbox-group')

  /**
   * 绑定值发生改变时候触
   *
   * @param { string[] } val 最新值
   */
  const setChange = (val: string[] | CheckboxLabel): void => {
    modelValue.value = val
    run(prop.onChange, val)
  }

  // 获取需要注入的依赖项
  provide<CheckboxGroupProvide>(
    CHECKBOX_GROUP_PROPS_KEY,
    reactive({
      ...toRefs(prop),
      setChange
    })
  )

  /** 样式列表 */
  const style = styles(['columnGap', 'rowGap'])

  /** 类名列表 */
  const classList = classes(['background', 'vertical', 'size'], 'f-checkbox-group')
</script>

<template>
  <div role="group" aria-label="checkbox-group" :class="classList" :style>
    <slot />
  </div>
</template>
