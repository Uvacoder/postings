import { useEffect, useState } from 'react'

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(null)

  useEffect(() => {
    setScreenSize(window.innerWidth)
  }, [])

  return screenSize
}

export const useOffline = () => {
  const [isOffline, setIsOffline] = useState(null)

  useEffect(() => {
    window.addEventListener('online', () => {
      setIsOffline(false)
    })
    window.addEventListener('offline', () => {
      setIsOffline(true)
    })

    return () => {
      window.removeEventListener('online')
      window.removeEventListener('offline')
    }
  }, [])

  return isOffline
}
