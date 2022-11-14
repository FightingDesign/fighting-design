import type { PropType, ExtractPropTypes } from 'vue'
import { TabsNavInstance, TabsPaneName, TabsPosition, TabsType, TabsJustifyContent } from '../../interface'

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
    type: String as PropType<TabsPosition>,
  },
  currentName: {
    type: [String, Number] as PropType<TabsPaneName>
  },
  beforeEnter: {
    type: Function as PropType<(name: TabsPaneName) => boolean|void>
  },
  justifyContent: {
    type: String as PropType<TabsJustifyContent>
  },
  editStatus: {
    type: Boolean
  }
}

export const Emits = {
  'set-current-name': (name: TabsPaneName):boolean => true,
  'edit': (name: TabsPaneName, index: number):boolean => true
} as const

export type TabsNavPropsType = ExtractPropTypes<typeof Props>