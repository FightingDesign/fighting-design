import type { timingCallbackProps } from '../../_hooks/use-countdown/interface'

export type { CountdownProps } from './props'

export type timingCallback = (distance: timingCallbackProps) => void

export type endCallback = (dateTime: number) => void
