import SvgIcon from './src/svg-icon.vue'

import { install } from '../_utils'

export const FSvgIcon = install(SvgIcon)

export type SvgIconInstance = InstanceType<typeof SvgIcon>

export * from './src/interface.d'

export default SvgIcon
