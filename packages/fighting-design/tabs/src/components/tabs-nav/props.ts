import type { PropType, ExtractPropTypes } from 'vue'
import { TabsNavInstance, TabsPaneName } from '../../interface'

export const Props = {
  /**
   * 标题配置
   */
  navs: {
    type: Array as PropType<TabsNavInstance[]>
  }
}

export const Emits = {
  'setCurrentName': (name: TabsPaneName):TabsPaneName => name
} as const

export type TabsNavPropsType = ExtractPropTypes<typeof Props>