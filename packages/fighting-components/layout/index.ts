import FLayout from './src/layout.vue'

import { install } from '../_utils'

install(FLayout, FLayout.name)

export type FLayoutInstance = InstanceType<typeof FLayout>

export default FLayout
