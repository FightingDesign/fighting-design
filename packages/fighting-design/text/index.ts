import Text from './src/text.vue'

import { install } from '../_utils'

export const FText = install(Text)

export type FTextInstance = InstanceType<typeof Text>
