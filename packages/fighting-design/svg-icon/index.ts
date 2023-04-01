import SvgIcon from './src/svg-icon.vue'

import { install } from '../_utils'

export const FSvgIcon = install(SvgIcon)

/** svg-icon 组件实例类型 */
export type SvgIconInstance = InstanceType<typeof SvgIcon>

export * from './src/interface'

export default FSvgIcon
