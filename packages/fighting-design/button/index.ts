import FButton from './src/button.vue'

import { install } from '../_utils'

export type FButtonInstance = InstanceType<typeof FButton>

export default install(FButton, FButton.name)
