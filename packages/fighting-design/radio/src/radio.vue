<script lang="ts" setup>
  import { Props } from './props'
  import { useRun, useList } from '../../_hooks'
  import { computed, inject, reactive } from 'vue'
  import { RADIO_GROUP_PROPS_kEY } from '../../radio-group/src/props'
  import type { RadioGroundInject, RadioModelValue } from '../../radio-group'

  defineOptions({ name: 'FRadio' })

  const prop = defineProps(Props)
  const modelValue = defineModel<RadioModelValue>({
    default: null,
    type: [String, Number, Boolean]
  })

  const { run } = useRun()

  /** 当前绑定的值 */
  const keyword = computed({
    get: (): RadioModelValue => {
      return (parentInject && parentInject.modelValue) || prop.modelValue
    },
    set: (val: RadioModelValue): void => {
      /** 判断如果注入的依赖项存在，并且没有禁用，则将最新值传递给父组件 */
      if (parentInject && !isParentDisabled.value) {
        run(parentInject.changeEvent, val)
        return
      }
      if (isDisabled.value) return
      modelValue.value = val
      run(prop.onChange, val)
    }
  })

  /** 获取父组件注入的依赖项 */
  const parentInject: RadioGroundInject | null = inject(RADIO_GROUP_PROPS_kEY, null)

  /** 判断是否被选中 */
  const isChecked = computed((): boolean => keyword.value === prop.label)

  /** 父级是否带有禁用 */
  const isParentDisabled = computed(
    (): boolean => !!(parentInject && parentInject.disabled)
  )

  /** 判断是否被禁用 */
  const isDisabled = computed((): boolean => prop.disabled || isParentDisabled.value)

  const { classes } = useList(
    reactive({
      checked: isChecked,
      disabled: isDisabled
    }),
    'radio'
  )

  /** 类名列表 */
  const classList = classes(['checked', 'disabled'], 'f-radio')
</script>

<template>
  <label role="radio" aria-checked="false" tabindex="0" :class="classList">
    <input v-model="keyword" hidden type="radio" :value="label" :disabled :name />
    <!-- 小圆圈 -->
    <span v-if="!parentInject?.background" class="f-radio__circle" />

    <!-- 展示的文字内容 -->
    <span class="f-radio__text">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
