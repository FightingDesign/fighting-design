import Aside from './src/aside.vue'

import { install } from '../_utils'

export const FAside = install(Aside)

export type AsideInstance = InstanceType<typeof Aside>

export * from './src/interface.d'

export default Aside
