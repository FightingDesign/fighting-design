import FHeader from './src/header.vue'

import { install } from '../_utils'

export type FHeaderInstance = InstanceType<typeof FHeader>

export default install(FHeader, FHeader.name)
