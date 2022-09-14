import Aside from './src/aside.vue'

import { install } from '../_utils'

export const FAside = install(Aside)

export type FAsideInstance = InstanceType<typeof Aside>
