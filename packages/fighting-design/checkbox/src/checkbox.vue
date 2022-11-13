<script lang="ts" setup name="FCheckbox">
  import { computed, inject, getCurrentInstance, ref } from 'vue'
  import { Props, Emits } from './props'
  import { checkboxGroupPropsKey } from '../../checkbox-group/src/props'
  import type { ClassListInterface } from '../../_interface'
  import type {
    CheckboxGroupLabelType,
    CheckboxGroupInjectPropsType
  } from '../../checkbox-group/src/interface'
  import type {
    ComputedRef,
    Ref,
    ComponentInternalInstance,
    WritableComputedRef
  } from 'vue'
  import type { CheckboxPropsType } from './interface'

  const prop: CheckboxPropsType = defineProps(Props)
  const emit = defineEmits(Emits)

  const groupProps: Ref<CheckboxGroupInjectPropsType | null> = ref(null)

  // 获取父组件注入的依赖项
  const getGroupInject = (): void => {
    const { parent } = getCurrentInstance() as ComponentInternalInstance
    const parentName: string | undefined = (parent as ComponentInternalInstance)
      .type.name

    /**
     * 检测父组件是不是 FCheckboxGroup
     * 只有 FCheckboxGroup 才是可注入依赖的父组件
     */
    if (parentName && parentName === 'FCheckboxGroup') {
      groupProps.value = inject<CheckboxGroupInjectPropsType>(
        checkboxGroupPropsKey
      ) as CheckboxGroupInjectPropsType
    }
  }
  getGroupInject()

  /**
   * 绑定值
   */
  const modelValue: WritableComputedRef<CheckboxGroupLabelType> = computed({
    /**
     * 获取值
     */
    get () {
      return (
        (groupProps.value && groupProps.value.modelValue) || prop.modelValue
      )
    },
    /**
     * 设置值
     */
    set (val) {
      if (groupProps.value && !groupProps.value.disabled) {
        groupProps.value.changeEvent(val)
        return
      }
      if (prop.disabled) return
      emit('update:modelValue', val)
      emit('change', val)
    }
  })

  // 是否被选中
  const isChecked: ComputedRef<boolean> = computed((): boolean => {
    const val: CheckboxGroupLabelType = modelValue.value
    if (Array.isArray(val)) {
      return val.includes(prop.label)
    } else if (typeof val === 'boolean') {
      return val
    }
    return (val === prop.label) as boolean
  })

  // 类名列表
  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      return [
        'f-checkbox',
        {
          'f-checkbox__selected': isChecked.value,
          'f-checkbox__half': prop.halfCheck,
          'f-checkbox__bordered': groupProps.value && groupProps.value.border,
          'f-checkbox__disabled':
            prop.disabled || (groupProps.value && groupProps.value.disabled)
        }
      ] as const
    }
  )
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
      v-model="modelValue"
      type="checkbox"
      class="f-checkbox__input"
      hidden
      :value="label"
      :disabled="disabled || (!!groupProps && groupProps.disabled)"
    />
    <span v-if="!(groupProps && groupProps.border)" class="f-checkbox__box" />
    <span class="f-checkbox__text">
      <slot />
      <template v-if="!$slots.default && showLabel">{{ label }}</template>
    </span>
  </label>
</template>
