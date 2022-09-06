import Svg from './src/svg.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(Svg)

export const FSvg = Svg

export type FSvgInstance = InstanceType<typeof Svg>
