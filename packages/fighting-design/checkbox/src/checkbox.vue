<script lang="ts" setup>
  import { Props } from './props'
  import { computed, inject, reactive } from 'vue'
  import { useRun, useList } from '../../_hooks'
  import { CHECKBOX_GROUP_PROPS_KEY } from '../../checkbox-group/src/props'
  import { isArray, isBoolean } from '../../_utils'
  import type { CheckboxGroupProvide } from '../../checkbox-group'
  import type { CheckboxModelValue } from './interface'

  defineOptions({ name: 'FCheckbox' })

  const prop = defineProps(Props)
  const modelValue = defineModel<CheckboxModelValue | string[]>({
    default: false,
    type: [Boolean, Array]
  })

  const { run } = useRun()

  /** 当前绑定的值 */
  const keyword = computed({
    get: (): CheckboxModelValue | string[] => {
      return (parentInject && parentInject.modelValue) || prop.modelValue
    },
    set: (val: CheckboxModelValue | string[]): void => {
      if (!parentInject) {
        modelValue.value = val
        run(prop.onChange, val)
        return
      }
      parentInject.setChange(val)
    }
  })

  /** 获取父组件注入的依赖项 */
  const parentInject: CheckboxGroupProvide | null = inject(CHECKBOX_GROUP_PROPS_KEY, null)

  /** 是否被选中 */
  const isActive = computed((): boolean => {
    /** 绑定值 */
    const value: CheckboxModelValue | string[] = keyword.value

    if (isArray(value)) {
      return value.includes(prop.label as never)
    } else if (isBoolean(value)) {
      return value
    }

    return value === prop.label
  })

  /** 父级是否带有禁用 */
  const isParentDisabled = computed(
    (): boolean => !!(parentInject && parentInject.disabled)
  )

  /** 判断是否被禁用 */
  const isDisabled = computed((): boolean => prop.disabled || isParentDisabled.value)

  const { classes } = useList(
    reactive({
      checked: isActive,
      disabled: isDisabled
    }),
    'checkbox'
  )

  /** 类名列表 */
  const classList = classes(['checked', 'disabled'], 'f-checkbox')
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
      v-model="keyword"
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
