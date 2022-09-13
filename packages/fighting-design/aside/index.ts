import Aside from './src/aside.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(Aside)

export const FAside = Aside

export type FAsideInstance = InstanceType<typeof Aside>

// import FAside from './src/aside.vue'

// import type { App } from 'vue'

// export { FAside }

// export type FAsideInstance = InstanceType<typeof FAside>

// export default {
//   install (app: App): void {
//     app.component(FAside.name, FAside)
//   }
// }
