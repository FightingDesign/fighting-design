import <%= displayName %> from './src/<%= name %>.vue'

import { install } from '../_utils'

export const F<%= displayName %> = install(<%= displayName %>)

export type F<%= displayName %>Instance = InstanceType<typeof <%= displayName %>>

declare module 'vue' {
  export interface GlobalComponents {
    F<%= displayName %>: typeof F<%= displayName %>
  }
}
