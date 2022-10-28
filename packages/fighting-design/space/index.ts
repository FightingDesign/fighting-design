import Space from './src/space.vue'

import { install } from '../_utils'

export const FSpace = install(Space)

export type SpaceInstance = InstanceType<typeof Space>

export * from './src/interface.d'

export default Space
