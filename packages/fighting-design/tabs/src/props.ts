import type { ExtractPropTypes, PropType, InjectionKey } from 'vue'
import type {
  TabsTrigger,
  TabsPaneName,
  TabsPosition,
  TabsType,
  TabsJustifyContent,
  BeforeEnter
} from './interface'

export const Props = {
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
   * 活跃的 name
   */
  modelValue: {
    type: [String, Number] as PropType<TabsPaneName>,
    default: (): null => null
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
   * @defaultValue flex-start
   */
  justifyContent: {
    type: String as PropType<TabsJustifyContent>,
    default: (): TabsJustifyContent => 'flex-start',
    validator: (val: TabsJustifyContent): boolean => {
      return (['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'] as const).includes(val)
    }
  },
  /**
   * 编辑状态
   */
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
  /**
   * 切换前的回调
   */
  onBeforeEnter: {
    type: Function as PropType<BeforeEnter>,
    default: (): null => null
  }
} as const

export type TabsProps = ExtractPropTypes<typeof Props>

export const TABS_PROPS_KEY: InjectionKey<TabsProps> = Symbol('tabs-props-key')
