import type { App, VNode } from 'vue'

export interface mainVNodeInterface extends VNode {
  install: (app: App) => void
}

export interface installInterface {
  (main: mainVNodeInterface, name: string): void
}
