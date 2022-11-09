import type { PropType, ExtractPropTypes } from 'vue'
import { TabsNavInstance, TabsPaneName, TabsPosition, TabsType } from '../../interface'

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
  }
}

export const Emits = {
  'setCurrentName': (name: TabsPaneName):TabsPaneName => name
} as const

export type TabsNavPropsType = ExtractPropTypes<typeof Props>