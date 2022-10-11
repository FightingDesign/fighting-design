import Tag from './src/tag.vue'

import { install } from '../_utils'

export const FTag = install(Tag)

export type TagInstance = InstanceType<typeof Tag>

export type { TagPropsType } from './src/tag'

export type { TagSizeType, TagType } from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FTag: typeof FTag
  }
}
