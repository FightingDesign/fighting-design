import Alert from './src/alert.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(Alert)

export const FAlert = Alert

export type FAlertInstance = InstanceType<typeof Alert>

// import FAlert from './src/alert.vue'

// import type { App } from 'vue'

// export { FAlert }

// export type FAlertInstance = InstanceType<typeof FAlert>

// export default {
//   install (app: App): void {
//     app.component(FAlert.name, FAlert)
//   }
// }
