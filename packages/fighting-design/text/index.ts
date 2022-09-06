import Text from './src/text.vue'

import { install } from '../_utils'

export const FText = /* @__PURE__ */ () => install(Text)

export type FTextInstance = InstanceType<typeof Text>
