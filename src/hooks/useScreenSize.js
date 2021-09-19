import { useEffect, useState } from 'react'

export default function useScreenSize() {
  const [screenSize, setScreenSize] = useState(window.innerWidth)

  useEffect(() => {
    const resize = window.addEventListener('resize', () => {
      setScreenSize(window.innerWidth)
    })

    return () => window.removeEventListener('resize', resize)
  }, [])

  return screenSize
}
