import type { PropType, ExtractPropTypes } from 'vue'
import type { TableColumnsInterface } from '../../interface'

export const Props = {
  /**
   * 标题配置
   */
  columns: {
    type: Array as PropType<TableColumnsInterface[]>,
    default: (): null => null
  }
}

export type TableColgroupProps = ExtractPropTypes<typeof Props>
