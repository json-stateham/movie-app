const throttle = (fn, ms) => {
  let prev = 0

  return () => {
    const now = new Date()
    if (now - prev >= ms) {
      fn()
      prev = now
    }
  }
}

export { throttle }
