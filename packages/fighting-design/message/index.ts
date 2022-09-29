import Message from '../_model/message/method'

import { installFn } from '../_utils'

export const FMessage = installFn(Message, 'FMessage')

export type { MessageInstance } from '../_interface'

export type { MessagePropsType } from './src/message'

export type { MessageType, MessagePlacementType } from './src/interface'

declare module 'vue' {
  export interface ComponentCustomProperties {
    FMessage: typeof FMessage
  }
}
