import <%= displayName %> from './src/<%= name %>.vue'

import { install } from '../_utils'

export type <%= displayName %>Instance = InstanceType<typeof <%= displayName %>>

export default install(<%= displayName %>, <%= displayName %>.name)
