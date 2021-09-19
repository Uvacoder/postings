import { useEffect, useState } from 'react'

export default function useOffline() {
  const [offline, setOffline] = useState(false)

  useEffect(() => {
    const online = window.addEventListener('online', () => {
      setOffline(false)
    })

    const offline = window.addEventListener('offline', () => {
      setOffline(true)
    })

    return () => {
      window.removeEventListener('online', online)
      window.removeEventListener('offline', offline)
    }
  }, [])

  return offline
}
