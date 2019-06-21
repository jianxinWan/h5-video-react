const getMouseXY = (e: React.MouseEvent, out: HTMLDivElement | null) => {
  const event: any = e || window.event;
  const scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
  const x = event.pageX || event.clientX + scrollX;
  if (out !== null) {
    const position = out.getBoundingClientRect()
    const width = position.width
    const left = x - position.left
    return left / width
  }
}

export default getMouseXY