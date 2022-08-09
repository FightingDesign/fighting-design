import FButton from './src/button.vue'

import { install } from '../_utils'

install(FButton, FButton.name)

export type FButtonInstance = InstanceType<typeof FButton>

export default FButton
