import type { ExtractPropTypes, PropType } from 'vue'
import { TabsPaneName, TabsPosition, TabsType, TabsJustifyContent } from './interface'

export const Props = {
  /**
   * nav所在位置
   */
  position: {
    type: String as PropType<TabsPosition>,
    default: 'top'
  },
  /**
   * 活跃的name
   */
  modelValue: [String, Number] as PropType<TabsPaneName>,
  /**
   * 样式风格
   */
  type: {
    type: String as PropType<TabsType>,
    default: 'line'
  },
  /**
   * 对齐方式
   */
  justifyContent: {
    type: String as PropType<TabsJustifyContent>,
    default: 'flex-start'
  },
  /**
   * 编辑状态
   */
  editStatus: {
    type: Boolean,
    default: false
  },
  /**
   * 切换前的回调
   */
  beforeEnter: {
    type: Function as PropType<(name: TabsPaneName) => boolean|void>
  },
  /**
   * 触发事件
   */
  trigger: {
    type: String as PropType<'click' | 'hover'>,
    default: 'click'
  }
} as const

export const Emits = {
  'update:modelValue': (val: String | Number) => true, // 下标可能为0
  'edit': (action: 'remove'|'add', name: TabsPaneName, index: number):boolean => true
} as const

export type TabsPropsType = ExtractPropTypes<typeof Props>

export const TabsProvideKey = Symbol('f-tabs')