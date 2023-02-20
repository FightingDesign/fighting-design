import { setArrayProp } from '../../../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { TableColumns } from '../../interface'

export const Props = {
  /** 标题配置 */
  columns: setArrayProp<TableColumns[]>()
}

/** table-colgroup 组件 props 类型 */
export type TableColgroupProps = ExtractPropTypes<typeof Props>
