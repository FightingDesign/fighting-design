import { useLoading } from '../_hooks'
import { install, installDirective } from '../_utils'
import type Loading from './src/loading.vue'

export const FLoading = install({
  directive: installDirective(useLoading(), 'loading')
})

/** loading 组件实例类型 */
export type LoadingInstance = InstanceType<typeof Loading>

export * from './src/interface'

export default FLoading
