import FAlert from './src/alert.vue'

import { install } from '../_utils'

install(FAlert, FAlert.name)

export type FAlertInstance = InstanceType<typeof FAlert>

export default FAlert
