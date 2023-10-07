import <%= displayName %> from './src/<%= name %>.vue'

import { install } from '../_utils'

export const F<%= displayName %> = install(<%= displayName %>)

export type <%= displayName %>Instance = InstanceType<typeof <%= displayName %>>

export * from './src/interface'

export default F<%= displayName %>
