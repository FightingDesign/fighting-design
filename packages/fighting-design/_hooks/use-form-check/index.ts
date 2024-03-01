import { reactive, computed, useSlots } from 'vue'
import {
  getChildren,
  isArray,
  isString,
  isObject,
  warning,
  splitString,
  isNumber
} from '../../_utils'
import type { FormProps } from '../../form'
import type { VNode, Slots } from 'vue'
import type { FormItemRules, FormItemRulesItem, FormItemProps } from '../../form-item'

/**
 * useFormCheck 返回值类型接口
 *
 * @param { Object } childrenCheckResult 子节点校验结果
 * @param { Function } validate 校验方法
 */
export interface UseFormCheckReturn {
  childrenCheckResult: Record<string, boolean | string>
  validate: () => boolean
}

/**
 * form 表单校验方法
 *
 * @param { Object } prop prop 参数
 */
export const useFormCheck = (prop: FormProps): UseFormCheckReturn => {
  /** 子节点校验结果 */
  const childrenCheckResult: Record<string, boolean | string> = reactive({})
  /** 获取插槽 */
  const slot: Slots = useSlots()

  /** 获取到所有子节点 vNode */
  const getChildrenList = computed((): VNode[] => {
    // 如果没有插槽内容，返回空数组
    if (!slot.default) return []

    /** 获取到所有子节点元素 */
    const children = getChildren(slot.default(), 'FFormItem')

    // 遍历添每个节点判断是否验证通过
    children.forEach((item: VNode): void => {
      // 必须有 name 和 rules 才能触发表单校验
      if (item.props && item.props.name && item.props.rules) {
        // 初始状态下默认设置全部没有通过校验
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
   * @param { string } value 当前需要检测的值
   * @param { Object | Array } rules 规则
   */
  const checkRuleMassage = (
    value: string,
    rules: FormItemRules | FormItemRulesItem
  ): string | boolean => {
    /**
     * 测试每一项规则
     *
     * @param { Object } ruleItem 每一项规则
     */
    const test = (ruleItem: FormItemRulesItem): boolean => {
      // 如果需要检测长度
      if (ruleItem.max || ruleItem.min) {
        // 不是一个有效的值
        if (!isNumber(value) && !isString(value)) {
          // 警告信息：需要检测的参数类型错误
          warning('f-form-item', 'Wrong parameter type to be detected')
          return false
        }
      }

      /** 获取到当前输入字符串的长度 */
      const length: number = (value + '').length

      return !(
        // 必填项
        (
          (ruleItem.required && !value) ||
          // 设置最大输入长度
          (ruleItem.max && length > ruleItem.max) ||
          // 设置最小输入长度
          (ruleItem.min && length < ruleItem.min) ||
          // 设置正则校验
          (ruleItem.regExp && !ruleItem.regExp.test(value)) ||
          // 自定义校验方法
          (ruleItem.validator && !ruleItem.validator())
        )
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
   * 获取到每个子组件，检测输入的内容是否符合规则
   */
  const validate = (): boolean => {
    getChildrenList.value.forEach((item: VNode): void => {
      /** 子组件规则 */
      const _rules: FormItemProps['rules'] = item.props && item.props.rules
      /** 子组件名字 */
      const _name: FormItemProps['name'] = item.props && item.props.name

      // 判断的每个子组件必须有 rules 和 name 参数
      if (item.props && _rules && _name && prop.model) {
        // 如果字符串中带有 . 说明的层级嵌套关系
        if (_name.includes('.')) {
          const nameLevel = splitString(_name, '.')
          let modelKeyVal: any = prop.model

          // 如果 name 的层级存在，那么循环便利，找到榜单的值
          if (nameLevel && nameLevel.length) {
            for (const iterator of nameLevel) {
              modelKeyVal = modelKeyVal[iterator]

              // 如果没有找到 name 则保持停止遍历
              if (!modelKeyVal) {
                warning('f-form-item', `${_name} is not a valid \`name\` parameter`)
                break
              }
            }

            /** 获取到规则校验的信息 */
            const msg: string | boolean = checkRuleMassage(
              modelKeyVal as unknown as string,
              _rules
            )

            childrenCheckResult[_name] = msg
          }
        }
        // 检测父组件绑定的对象上是否存在子组件绑定的 name 属性
        else if (_name in prop.model) {
          /** 获取需要检测的值 */
          const modelKeyVal: string = (prop.model as object)[_name as keyof object]

          /** 获取到规则校验的信息 */
          const msg: string | boolean = checkRuleMassage(modelKeyVal, _rules)

          childrenCheckResult[_name] = msg
        }
        // xxx 不是有效的 `name` 参数
        else {
          warning('f-form-item', `${_name} is not a valid \`name\` parameter`)
        }
      }
    })

    /** 获取当前规则对象的 value 值 */
    const childrenCheckResultKey: (string | boolean)[] =
      Object.values(childrenCheckResult)

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

  return { childrenCheckResult, validate }
}
