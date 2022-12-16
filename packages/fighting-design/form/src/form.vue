<script lang="ts" setup name="FForm">
  import { Props, FORM_PROVIDE_KEY } from './props'
  import { provide, reactive, toRefs, useSlots, computed } from 'vue'
  import { useRun } from '../../_hooks'
  import { getChildren } from '../../_utils'
  import type { VNode } from 'vue'
  import type { FormInject, FormParam } from './interface'

  const prop = defineProps(Props)
  const slot = useSlots()

  /**
   * 错误处理对象
   */
  const childrenErr: Record<string, boolean> = reactive({})

  /**
   * 获取到所有子节点 vNode
   */
  const getChildrenList = computed((): VNode[] => {
    // 如果没有插槽内容，返回空数组
    if (!slot.default) return []

    /**
     * 获取到所有子节点元素
     */
    const children = getChildren(slot.default(), 'FFormItem')

    /**
     * 遍历添每个节点判断是否验证通过
     */
    children.forEach((item: VNode): void => {
      if (item.props && item.props.name) {
        // 初始状态下默认设置全部没有通过校验
        childrenErr[item.props.name] = false
      }
    })

    return children
  })

  /**
   * 校验方法
   *
   * 获取到每个自组件，检测输入的内容是否符合规则
   */
  const validate = (): boolean => {
    getChildrenList.value.forEach((item: VNode): void => {
      // 判断的每个自组件必须有 rules 和 name 参数
      if (item.props && item.props.rules && item.props.name) {
        // 如果校验规则不通过
        if (!prop.model[item.props.name]) {
          childrenErr[item.props.name] = true
        } else {
          childrenErr[item.props.name] = false
        }
      }
    })

    /**
     * 获取到对象的 value 值，如果判断全部为真才返回真，否则返回假
     *
     * @see every https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every
     */
    return Object.values(childrenErr).every((item: boolean): boolean => !item)
  }

  /**
   * 提交表单
   *
   * @see SubmitEvent https://developer.mozilla.org/zh-CN/docs/Web/API/SubmitEvent/submitter
   * @param evt 事件对象
   */
  const handelSubmit = (evt: SubmitEvent): void => {
    // 组织表单默认行为
    evt.preventDefault()

    /**
     * 获取到是否校验通过
     */
    const ok: boolean = validate()

    useRun(prop.onSubmit, { ok, evt } as FormParam)
  }

  provide<FormInject>(
    FORM_PROVIDE_KEY,
    reactive({
      ...toRefs(prop),
      childrenErr
    })
  )
</script>

<template>
  <form v-if="$slots.default" class="f-form" :onsubmit="handelSubmit">
    <slot />
  </form>
</template>
