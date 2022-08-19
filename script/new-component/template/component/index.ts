import <%= displayName %> from './src/<%= name %>.vue'

import { install } from '../_utils'

install(<%= displayName %>, <%= displayName %>.name)

export type <%= displayName %>Instance = InstanceType<typeof <%= displayName %>>

export default <%= displayName %>
