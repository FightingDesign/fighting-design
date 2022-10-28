import Header from './src/header.vue'

import { install } from '../_utils'

export const FHeader = install(Header)

export type HeaderInstance = InstanceType<typeof Header>

export * from './src/interface.d'

export default Header
