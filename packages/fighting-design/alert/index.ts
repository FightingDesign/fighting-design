import FAlert from './src/alert.vue'

import { install } from '../_utils'

export type FAlertInstance = InstanceType<typeof FAlert>

export default install(FAlert)
