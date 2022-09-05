import FText from './src/text.vue'

import { install } from '../_utils'

export type FTextInstance = InstanceType<typeof FText>

export default install(FText, FText.name)
