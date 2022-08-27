import FNotification from './src/notification.vue'

import { install } from '../_utils'

install(FNotification, FNotification.name)

export type FNotificationInstance = InstanceType<typeof FNotification>

export default FNotification
