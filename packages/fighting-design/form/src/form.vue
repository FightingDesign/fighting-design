<script lang="ts" setup name="FForm">
  import { Props, FORM_PROVIDE_KEY } from './props'
  import { provide, reactive, toRefs, useSlots, computed } from 'vue'
  import { useRun } from '../../_hooks'
  import { getChildren, isString } from '../../_utils'
  import type { VNode } from 'vue'
  import type { FormInject, FormParam } from './interface'
  import type { FormItemRules } from '../../form-item'

  const prop = defineProps(Props)
  const slot = useSlots()

  /**
   * 子节点校验结果
   */
  const childrenCheckResult: Record<string, boolean | string> = reactive({})

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
        childrenCheckResult[item.props.name] = false
      }
    })

    return children
  })

  console.log(/1245/.test('123'))

  /**
   * 校验规则返回结果信息
   *
   * 如果返回 true 的布尔值标识验证成功，返回字符串则标识错误信息
   *
   * @param value 当前需要检测的值
   * @param rules 规则
   */
  const checkRuleMassage = (value: string, rules: FormItemRules): string | boolean => {
    /**
     * 获取到当前输入字符串的长度
     */
    const length: number = value.length + 1

    /**
     * 遍历规则列表，检测，每一项是否符合规则
     *
     * 如果未符合规则，有 message 则返回，否则返回 false
     */
    for (const rule of rules) {
      if (
        (rule.required && !value) ||
        (rule.max && length > rule.max) ||
        (rule.min && length < rule.min) ||
        (rule.regExp && !rule.regExp.test(value))
      ) {
        return rule.message || false
      }
    }

    return true
  }

  /**
   * 校验方法
   *
   * 获取到每个自组件，检测输入的内容是否符合规则
   */
  const validate = (): boolean => {
    getChildrenList.value.forEach((item: VNode): void => {
      // 判断的每个自组件必须有 rules 和 name 参数
      if (item.props && item.props.rules && item.props.name) {
        /**
         * 获取到规则校验的信息
         */
        const msg: string | boolean = checkRuleMassage(prop.model[item.props.name], item.props.rules)

        childrenCheckResult[item.props.name] = msg
      }
    })

    console.log(childrenCheckResult)

    /**
     * 获取到对象的 value 值，如果判断全部为真才返回真，否则返回假
     *
     * @see every https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every
     */
    return Object.values(childrenCheckResult).every((item: boolean | string): boolean => {
      return !!item && !isString(item)
    })
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
      childrenCheckResult
    })
  )
</script>

<template>
  <form v-if="$slots.default" class="f-form" :onsubmit="handelSubmit">
    <slot />
  </form>
</template>
