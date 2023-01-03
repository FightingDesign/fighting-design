import Box from './src/box.vue'

import { install } from '../_utils'

export const FBox = install(Box)

export type BoxInstance = InstanceType<typeof Box>

export * from './src/interface.d'

export default FBox
