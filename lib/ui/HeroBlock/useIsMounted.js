import { useState, useEffect } from 'react'

const useIsMounted = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(!mounted)
  }, [])

  return mounted
}

export { useIsMounted }
