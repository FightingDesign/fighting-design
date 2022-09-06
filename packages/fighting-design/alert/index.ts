import Alert from './src/alert.vue'

import { install } from '../_utils'

export const FAlert = /* @__PURE__ */ (() => install(Alert))()
// export const FAlert = _install(Alert)

export type FAlertInstance = InstanceType<typeof Alert>
