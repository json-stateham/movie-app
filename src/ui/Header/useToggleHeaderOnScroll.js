import { useLayoutEffect, useRef, useState } from 'react'
import { throttle } from 'lib/throttle'

const useToggleHeaderOnScroll = () => {
  const [visible, setVisible] = useState(1)
  const prevScrollPos = useRef()
  const currScrollPos = useRef()
  const HEADER_HEIGHT = 60

  useLayoutEffect(() => {
    prevScrollPos.current = window.pageYOffset

    const handleScroll = () => {
      currScrollPos.current = window.pageYOffset

      prevScrollPos.current > currScrollPos.current || 
        prevScrollPos.current < HEADER_HEIGHT
        ? setVisible(1)
        : setVisible(0)

      prevScrollPos.current = currScrollPos.current
    }

    const throttledHandleScroll = throttle(handleScroll, 200)
    window.addEventListener('scroll', throttledHandleScroll)
    
    return () => window.removeEventListener('scroll', throttledHandleScroll)
  })

  return visible
}

export { useToggleHeaderOnScroll }