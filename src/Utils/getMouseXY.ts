interface IPercent {
  [props: string]: number
}

const getMouseXY = (e: React.MouseEvent, out: HTMLDivElement | null): IPercent => {
  const event: any = e || window.event;
  const scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
  const x = event.pageX || event.clientX + scrollX || event.touches[0].clientX + scrollX;
  const y = event.pageY || event.clientY + scrollY || event.touches[0].clientY + scrollY;
  if (out !== null) {
    const position = out.getBoundingClientRect()
    const width = position.width
    const height = position.height
    const left = x - position.left
    const top = y - position.top
    if (left !== 0 || top !== 0) {
      return {
        leftPercent: left / width,
        topPercent: (height - top) / height
      }
    }
  }
}

export default getMouseXY 