import Message from './src/method'

import { installFn } from '../_utils'

export const FMessage = /* @__PURE__ */ (() => installFn(Message, 'FMessage'))()

export type { FMessageInstance } from '../_interface'
