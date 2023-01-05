<script lang="ts" setup name="FRadioGroup">
  import { Props, RADIO_GROUP_PROPS_kEY } from './props'
  import { provide, reactive, toRefs } from 'vue'
  import { isString, isBoolean, isNumber } from '../../_utils'
  import { useRun, useList } from '../../_hooks'
  import type { RadioModelValue, RadioGroundInject } from './interface'

  const prop = defineProps(Props)
  const emit = defineEmits({
    'update:modelValue': (val: RadioModelValue): boolean => isString(val) || isNumber(val) || isBoolean(val)
  })

  const { styles, classes } = useList(prop, 'radio-group')

  /**
   * 改变同步数据
   *
   * @param value 最新值
   */
  const changeEvent = (value: RadioModelValue): void => {
    emit('update:modelValue', value)
    useRun(prop.onChange, value)
  }

  /** 需要注入的依赖项 */
  const RadioGround = reactive({
    ...toRefs(prop),
    changeEvent
  } as unknown as RadioGroundInject)

  /** 注入依赖项 */
  provide<RadioGroundInject>(RADIO_GROUP_PROPS_kEY, RadioGround)

  /** 类名列表 */
  const classList = classes(['vertical', 'border', 'size'], 'f-radio-group')

  /** 样式列表 */
  const styleList = styles(['columnGap', 'rowGap'])
</script>

<template>
  <div role="radiogroup" :class="classList" :style="styleList">
    <slot />
  </div>
</template>
