import { useEffect, useState } from 'react'

export const useIsReady = () => {
  const [isReady, setisReady] = useState(false)
  useEffect(() => {
    setisReady(true)
  }, [])
  return isReady
}
