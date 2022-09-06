import <%= displayName %> from './src/<%= name %>.vue'

import { install } from '../_utils'

export const F<%= displayName %> = /* @__PURE__ */ () => install(<%= displayName %>)

export type <%= displayName %>Instance = InstanceType<typeof <%= displayName %>>
