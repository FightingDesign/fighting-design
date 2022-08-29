import FNotification from './src/method'

import { installFn } from '../_utils'

installFn(FNotification, 'FNotification')

export type { FMessageInstance as FNotificationInstance } from '../_interface'

export default FNotification
