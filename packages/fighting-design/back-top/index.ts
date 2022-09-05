import BackTop from './src/back-top.vue'

import { install } from '../_utils'

export const FBackTop = install(BackTop)

export type FBackTopInstance = InstanceType<typeof BackTop>
