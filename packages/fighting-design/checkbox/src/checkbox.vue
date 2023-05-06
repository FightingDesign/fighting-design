<script lang="ts" setup name="FCheckbox">
  import { Props } from './props'
  import { computed, inject, reactive } from 'vue'
  import { useRun, useList } from '../../_hooks'
  import { CHECKBOX_GROUP_PROPS_KEY } from '../../checkbox-group/src/props'
  import { isArray, isBoolean } from '../../_utils'
  import { EMIT_UPDATE } from '../../_tokens'
  import type { CheckboxGroupProvide } from '../../checkbox-group'
  import type { CheckboxModelValue } from './interface'

  const prop = defineProps(Props)
  const emit = defineEmits({
    [EMIT_UPDATE]: (val: CheckboxModelValue): CheckboxModelValue =>
      typeof val !== 'object'
  })

  const { run } = useRun()

  /** 获取父组件注入的依赖项 */
  const parentInject: CheckboxGroupProvide | null = inject(CHECKBOX_GROUP_PROPS_KEY, null)

  /** 绑定值 */
  const model = computed({
    /** 获取值 */
    get: (): CheckboxModelValue | string[] => {
      return (parentInject && parentInject.modelValue) || prop.modelValue
    },
    /**
     * 设置值
     *
     * @param { boolean | string[] } val 最新的值
     */
    set: (val: CheckboxModelValue | string[]): void => {
      if (!parentInject) {
        emit(EMIT_UPDATE, val as CheckboxModelValue)
        run(prop.onChange, val)
        return
      }
      parentInject.setChange(val)
    }
  })

  /** 是否被选中 */
  const isActive = computed((): boolean => {
    /** 绑定值 */
    const value: CheckboxModelValue | string[] = model.value

    if (isArray(value)) {
      return value.includes(prop.label as never)
    } else if (isBoolean(value)) {
      return value
    }

    return value === prop.label
  })

  // /** 判断是否被选中 */
  // const isChecked = computed((): boolean => modelValue.value === prop.label)
  /** 父级是否带有禁用 */
  const isParentDisabled = computed(
    (): boolean => !!(parentInject && parentInject.disabled)
  )

  /** 判断是否被禁用 */
  const isDisabled = computed((): boolean => prop.disabled || isParentDisabled.value)

  console.log(isDisabled.value)

  const { classes } = useList(
    reactive({
      checked: isActive,
      disabled: isDisabled
    }),
    'checkbox'
  )

  // /** 类名列表 */
  /** 类名列表 */
  const classList = classes(['checked', 'disabled'], 'f-checkbox')
  // const classList = computed((): ClassList => {
  //   return [
  //     'f-checkbox',
  //     {
  //       'f-checkbox__active': isActive.value,
  //       'f-checkbox__indeterminate': prop.indeterminate,
  //       'f-checkbox__bordered': parentInject && parentInject.background,
  //       'f-checkbox__disabled': prop.disabled || (parentInject && parentInject.disabled)
  //     }
  //   ]
  // })
</script>

<template>
  <label
    role="checkbox"
    aria-checked="false"
    tabindex="0"
    aria-labelledby="chk1-label"
    :class="classList"
  >
    <input
      v-model="model"
      type="checkbox"
      class="f-checkbox__input"
      hidden
      :value="label"
      :disabled="disabled || (!!parentInject && parentInject.disabled)"
    />
    <!-- 选择框 -->
    <span v-if="!(parentInject && parentInject.background)" class="f-checkbox__box" />

    <!-- 文字内容 -->
    <span class="f-checkbox__text">
      <slot />
      <template v-if="!$slots.default && showLabel">{{ label }}</template>
    </span>
  </label>
</template>
