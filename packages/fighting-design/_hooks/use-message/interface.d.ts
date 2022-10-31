import type { MessagePlacementType } from '../../message/src/interface'
import type { NotificationPlacementType } from '../../notification/src/interface'
import type { MessageInstance } from '../../_interface'
import type { Component } from 'vue'

export interface DefaultOptionsInterface {
  message: { placement: MessagePlacementType }
  notification: { placement: NotificationPlacementType }
}

export interface ComponentVueInterface {
  message: Component
  notification: Component
}

export interface InstanceInterface {
  (options): MessageInstance
}
