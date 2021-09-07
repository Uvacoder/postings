<script>
  import '../styles/variables.css'
  import '../styles/app.css'
  import { browser } from '$app/env'
  import { initFirebase } from '$lib/initFirebase'
  import firebase from '$lib/stores/firebase'
  import { onMount } from 'svelte'
  import breakpoint from '$lib/stores/breakpoint'
  import offline from '$lib/stores/offline'

  if (browser) {
    $firebase = initFirebase()
  }

  onMount(() => {
    $breakpoint = window.innerWidth

    window.addEventListener('online', () => {
      $offline = false
    })
    window.addEventListener('offline', () => {
      $offline = true
    })

    return () => {
      window.removeEventListener('online')
      window.removeEventListener('offline')
    }
  })
</script>

<slot />
