import ButtonGroup from './src/button-group.vue'

import { install } from '../_utils'

export const FButtonGroup = /* @__PURE__ */ (() => install(ButtonGroup))()

export type FButtonGroupInstance = InstanceType<typeof ButtonGroup>
