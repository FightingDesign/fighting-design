import {
  setBooleanProp,
  setStringProp,
  setStringNumberProp,
  setObjectProp,
  setFunctionProp
} from '../../_utils'
import { FIGHTING_TYPE, FIGHTING_TARGET } from '../../_tokens'
import type { ExtractPropTypes } from 'vue'
import type { LinkState } from './interface'
import type {
  HandleEvent,
  FightingType,
  FightingIcon,
  FightingTarget
} from '../../_interface'

export const Props = {
  /**
   * link 的类型
   *
   * @values default primary success danger warning
   */
  type: setStringProp<FightingType>(undefined, (val: FightingType): boolean => {
    return FIGHTING_TYPE.includes(val)
  }),
  /**
   * 链接的地址
   *
   * @see href https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a?qs=%3Ca%3E#attr-href
   */
  href: setStringProp(),
  /** 的文字大小 */
  size: setStringNumberProp(),
  /**
   * 状态的样式状态
   *
   * @values line background
   */
  state: setStringProp<LinkState>(undefined, (val: LinkState): boolean => {
    return (['line', 'background'] as const).includes(val)
  }),
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /**
   * 原生 target 属性
   *
   * @values _blank _self _parent _top
   * @default _self
   * @see target https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-target
   */
  target: setStringProp<FightingTarget>('_self', (val: FightingTarget): boolean => {
    return FIGHTING_TARGET.includes(val)
  }),
  /** 自定义颜色 */
  color: setStringProp(),
  /** 自定义移入状态颜色 */
  hoverColor: setStringProp(),
  /** 是否禁止 copy */
  noCopy: setBooleanProp(),
  /** 是否禁止链接跳转及重新加载（取消默认事件） */
  noLink: setBooleanProp(),
  /** 之前的 icon */
  beforeIcon: setObjectProp<FightingIcon>(),
  /** 之后的 icon */
  afterIcon: setObjectProp<FightingIcon>(),
  /** 点击执行的回调 */
  onClick: setFunctionProp<HandleEvent>()
} as const

/** link 组件 props 类型 */
export type LinkProps = ExtractPropTypes<typeof Props>
