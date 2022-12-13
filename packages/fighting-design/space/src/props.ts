import type { PropType, ExtractPropTypes } from 'vue'
import type { FightingSize } from '../../_interface'

export const Props = {
  /**
   * 是否竖直排列
   */
  vertical: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否换行
   */
  wrap: {
    type: Boolean,
    default: (): boolean => true
  },
  /**
   * 间距尺寸
   *
   * @values large middle small mini
   * @defaultValue middle
   */
  spacing: {
    type: String as PropType<FightingSize>,
    default: (): FightingSize => 'middle',
    validator: (val: FightingSize): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  /**
   * 自定义纵向间距
   */
  rowGap: {
    type: String,
    default: (): null => null
  },
  /**
   * 自定义横向间距
   */
  columnGap: {
    type: String,
    default: (): null => null
  }
} as const

export type SpaceProps = ExtractPropTypes<typeof Props>
