import StickPanel from './src/stick-panel.vue'

import { install } from '../_utils'

export const FStickPanel = install(StickPanel)

export type FStickPanelInstance = InstanceType<typeof StickPanel>

declare module 'vue' {
  export interface GlobalComponents {
    FStickPanel: typeof FStickPanel
  }
}
