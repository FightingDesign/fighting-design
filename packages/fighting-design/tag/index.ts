import Tag from './src/tag.vue'

import { install } from '../_utils'

export const FTag = install(Tag)

export type FTagInstance = InstanceType<typeof Tag>
