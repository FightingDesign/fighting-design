const supportTouch = (): boolean => {
  return !!(
    'ontouchstart' in window ||
    (window.navigator &&
      window.navigator.msPointerEnabled &&
      window.MSGesture) ||
    (window.DocumentTouch && document instanceof window.DocumentTouch)
  )
}

const getTouchEvents = (): Record<string, keyof GlobalEventHandlersEventMap> => {
  const touch = supportTouch()
  return {
    touchstart: touch ? 'touchstart' : 'mousedown',
    touchmove: touch ? 'touchmove' : 'mousemove',
    touchend: touch ? 'touchend' : 'mouseup'
  }
}

const { touchstart, touchmove, touchend } = getTouchEvents()

const getEventXY = (e: TouchEvent & MouseEvent): { x: number; y: number } => {
  const xy =
    touchstart === 'touchstart'
      ? {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
      : {
        x: e.clientX,
        y: e.clientY
      }

  return xy
}

const getTransformXY = (dom: HTMLElement): { x: number; y: number } => {
  let ntf = [0, 0]
  const tf = dom.style.transform.match(/([+-\d.]+(?=px))/g)
  if (tf) ntf = [Number(tf[0]) || 0, Number(tf[1]) || 0]
  const [x, y] = ntf
  return { x, y }
}

class Drag {
  target: HTMLElement
  callback: (
    e: TouchEvent & MouseEvent,
    opt: { x: number; y: number },
    more: { end: boolean }
  ) => void
  oldPosition = { x: 0, y: 0 }
  oldEposition = { x: 0, y: 0 }

  constructor (
    target: HTMLElement,
    callback: (
      e: TouchEvent & MouseEvent,
      opt: { x: number; y: number },
      more: { end: boolean }
    ) => void,
    options: { stop: boolean; prevent: boolean }
  ) {
    this.target = target
    this.callback = callback

    const stopselect = (e: TouchEvent & MouseEvent): void => {
      e.preventDefault()
    }
    const move = (e: TouchEvent & MouseEvent): void => {
      const { x, y } = getEventXY(e)
      const { oldEposition, oldPosition } = this
      const opt = {
        x: oldPosition.x + (x - oldEposition.x),
        y: oldPosition.y + (y - oldEposition.y)
      }
      if (options && options.stop) e.stopPropagation()
      if (options && options.prevent) e.preventDefault()
      if (callback) callback(e, opt, { end: false })
    }
    const end = (e: TouchEvent & MouseEvent): void => {
      const { x, y } = getEventXY(e)
      const { oldEposition, oldPosition } = this
      const opt = {
        x: oldPosition.x + (x - oldEposition.x),
        y: oldPosition.y + (y - oldEposition.y)
      }
      if (options && options.stop) e.stopPropagation()
      if (options && options.prevent) e.preventDefault()
      if (callback) callback(e, opt, { end: true })
      document.removeEventListener(touchmove, move)
      document.removeEventListener(touchend, end)
      document.removeEventListener('selectstart', stopselect)
    }

    const start = (e: TouchEvent & MouseEvent): void => {
      this.oldPosition = getTransformXY(target)
      this.oldEposition = getEventXY(e)
      if (options && options.stop) e.stopPropagation()
      if (options && options.prevent) e.preventDefault()
      document.addEventListener(touchmove, move, { passive: false })
      document.addEventListener(touchend, end, { passive: false })
      document.addEventListener('selectstart', stopselect)
    }

    this.target.addEventListener(touchstart, start, { passive: false })
  }
}

export default {
  beforeMount (
    el: HTMLElement,
    binding: {
      value: (
        e: TouchEvent & MouseEvent,
        opt: { x: number; y: number }
      ) => void
      modifiers: { stop: boolean; prevent: boolean }
    }
  ): void {
    new Drag(el, binding.value, binding.modifiers)
  }
}
