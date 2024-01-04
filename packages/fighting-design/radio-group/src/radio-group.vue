<script lang="ts" setup>
  import { Props, RADIO_GROUP_PROPS_kEY } from './props'
  import { provide, reactive, toRefs } from 'vue'
  import { useRun, useList } from '../../_hooks'
  import type { RadioModelValue, RadioGroundInject } from './interface'

  defineOptions({ name: 'FRadioGroup' })

  const prop = defineProps(Props)
  const modelValue = defineModel<RadioModelValue>({
    default: '',
    type: [String, Number, Boolean]
  })

  const { run } = useRun()
  const { styles, classes } = useList(prop, 'radio-group')

  /**
   * 改变同步数据
   *
   * @param { string | number | boolean } value 最新值
   */
  const changeEvent = (value: RadioModelValue): void => {
    modelValue.value = value
    run(prop.onChange, value)
  }

  /** 类名列表 */
  const classList = classes(['vertical', 'background', 'size'], 'f-radio-group')

  /** 样式列表 */
  const style = styles(['columnGap', 'rowGap'])

  // 注入依赖项
  provide<RadioGroundInject>(
    RADIO_GROUP_PROPS_kEY,
    reactive({
      ...toRefs(prop),
      changeEvent
    })
  )
</script>

<template>
  <div role="radiogroup" :class="classList" :style>
    <slot />
  </div>
</template>
