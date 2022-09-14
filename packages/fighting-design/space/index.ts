import Space from './src/space.vue'

import { install } from '../_utils'

export const FSpace = install(Space)

export type FSpaceInstance = InstanceType<typeof Space>
