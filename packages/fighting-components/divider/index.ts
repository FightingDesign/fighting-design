import FDivider from './src/divider.vue'

import { install } from '../_utils'

install(FDivider, FDivider.name)

export type FDividerInstance = InstanceType<typeof FDivider>

export default FDivider
