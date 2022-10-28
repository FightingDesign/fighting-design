import Text from './src/text.vue'

import { install } from '../_utils'

export const FText = install(Text)

export type TextInstance = InstanceType<typeof Text>

export * from './src/interface.d'

export default Text
