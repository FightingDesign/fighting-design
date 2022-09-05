import Svg from './src/svg.vue'

import { install } from '../_utils'

export const FSvg = install(Svg)

export type FSvgInstance = InstanceType<typeof Svg>
