import Space from './src/space.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(Space)

export const FSpace = Space

export type FSpaceInstance = InstanceType<typeof Space>
