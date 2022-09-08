import <%= displayName %> from './src/<%= name %>.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(<%= displayName %>)

export const F<%= displayName %> = <%= displayName %>

export type F<%= displayName %>Instance = InstanceType<typeof <%= displayName %>>
