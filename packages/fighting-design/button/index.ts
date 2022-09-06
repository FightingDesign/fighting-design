import Button from './src/button.vue'

import { install } from '../_utils'

export const FButton = /* @__PURE__ */ (() => install(Button))()

export type FButtonInstance = InstanceType<typeof FButton>
