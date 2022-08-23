import FMain from './src/main.vue'

import { install } from '../_utils'

install(FMain, FMain.name)

export type FMainInstance = InstanceType<typeof FMain>

export default FMain
