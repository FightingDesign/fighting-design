export const clickRipples = (
  evt: PointerEvent,
  node: HTMLElement,
  time: number
): void => {
  // console.log(evt)
  // console.log(evt.clientX , evt.clientY)

  const x: number = evt.clientX - (evt.target as HTMLButtonElement).offsetLeft
  const y: number = evt.clientY - (evt.target as HTMLButtonElement).offsetTop

  console.log(x, y)

  const ripples: HTMLSpanElement = document.createElement('span')
  ripples.className = 'f-design-ripples'
  ripples.style.left = `${x}px`
  ripples.style.top = `${y}px`

  node.appendChild(ripples)

  setTimeout(() => {
    ripples.remove()
  }, time)
}
