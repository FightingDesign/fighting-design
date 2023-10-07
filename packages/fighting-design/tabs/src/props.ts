import { setStringNumberProp, setStringProp, setFunctionProp } from '../../_utils'
import type { ExtractPropTypes, InjectionKey } from 'vue'
import type {
  TabsTrigger,
  TabsModelValue,
  TabsPosition,
  TabsType,
  TabsJustifyContent,
  TabsSwitch,
  TabsProvide
} from './interface'

export const Props = {
  /** 活跃的 name */
  modelValue: setStringNumberProp<TabsModelValue>(),
  /**
   * 头部位置
   *
   * @values left right top bottom
   * @default top
   */
  position: setStringProp<TabsPosition>('top', (val: TabsPosition): boolean => {
    return (['left', 'right', 'top', 'bottom'] as const).includes(val)
  }),
  /**
   * 样式风格
   *
   * @values line card segment
   * @default line
   */
  type: setStringProp<TabsType>('line', (val: TabsType): boolean => {
    return (['line', 'card', 'segment'] as const).includes(val)
  }),
  /**
   * 对齐方式
   *
   * @values flex-start center flex-end space-between space-around space-evenly
   * @see justify-content https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content
   */
  justifyContent: setStringProp<TabsJustifyContent>(
    undefined,
    (val: TabsJustifyContent): boolean => {
      return (
        [
          'flex-start',
          'center',
          'flex-end',
          'space-between',
          'space-around',
          'space-evenly'
        ] as const
      ).includes(val)
    }
  ),
  /**
   * 触发方式
   *
   * @values click hover
   * @default click
   */
  trigger: setStringProp<TabsTrigger>('click', (val: TabsTrigger): boolean => {
    return (['click', 'hover'] as const).includes(val)
  }),
  /** 切换前的回调 */
  onSwitch: setFunctionProp<TabsSwitch>()
} as const

/** tabs 组件 props 类型 */
export type TabsProps = ExtractPropTypes<typeof Props>

/** tabs 组件注入的依赖项 */
export const TABS_PROPS_KEY: InjectionKey<TabsProvide> = Symbol('tabs-props-key')
