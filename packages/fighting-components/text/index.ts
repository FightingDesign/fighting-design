import FText from './src/text.vue'

import { install } from '../_utils'

install(FText, FText.name)

export type FTextInstance = InstanceType<typeof FText>

export default FText
