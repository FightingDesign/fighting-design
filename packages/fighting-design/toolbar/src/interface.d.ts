export type { ToolbarProps } from './props'

export interface ToolbarClickParamsInterface {
  evt: MouseEvent
  index: string | undefined
}

export interface ToolbarClickInterface {
  (target: ToolbarClickParamsInterface): void
}
