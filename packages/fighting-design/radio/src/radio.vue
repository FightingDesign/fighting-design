<script lang="ts" setup name="FRadio">
  import { Props } from './props'
  import { isString, isBoolean, isNumber } from '../../_utils'
  import { useEmit } from '../../_hooks'
  import { computed, inject, getCurrentInstance, ref } from 'vue'
  import { RADIO_GROUP_PROPS_kEY } from '../../radio-group/src/props'
  import type {
    ComputedRef,
    WritableComputedRef,
    ComponentInternalInstance,
    Ref
  } from 'vue'
  import type {
    RadioGroundInterface,
    RadioLabelType
  } from '../../radio-group/src/interface'
  import type {
    OrdinaryFunctionInterface,
    ClassListInterface
  } from '../../_interface'
  import type { RadioPropsType } from './props'

  const prop: RadioPropsType = defineProps(Props)
  const emit = defineEmits(
    useEmit(
      (val: RadioLabelType): boolean =>
        isString(val) || isNumber(val) || isBoolean(val)
    )
  )

  const groupProps: Ref<RadioGroundInterface | null> = ref(null)

  // 尝试获取父组件注入的依赖
  const loadParentInject: OrdinaryFunctionInterface = (): void => {
    const { parent } = getCurrentInstance() as ComponentInternalInstance
    const parentName: string | undefined = (parent as ComponentInternalInstance)
      .type.name

    if (parentName && parentName === 'FRadioGroup') {
      groupProps.value = inject(RADIO_GROUP_PROPS_kEY) as RadioGroundInterface
    }
  }
  loadParentInject()

  const modelValue: WritableComputedRef<RadioLabelType> = computed({
    /**
     * 获取值
     * 如果父组件有依赖注入则使用
     * 否则使用之身 props 参数
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
      prop.change && prop.change(val)
    }
  })

  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      const { disabled } = prop

      return [
        'f-radio',
        {
          'f-radio__checked': modelValue.value === prop.label,
          'f-radio__margin': !groupProps.value,
          'f-radio__disabled':
            disabled || (groupProps.value && groupProps.value.disabled)
        }
      ] as const
    }
  )
</script>

<template>
  <label
    role="radio"
    aria-checked="false"
    tabindex="0"
    aria-labelledby="q25_radio1-label"
    data-value="True"
    :class="classList"
  >
    <input
      v-model="modelValue"
      hidden
      type="radio"
      :value="label"
      :disabled="disabled"
      :name="name"
    />
    <span v-if="!groupProps?.border" class="f-radio__circle" />
    <span class="f-radio__text">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
