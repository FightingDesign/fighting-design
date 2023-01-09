import type { ExtractPropTypes, PropType, InjectionKey } from 'vue'
import type {
  TabsTrigger,
  TabsModelValue,
  TabsPosition,
  TabsType,
  TabsJustifyContent,
  TabsSwitch,
  TabsEdit
} from './interface'

export const Props = {
  /** 活跃的 name */
  modelValue: {
    type: [String, Number] as PropType<TabsModelValue>,
    default: (): null => null
  },
  /**
   * 头部位置
   *
   * @values left right top bottom
   * @defaultValue top
   */
  position: {
    type: String as PropType<TabsPosition>,
    default: (): TabsPosition => 'top',
    validator: (val: TabsPosition): boolean => {
      return (['left', 'right', 'top', 'bottom'] as const).includes(val)
    }
  },
  /**
   * 样式风格
   *
   * @values line card segment
   * @defaultValue line
   */
  type: {
    type: String as PropType<TabsType>,
    default: (): TabsType => 'line',
    validator: (val: TabsType): boolean => {
      return (['line', 'card', 'segment'] as const).includes(val)
    }
  },
  /**
   * 对齐方式
   *
   * @values flex-start center flex-end space-between space-around space-evenly
   * @see justify-content https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content
   */
  justifyContent: {
    type: String as PropType<TabsJustifyContent>,
    default: (): null => null,
    validator: (val: TabsJustifyContent): boolean => {
      return (['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'] as const).includes(
        val
      )
    }
  },
  /** 编辑状态 */
  editStatus: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 触发方式
   *
   * @values click hover
   * @defaultValue click
   */
  trigger: {
    type: String as PropType<TabsTrigger>,
    default: (): TabsTrigger => 'click',
    validator: (val: TabsTrigger): boolean => {
      return (['click', 'hover'] as const).includes(val)
    }
  },
  /** 切换前的回调 */
  onSwitch: {
    type: Function as PropType<TabsSwitch>,
    default: (): null => null
  },
  /** 可编辑模式的回调 */
  onEdit: {
    type: Function as PropType<TabsEdit>,
    default: (): null => null
  }
} as const

export type TabsProps = ExtractPropTypes<typeof Props>

export const TABS_PROPS_KEY: InjectionKey<TabsProps> = Symbol('tabs-props-key')
