import Button from './src/button.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(Button)

export const FButton = Button

export type FButtonInstance = InstanceType<typeof FButton>
