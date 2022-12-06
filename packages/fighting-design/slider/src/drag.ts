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
  callback: (options: { x: number; y: number }) => void
  oldPosition = { x: 0, y: 0 }
  oldEPosition = { x: 0, y: 0 }

  constructor (
    target: HTMLElement,
    callback: (options: { x: number; y: number }) => void
  ) {
    this.target = target
    this.callback = callback

    /**
     * 移动触发的回调
     * 
     * @param evt 事件对象
     */
    const move = (evt: MouseEvent): void => {
      const { x, y } = getEventXY(evt)
      const { oldEPosition, oldPosition } = this

      const options = {
        x: oldPosition.x + (x - oldEPosition.x),
        y: oldPosition.y + (y - oldEPosition.y)
      }

      callback && callback(options)
    }

    /**
     * 移动结束的回调
     * 
     * @param evt 事件对象
     */
    const end = (evt: MouseEvent): void => {
      const { x, y } = getEventXY(evt)
      const { oldEPosition, oldPosition } = this

      const options = {
        x: oldPosition.x + (x - oldEPosition.x),
        y: oldPosition.y + (y - oldEPosition.y)
      }

      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseup', end)
      callback && callback(options)
    }

    /**
     * 开始移动触发的回调
     * 
     * @param evt 事件对象
     */
    const start = (evt: MouseEvent): void => {
      this.oldPosition = getTransformXY(target)
      this.oldEPosition = getEventXY(evt)

      document.addEventListener('mousemove', move, { passive: false })
      document.addEventListener('mouseup', end, { passive: false })
    }

    this.target.addEventListener('mousedown', start, { passive: false })
  }
}

export default {
  beforeMount (
    el: HTMLElement,
    binding: {
      value: (options: { x: number; y: number }) => void
    }
  ): void {
    new Drag(el, binding.value)
  }
}
