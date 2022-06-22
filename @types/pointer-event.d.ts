/** 覆盖原生 PointerEvent，因为新增了两个属性：layerX 和 layerY */
interface PointerEvent extends MouseEvent {
  readonly height: number
  readonly isPrimary: boolean
  readonly pointerId: number
  readonly pointerType: string
  readonly pressure: number
  readonly tangentialPressure: number
  readonly tiltX: number
  readonly tiltY: number
  readonly twist: number
  readonly width: number
  readonly layerX: number
  readonly layerY: number
  /** Available only in secure contexts. */
  getCoalescedEvents(): PointerEvent[]
  getPredictedEvents(): PointerEvent[]
}

declare var PointerEvent: {
  prototype: PointerEvent
  new (type: string, eventInitDict?: PointerEventInit): PointerEvent
}
