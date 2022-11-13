<script lang="ts" setup name="FCheckboxGroup">
  import { provide, reactive, toRefs, computed } from 'vue'
  import { Props, Emits, checkboxGroupPropsKey } from './props'
  import { sizeChange } from '../../_utils'
  import type {
    CheckboxGroupPropsType,
    CheckboxGroupLabelType,
    CheckboxGroupChangeEventInterface,
    CheckboxGroupInjectPropsType
  } from './interface'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { ClassListInterface } from '../../_interface'

  const prop: CheckboxGroupPropsType = defineProps(Props)
  const emit = defineEmits(Emits)
  // const parent = getCurrentInstance() as ComponentInternalInstance

  // 绑定值发生改变时候触
  const changeEvent: CheckboxGroupChangeEventInterface = (
    val: CheckboxGroupLabelType
  ): void => {
    emit('update:modelValue', val)
    emit('change', val)
    prop.change && prop.change(val)
  }

  // 需要注入的依赖项
  const checkboxGroupProps: CheckboxGroupInjectPropsType = reactive({
    ...toRefs(prop),
    changeEvent
  } as const)

  provide(checkboxGroupPropsKey, checkboxGroupProps)

  // 样式列表
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { columnGap, rowGap } = prop

    return {
      columnGap: sizeChange(columnGap),
      rowGap: sizeChange(rowGap)
    } as const
  })

  // 类名列表
  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      const { border, vertical, size } = prop

      return [
        'f-checkbox-group',
        {
          'f-checkbox-group__border': border,
          'f-checkbox-group__vertical': vertical,
          [`f-checkbox-group__${size}`]: size && border
        }
      ] as const
    }
  )
  
  // const flattenVNodes = (children: VNodeNormalizedChildren): VNode[] => {
  //   const result: VNode[] = []

  //   const loop = (children: VNodeNormalizedChildren): void => {
  //     if (Array.isArray(children)) {
  //       children.forEach((item) => {
  //         if (isVNode(item)) {
  //           if (item.el) {
  //             if (item.el.nodeType === 1 && item.el.role === 'checkbox') {
  //               result.push(item)
  //             }
  //           }
  //           // if (typeof item.type === 'object' && item.type.name === 'FCheckbox') {
  //           //   result.push(item)
  //           // }
  //           if (item.children) {
  //             loop(item.children)
  //           }
  //         }
  //       })
  //     }
  //   }
  //   loop(children)
  //   return result
  // }

  // const toggleAll = (bool?: boolean): void => {
    // const vnodes = flattenVNodes(parent.subTree.children)
    // // console.log(vnodes)
    // const newValue = vnodes.map((item: object): string => item.props.label || '')
    // const val = bool ? newValue : []
    // changeEvent(val)
    // emit('update:modelValue', val)
    // emit('change', val)
  // }
  // defineExpose({ toggleAll })
</script>

<template>
  <div role="group" :class="classList" :style="styleList">
    <slot />
  </div>
</template>
