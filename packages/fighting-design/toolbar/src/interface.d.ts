export type { ToolbarPropsType } from './props'

export type ToolbarType = 'large' | 'middle' | 'small' | 'mini'

export interface ToolbarClickEmitInterface {
  evt: Event
  key: '1' | '2' | '3' | '4' | '5'
}

export interface ToolbarClickInterface {
  (target: ToolbarClickEmitInterface): void
}
