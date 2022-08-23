import FTag from './src/tag.vue'

import { install } from '../_utils'

install(FTag, FTag.name)

export type FTagInstance = InstanceType<typeof FTag>

export default FTag
