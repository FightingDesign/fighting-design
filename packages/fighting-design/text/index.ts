import Text from './src/text.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(Text)

export const FText = Text

export type FTextInstance = InstanceType<typeof Text>
