import Tag from './src/tag.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(Tag)

export const FTag = Tag

export type FTagInstance = InstanceType<typeof Tag>
