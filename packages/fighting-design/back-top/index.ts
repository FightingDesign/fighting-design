import FBackTop from './src/back-top.vue'

import { install } from '../_utils'

install(FBackTop, FBackTop.name)

export type FBackTopInstance = InstanceType<typeof FBackTop>

export default FBackTop
