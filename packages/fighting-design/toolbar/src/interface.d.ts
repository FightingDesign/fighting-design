export type { ToolbarPropsType } from './props'

export type ToolbarType = 'large' | 'middle' | 'small' | 'mini'

export interface ToolbarClickEmitInterface {
  evt: Event
  key: string | undefined
}
