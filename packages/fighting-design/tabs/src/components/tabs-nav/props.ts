import type { PropType, ExtractPropTypes } from 'vue'
import type {
  TabsNavInstance,
  TabsPaneName,
  TabsPosition,
  TabsType,
  TabsJustifyContent
} from '../../interface'

export const Props = {
  /**
   * 标题配置
   */
  navs: {
    type: Array as PropType<TabsNavInstance[]>
  },
  type: {
    type: String as PropType<TabsType>
  },
  position: {
    type: String as PropType<TabsPosition>
  },
  currentName: {
    type: [String, Number] as PropType<TabsPaneName>
  },
  beforeEnter: {
    type: Function as PropType<(name: TabsPaneName) => boolean | void>
  },
  justifyContent: {
    type: String as PropType<TabsJustifyContent>
  },
  editStatus: {
    type: Boolean
  },
  trigger: {
    type: String as PropType<'click' | 'hover'>
  }
}

export type TabsNavPropsType = ExtractPropTypes<typeof Props>
