import CheckTag from './src/check-tag.vue'

import { install } from '../_utils'

export const FCheckTag = install(CheckTag)

export type CheckTagInstance = InstanceType<typeof CheckTag>

export * from './src/interface'

export default FCheckTag
