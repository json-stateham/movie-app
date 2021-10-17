const throttle = (fn: () => void, ms: number) => {
  let prev: number = 0

  return () => {
    const now: number = new Date().valueOf()

    if (now - prev >= ms) {
      fn()
      prev = now
    }
  }
}

export { throttle }
