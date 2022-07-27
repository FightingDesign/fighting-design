import type { PropType, ExtractPropTypes, InjectionKey } from 'vue'
import type { listSize } from './interface'

export const Props = {
  // TODO
  /** showNum 是否展示编号 **/
  showNum: {
    type: Boolean,
    default: (): boolean => false
  },
  /** zebra 斑马纹 **/
  zebra: {
    type: Boolean,
    default: (): boolean => false
  },
  /** single 单行显示 **/
  single: {
    type: Boolean,
    default: (): boolean => false
  },
  /** center 文字居中 **/
  center: {
    type: Boolean,
    default: (): boolean => false
  },
  // TODO
  /** hoverShow 是否在 hover 状态展示投影效果 **/
  hoverShow: {
    type: Boolean,
    default: (): boolean => false
  },
  // TODO
  /** importantList 斑重点行，传入一个 number[] 类型。重点行会高亮马纹 **/
  importantList: {
    type: Array as PropType<number[]>,
    default: (): number[] => []
  },
  /** textColor 字体颜色 **/
  textColor: {
    type: String,
    default: (): string => ''
  },
  /** borderColor 边框颜色 **/
  // TODO 显示有问题
  borderColor: {
    type: String,
    default: (): string => ''
  },
  /** background 背景色 **/
  background: {
    type: String,
    default: (): string => ''
  },
  /** size 不同尺寸 **/
  size: {
    type: String as PropType<listSize>,
    default: (): listSize => 'middle',
    validator: (val: listSize): boolean => {
      return (['large', 'middle', 'small'] as const).includes(val)
    }
  },
  /** split 是否显示分割线 **/
  // TODO
  split: {
    type: Boolean,
    default: (): boolean => false
  },
  /** maxHeight 最大高度 **/
  maxHeight: {
    type: String,
    default: (): string => ''
  }
} as const

type listPropsType = ExtractPropTypes<typeof Props>

export const listPropsKey: InjectionKey<listPropsType> = Symbol('list-props')
