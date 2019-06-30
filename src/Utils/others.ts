

export function throttle(fn, wait) {
  let timer = null
  let start = parseInt(new Date() + '', 10)
  wait = wait || 160
  return function () {
    const args = arguments
    const context = this
    const now = parseInt(new Date() + '', 10) - 0
    clearTimeout(timer)
    if (now - start >= wait) {
      fn.apply(context, args)
      start = now
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args)
      }, wait)
    }
  }
}

export function debounce(fn, wait) {
  let timer = null
  wait = wait || 320
  return function () {
    const args = arguments
    const context = this
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(args, context)
    }, wait)
  }
}

export default {
  throttle,
  debounce
}