const getEventXY = (e: MouseEvent): { x: number; y: number } => {
  return {
    x: e.clientX,
    y: e.clientY
  }
}

const getTransformXY = (dom: HTMLElement): { x: number; y: number } => {
  let ntf = [0, 0]
  const tf = dom.style.transform.match(/([+-\d.]+(?=px))/g)
  if (tf) {
    ntf = [Number(tf[0]) || 0, Number(tf[1]) || 0]
  }
  const [x, y] = ntf

  return { x, y }
}

class Drag {
  target: HTMLElement
  callback: (e: MouseEvent, opt: { x: number; y: number }, more: { end: boolean }) => void
  oldPosition = { x: 0, y: 0 }
  oldEposition = { x: 0, y: 0 }

  constructor (
    target: HTMLElement,
    callback: (e: MouseEvent, opt: { x: number; y: number }, more: { end: boolean }) => void,
    options: { stop: boolean; prevent: boolean }
  ) {
    this.target = target
    this.callback = callback

    const stopSelect = (evt: MouseEvent): void => {
      evt.preventDefault()
    }

    const move = (evt: MouseEvent): void => {
      const { x, y } = getEventXY(evt)
      const { oldEposition, oldPosition } = this
      const opt = {
        x: oldPosition.x + (x - oldEposition.x),
        y: oldPosition.y + (y - oldEposition.y)
      }
      if (options && options.stop) evt.stopPropagation()
      if (options && options.prevent) evt.preventDefault()
      if (callback) callback(evt, opt, { end: false })
    }

    const end = (evt: MouseEvent): void => {
      const { x, y } = getEventXY(evt)
      const { oldEposition, oldPosition } = this
      const opt = {
        x: oldPosition.x + (x - oldEposition.x),
        y: oldPosition.y + (y - oldEposition.y)
      }
      if (options && options.stop) evt.stopPropagation()
      if (options && options.prevent) evt.preventDefault()
      if (callback) callback(evt, opt, { end: true })
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseup', end)
      document.removeEventListener('selectstart', stopSelect)
    }

    const start = (evt: MouseEvent): void => {
      this.oldPosition = getTransformXY(target)
      this.oldEposition = getEventXY(evt)
      if (options && options.stop) evt.stopPropagation()
      if (options && options.prevent) evt.preventDefault()
      document.addEventListener('mousemove', move, { passive: false })
      document.addEventListener('mouseup', end, { passive: false })
      document.addEventListener('selectstart', stopSelect)
    }

    this.target.addEventListener('mousedown', start, { passive: false })
  }
}

export default {
  beforeMount (
    el: HTMLElement,
    binding: {
      value: (e: MouseEvent, opt: { x: number; y: number }) => void
      modifiers: { stop: boolean; prevent: boolean }
    }
  ): void {
    new Drag(el, binding.value, binding.modifiers)
  }
}
