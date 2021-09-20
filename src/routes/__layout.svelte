<script>
  import '../styles/variables.css'
  import '../styles/app.css'

  import { onMount } from 'svelte'
  import { firebase, breakpoint, offline } from '$lib/stores'
  import { browser } from '$app/env'
  import initFirebase from '$lib/initFirebase'

  if (browser) {
    $firebase = initFirebase()
  }

  onMount(() => {
    $breakpoint = window.innerWidth

    const resizeEvent = window.addEventListener('resize', () => {
      $breakpoint = window.innerWidth
    })
    const onlineEvent = window.addEventListener('online', () => {
      $offline = false
    })
    const offlineEvent = window.addEventListener('offline', () => {
      $offline = true
    })

    return () => {
      window.removeEventListener('resize', resizeEvent)
      window.removeEventListener('online', onlineEvent)
      window.removeEventListener('offline', offlineEvent)
    }
  })
</script>

<slot />
