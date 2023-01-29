import { setBooleanProp, setArrayProp, setFunctionProp } from '../../../../_utils'
import type { PropType, ExtractPropTypes } from 'vue'
import type {
  TabsNavInstance,
  TabsModelValue,
  TabsPosition,
  TabsType,
  TabsJustifyContent,
  TabsTrigger,
  TabsEdit,
  TabsSwitch
} from '../../interface'
import type { SetActiveName } from '../../../../_hooks'

export const Props = {
  /** 标题配置 */
  navs: setArrayProp<TabsNavInstance[]>(),
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
  /** 标签的 name */
  activeName: {
    type: [String, Number] as PropType<TabsModelValue>,
    default: (): null => null
  },
  /**
   * 对齐方式
   *
   * @values flex-start center flex-end space-between space-around space-evenly
   * @defaultValue flex-start
   * @see justify-content https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content
   */
  justifyContent: {
    type: String as PropType<TabsJustifyContent>,
    default: (): TabsJustifyContent => 'flex-start',
    validator: (val: TabsJustifyContent): boolean => {
      return (['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'] as const).includes(
        val
      )
    }
  },
  /** 编辑状态 */
  editStatus: setBooleanProp(),
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
  /** 设置选中的 name */
  setActiveName: setFunctionProp<SetActiveName>(),
  /** 设置自定义操作 */
  setEdit: setFunctionProp<TabsEdit>(),
  /** 切换前的回调 */
  onSwitch: setFunctionProp<TabsSwitch>()
}

export type TabsNavProps = ExtractPropTypes<typeof Props>
