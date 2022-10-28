import Tag from './src/tag.vue'

import { install } from '../_utils'

export const FTag = install(Tag)

export type TagInstance = InstanceType<typeof Tag>

export * from './src/interface.d'

export default Tag
