import Tag from './src/tag.vue'

import { install } from '../_utils'

export const FTag = install(Tag)

/** tag 组件实例类型 */
export type TagInstance = InstanceType<typeof Tag>

export * from './src/interface'

export default FTag
