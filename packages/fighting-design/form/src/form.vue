<script lang="ts" setup name="FForm">
  import { Props, FORM_PROVIDE_KEY } from './props'
  import { provide, reactive, toRefs, useSlots, computed } from 'vue'
  import { useRun } from '../../_hooks'
  import { getChildren, isArray, isString, isObject } from '../../_utils'
  import type { VNode } from 'vue'
  import type { FormInject, FormParam } from './interface'
  import type { FormItemRules, FormItemRulesItem } from '../../form-item'

  const prop = defineProps(Props)
  const slot = useSlots()

  /** 子节点校验结果 */
  const childrenCheckResult: Record<string, boolean | string> = reactive({})

  /** 获取到所有子节点 vNode */
  const getChildrenList = computed((): VNode[] => {
    /** 如果没有插槽内容，返回空数组 */
    if (!slot.default) return []

    /** 获取到所有子节点元素 */
    const children = getChildren(slot.default(), 'FFormItem')

    /** 遍历添每个节点判断是否验证通过 */
    children.forEach((item: VNode): void => {
      if (item.props && item.props.name) {
        /** 初始状态下默认设置全部没有通过校验 */
        childrenCheckResult[item.props.name] = false
      }
    })

    return children
  })

  /**
   * 校验规则返回结果信息
   *
   * 如果返回 true 的布尔值标识验证成功，返回字符串则标识错误信息
   *
   * @param value 当前需要检测的值
   * @param rules 规则
   */
  const checkRuleMassage = (value: string, rules: FormItemRules | FormItemRulesItem): string | boolean => {
    /**
     *
     * 测试每一项规则
     *
     * @param ruleItem 每一项规则
     */
    const test = (ruleItem: FormItemRulesItem): boolean => {
      /** 获取到当前输入字符串的长度 */
      const length: number = value.length + 1

      return !(
        (ruleItem.required && !value) ||
        (ruleItem.max && length > ruleItem.max) ||
        (ruleItem.min && length < ruleItem.min) ||
        (ruleItem.regExp && !ruleItem.regExp.test(value))
      )
    }

    if (isArray(rules)) {
      /**
       * 遍历规则列表，检测，每一项是否符合规则
       *
       * 如果未符合规则，有 message 则返回，否则返回 false
       */
      for (const rule of rules) {
        if (!test(rule)) {
          return rule.message || false
        }
      }
    } else if (isObject(rules)) {
      if (!test(rules)) {
        return rules.message || false
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
      /** 判断的每个自组件必须有 rules 和 name 参数 */
      if (item.props && item.props.rules && item.props.name && prop.model) {
        /** 获取到规则校验的信息 */
        const msg: string | boolean = checkRuleMassage(prop.model[item.props.name], item.props.rules)

        childrenCheckResult[item.props.name] = msg
      }
    })

    /** 获取当前规则对象的 value 值 */
    const childrenCheckResultKey: (string | boolean)[] = Object.values(childrenCheckResult)

    if (childrenCheckResultKey.length) {
      /**
       * 获取到对象的 value 值，如果判断全部为真才返回真，否则返回假
       *
       * @see every https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every
       */
      return childrenCheckResultKey.every((item: boolean | string): boolean => {
        return !!item && !isString(item)
      })
    }

    return true
  }

  /**
   * 提交表单
   *
   * @see SubmitEvent https://developer.mozilla.org/zh-CN/docs/Web/API/SubmitEvent/submitter
   * @param { Object } evt 事件对象
   */
  const handelSubmit = (evt: SubmitEvent): void => {
    /**
     * 组织表单默认行为
     *
     * @see event.preventDefault https://developer.mozilla.org/zh-CN/docs/Web/API/Event/preventDefault
     */
    evt.preventDefault()

    /** 获取到是否校验通过 */
    const ok: boolean = prop.model ? validate() : true

    useRun(prop.onSubmit, { ok, res: childrenCheckResult, evt } as FormParam)
  }

  /** 注入依赖项 */
  provide<FormInject>(
    FORM_PROVIDE_KEY,
    reactive({
      ...toRefs(prop),
      childrenCheckResult
    })
  )
</script>

<template>
  <form v-if="$slots.default" role="form" class="f-form" :onsubmit="handelSubmit">
    <slot />
  </form>
</template>
