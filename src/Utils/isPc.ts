const isPc = () => {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return 0
  } else {
    return 1
  }
}

export default isPc