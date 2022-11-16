import type { PropType, ExtractPropTypes, InjectionKey } from 'vue'
import type { ListSizeType } from './interface'

export const Props = {
  /**
   * 前缀样式，原生属性	
   */
  listStyle: {
    type: String,
    default: (): string => ''
  },
  /**
   * 是否显示斑马纹
   */
  zebra: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否居中	
   */
  center: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 自定义文字颜色
   */
  textColor: {
    type: String,
    default: (): string => ''
  },
  /**
   * 自定义边框颜色
   */
  borderColor: {
    type: String,
    default: (): string => ''
  },
  /**
   * 尺寸	
   */
  size: {
    type: String as PropType<ListSizeType>,
    default: (): ListSizeType => 'middle',
    validator: (val: ListSizeType): boolean => {
      return (['large', 'middle', 'small'] as const).includes(val)
    }
  },
  /**
   * 最大高度
   */
  maxHeight: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  }
} as const

export type ListPropsType = ExtractPropTypes<typeof Props>

export const LIST_PROPS_KEY: InjectionKey<ListPropsType> = Symbol('list-props-key')
