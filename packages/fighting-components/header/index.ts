import FHeader from './src/header.vue'

import { install } from '../_utils'

install(FHeader, FHeader.name)

export type FHeaderInstance = InstanceType<typeof FHeader>

export default FHeader
