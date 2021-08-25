import { useEffect, useState } from 'react'

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(null)

  useEffect(() => {
    setScreenSize(window.innerWidth)
  }, [])

  return screenSize
}
