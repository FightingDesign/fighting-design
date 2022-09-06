import <%= displayName %> from './src/<%= name %>.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(<%= displayName %>)

export const F<%= displayName %> = <%= displayName %>

export type <%= displayName %>Instance = InstanceType<typeof <%= displayName %>>
