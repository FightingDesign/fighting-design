import <%= displayName %> from './src/<%= name %>.vue'

import { install } from '../_utils'

export const F<%= displayName %> = install(<%= displayName %>)

export type <%= displayName %>Instance = InstanceType<typeof <%= displayName %>>

export type { <%= displayName %>PropsType } from './src/<%= name %>'

declare module 'vue' {
  export interface GlobalComponents {
    F<%= displayName %>: typeof F<%= displayName %>
  }
}
