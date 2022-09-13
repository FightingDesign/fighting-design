import Alert from './src/alert.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(Alert)

export const FAlert = Alert

export type FAlertInstance = InstanceType<typeof Alert>
