import { setArrayProp } from '../../../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { TableColumns } from '../../interface'

export const Props = {
  /** 标题配置 */
  columns: setArrayProp<TableColumns[]>()
}

export type TableColgroupProps = ExtractPropTypes<typeof Props>
