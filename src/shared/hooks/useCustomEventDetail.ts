import { useEffect, useState } from 'react'

const useCustomEventDetail = (eventName: string) => {
  const [eventState, setEventState] = useState<any>(1)

  const handleDetail = ({ detail }: CustomEventInit) => setEventState(detail)

  useEffect(() => {
    window.addEventListener(eventName, handleDetail, false),
      () => window.removeEventListener(eventName, handleDetail, false)
  }, [eventName])

  return eventState
}

export { useCustomEventDetail }
